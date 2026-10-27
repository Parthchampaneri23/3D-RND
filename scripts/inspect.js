const fs = require('fs');

function inspect(filePath) {
  const buf = fs.readFileSync(filePath);
  const jsonLen = buf.readUInt32LE(12);
  const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
  const gltf = JSON.parse(jsonStr);
  console.log('=== ' + filePath + ' ===');
  console.log('Animations:', (gltf.animations || []).map(a => {
    return {
      name: a.name,
      channelsCount: a.channels ? a.channels.length : 0,
      animatedNodes: (a.channels || []).slice(0, 15).map(c => gltf.nodes[c.target.node]?.name + '.' + c.target.path)
    };
  }));
}

inspect('public/models/astronaut.glb');

