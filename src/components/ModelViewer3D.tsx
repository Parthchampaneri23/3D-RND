"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Loader2, Rotate3d, Sparkles } from "lucide-react";

interface ModelViewer3DProps {
  modelPath?: string;
  className?: string;
}

export default function ModelViewer3D({
  modelPath = "/RikModelExport26.glb",
  className = "w-full h-[450px] sm:h-[520px]",
}: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 3.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI / 1.7;
    controls.minPolarAngle = Math.PI / 3;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4ff00, 2.5); // Neon Lime Accent
    dirLight1.position.set(5, 8, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 2.0); // Cyan Accent
    dirLight2.position.set(-5, 4, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xe2f952, 2.8, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Group | null = null;

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;

        // Auto center and scale
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.0 / (maxDim || 1);
        model.scale.setScalar(scale);

        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale - 0.2;
        model.position.z = -center.z * scale;

        scene.add(model);

        // Animations if present
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.error("Error loading 3D model:", err);
        setLoading(false);
      }
    );

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (mixer) mixer.update(delta);
      controls.update();

      // Subtle float
      if (model) {
        model.position.y += Math.sin(now * 0.0015) * 0.0008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
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
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#d4ff00]/15 via-cyan-500/10 to-indigo-500/15 blur-[90px]" />
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20 bg-[#070913]/60 backdrop-blur-sm rounded-2xl">
          <Loader2 className="w-8 h-8 text-[#d4ff00] animate-spin" />
          <div className="text-xs font-mono text-slate-300">
            Loading Interactive 3D Model... {loadProgress > 0 ? `${loadProgress}%` : ""}
          </div>
        </div>
      )}

      {/* Orbit Tip Hint */}
      {!loading && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-slate-400 pointer-events-none">
          <Rotate3d className="w-3.5 h-3.5 text-[#d4ff00]" />
          <span>Click & Drag to Rotate 3D Model</span>
        </div>
      )}

      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
