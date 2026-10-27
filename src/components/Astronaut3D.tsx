"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Loader2, Rotate3d } from "lucide-react";

interface Astronaut3DProps {
  modelPath?: string;
  className?: string;
}

export default function Astronaut3D({
  modelPath = "/RikModelExport22.glb",
  className = "w-full h-[480px] sm:h-[580px] lg:h-[640px]",
}: Astronaut3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.4, 3.4);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.maxPolarAngle = Math.PI / 1.7;
    controls.minPolarAngle = Math.PI / 3;

    // Lighting (Yellow-accented Studio Setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Main key light from top-right
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 7, 5);
    scene.add(keyLight);

    // Intense Yellow Visor / Helmet Rim Light
    const yellowRimLight = new THREE.DirectionalLight(0xffd400, 3.8);
    yellowRimLight.position.set(0, 2.5, 3.2);
    scene.add(yellowRimLight);

    // Warm Yellow Fill from bottom
    const yellowFillLight = new THREE.PointLight(0xffea00, 3.0, 8);
    yellowFillLight.position.set(0, 0.2, 2.5);
    scene.add(yellowFillLight);

    // Back rim light for separation
    const backLight = new THREE.DirectionalLight(0xffee55, 2.5);
    backLight.position.set(-3, 4, -4);
    scene.add(backLight);

    let mixer: THREE.AnimationMixer | null = null;
    let modelGroup: THREE.Group | null = null;

    // Load RikModelExport22.glb
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        modelGroup = gltf.scene;

        // Auto-center and normalize scale
        const box = new THREE.Box3().setFromObject(modelGroup);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.45 / (maxDim || 1);
        modelGroup.scale.setScalar(scale);

        // Position slightly lower so the astronaut torso and helmet are centered in view
        modelGroup.position.x = -center.x * scale;
        modelGroup.position.y = -center.y * scale - 0.2;
        modelGroup.position.z = -center.z * scale;

        // Traverse meshes to enhance yellow specular highlights
        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        scene.add(modelGroup);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(modelGroup);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.error("Failed to load astronaut GLB model:", err);
        setLoading(false);
      }
    );

    // Render & Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (mixer) mixer.update(delta);
      controls.update();

      // Gentle floating animation
      if (modelGroup) {
        modelGroup.position.y += Math.sin(now * 0.0018) * 0.0006;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Halo Behind Helmet matching the reference image */}
      <div className="absolute top-[28%] sm:top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none z-0">
        {/* Animated Dashed Golden Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-[#FFD400]/40 animate-spin"
          style={{ animationDuration: "30s" }}
        >
          <div className="w-3 h-3 bg-[#FFD400] rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-yellow-glow" />
          <div className="w-2 h-2 bg-white rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-md" />
        </div>

        {/* Pulsing Visor Glow Behind */}
        <div className="absolute inset-8 rounded-full bg-[#FFD400]/25 blur-3xl visor-glow" />
        <div className="absolute inset-16 rounded-full border border-[#FFD400]/60 shadow-[0_0_30px_rgba(255,212,0,0.5)]" />
      </div>

      {/* Loading State Indicator */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-30 bg-[#080808]/70 backdrop-blur-md rounded-3xl">
          <Loader2 className="w-10 h-10 text-[#FFD400] animate-spin" />
          <div className="text-xs font-mono tracking-wider text-[#FFD400] uppercase">
            Loading 3D Astronaut... {progress > 0 ? `${progress}%` : ""}
          </div>
          <div className="text-[11px] font-mono text-neutral-400">RikModelExport22.glb</div>
        </div>
      )}

      {/* Interactive Orbit Tip */}
      {!loading && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FFD400]/30 text-[11px] font-mono text-neutral-300 shadow-yellow-glow pointer-events-none">
          <Rotate3d className="w-3.5 h-3.5 text-[#FFD400]" />
          <span>Interactive 3D • Drag to Rotate Astronaut</span>
        </div>
      )}

      {/* Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />
    </div>
  );
}
