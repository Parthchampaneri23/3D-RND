"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface AstronautCursorFollowProps {
  modelPath?: string;
  className?: string;
  activeTopic?: number;
}

export default function AstronautCursorFollow({
  modelPath = "/RikModelExport22.glb",
  className = "w-full h-full min-h-[500px] sm:min-h-[620px] lg:min-h-[700px]",
  activeTopic = 0,
}: AstronautCursorFollowProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  // Store active topic reference for real-time animation loop blending
  const activeTopicRef = useRef(activeTopic);
  useEffect(() => {
    activeTopicRef.current = activeTopic;
  }, [activeTopic]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.2, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    container.appendChild(renderer.domElement);

    // 2. Cinematic Multi-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    // Planet horizon glow from bottom-left
    const planetGlowLight = new THREE.DirectionalLight(0xffd400, 4.0);
    planetGlowLight.position.set(-3, -4, 3);
    scene.add(planetGlowLight);

    // Top-right key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 7, 5);
    scene.add(keyLight);

    // Back rim light to create glowing outline in space
    const rimLight = new THREE.DirectionalLight(0xffea70, 3.2);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    // Point light on visor reflection
    const visorLight = new THREE.PointLight(0xffd400, 3.2, 5);
    visorLight.position.set(0, 0.85, 2.0);
    scene.add(visorLight);

    // 3. Master Astronaut Group
    const astronautGroup = new THREE.Group();
    scene.add(astronautGroup);

    // --- GOLDEN SPACE PARTICLES / FIREFLIES ---
    const particlesCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 3.5;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffd400,
      size: 0.035,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const spaceDust = new THREE.Points(particleGeo, particleMat);
    scene.add(spaceDust);

    // --- RND TECHNOSOFT CHEST EMBLEM BADGE ---
    const badgeCanvas = document.createElement("canvas");
    badgeCanvas.width = 512;
    badgeCanvas.height = 256;
    const ctx = badgeCanvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#0c0d12";
      ctx.beginPath();
      ctx.roundRect(10, 10, 492, 236, 32);
      ctx.fill();

      // Golden Outer Border
      ctx.strokeStyle = "#FFD400";
      ctx.lineWidth = 12;
      ctx.stroke();

      // Inner Border
      ctx.strokeStyle = "rgba(255, 212, 0, 0.4)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(24, 24, 464, 208, 20);
      ctx.stroke();

      // Brand Curve Symbol
      ctx.fillStyle = "#FFD400";
      ctx.beginPath();
      ctx.arc(95, 128, 48, Math.PI * 0.5, Math.PI * 1.5, false);
      ctx.lineWidth = 22;
      ctx.strokeStyle = "#FFD400";
      ctx.stroke();

      // Brand Title "RND"
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 64px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("RND", 175, 112);

      // "TECHNOSOFT" in Cyber Yellow
      ctx.fillStyle = "#FFD400";
      ctx.font = "bold 46px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("TECHNOSOFT", 175, 162);

      // Slogan
      ctx.fillStyle = "#A3A3A3";
      ctx.font = "bold 20px 'JetBrains Mono', monospace";
      ctx.fillText("CREATIVITY • TECH • INNOVATION", 175, 196);
    }

    const badgeTexture = new THREE.CanvasTexture(badgeCanvas);
    badgeTexture.needsUpdate = true;

    const badgeMat = new THREE.MeshStandardMaterial({
      map: badgeTexture,
      roughness: 0.25,
      metalness: 0.65,
      emissive: new THREE.Color(0xffd400),
      emissiveIntensity: 0.4,
    });
    const badgeGeo = new THREE.PlaneGeometry(0.55, 0.28);
    const chestBadge = new THREE.Mesh(badgeGeo, badgeMat);
    chestBadge.position.set(0, 0.17, 0.44);
    chestBadge.rotation.x = -0.05;
    astronautGroup.add(chestBadge);

    // Glowing beacons on shoulders
    const beaconGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffd400 });

    const rightBeacon = new THREE.Mesh(beaconGeo, beaconMat);
    rightBeacon.position.set(0.32, 0.45, 0.35);
    astronautGroup.add(rightBeacon);

    const leftBeacon = new THREE.Mesh(beaconGeo, beaconMat);
    leftBeacon.position.set(-0.32, 0.45, 0.35);
    astronautGroup.add(leftBeacon);

    // --- HOLOGRAPHIC 3D HUD BADGE ---
    const holoBadgeCanvas = document.createElement("canvas");
    holoBadgeCanvas.width = 400;
    holoBadgeCanvas.height = 140;
    const hbCtx = holoBadgeCanvas.getContext("2d");
    if (hbCtx) {
      hbCtx.fillStyle = "rgba(12, 16, 26, 0.88)";
      hbCtx.beginPath();
      hbCtx.roundRect(8, 8, 384, 124, 24);
      hbCtx.fill();

      hbCtx.strokeStyle = "#FFD400";
      hbCtx.lineWidth = 6;
      hbCtx.stroke();

      hbCtx.fillStyle = "#FFD400";
      hbCtx.font = "bold 28px 'Plus Jakarta Sans', sans-serif";
      hbCtx.textAlign = "center";
      hbCtx.fillText("✦ RND TECHNOSOFT ✦", 200, 52);

      hbCtx.fillStyle = "#FFFFFF";
      hbCtx.font = "bold 18px 'JetBrains Mono', monospace";
      hbCtx.fillText("AI • CLOUD • 3D WEB", 200, 92);
    }
    const holoBadgeTexture = new THREE.CanvasTexture(holoBadgeCanvas);
    const holoBadgeMat = new THREE.MeshBasicMaterial({
      map: holoBadgeTexture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    const holoBadgeMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.24), holoBadgeMat);
    holoBadgeMesh.position.set(0.62, 0.58, 0.25);
    astronautGroup.add(holoBadgeMesh);

    // 4. Bones & Animation Mixer for RikModelExport22.glb
    let mixer: THREE.AnimationMixer | null = null;
    let upperArmRight: THREE.Object3D | null = null;
    let lowerArmRight: THREE.Object3D | null = null;
    let handRight: THREE.Object3D | null = null;
    let headBone: THREE.Object3D | null = null;

    // Load RikModelExport22.glb
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.5 / (maxDim || 1);
        model.scale.setScalar(scale);

        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale - 0.12;
        model.position.z = -center.z * scale;

        // Traverse and bind to RikModelExport22 bones:
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Make materials pop with golden reflections
            if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
              const stdMat = mesh.material as THREE.MeshStandardMaterial;
              stdMat.envMapIntensity = 1.3;
              stdMat.roughness = Math.min(stdMat.roughness, 0.45);
            }
          }

          const name = child.name;
          if (name === "Upper_Arm_Right") {
            upperArmRight = child;
          } else if (name === "Lower_Arm_Right") {
            lowerArmRight = child;
          } else if (name === "Heand_Right") {
            handRight = child;
          } else if (name === "Head") {
            headBone = child;
          }
        });

        // Play Blink2 animation smoothly
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.setEffectiveTimeScale(0.8);
          action.play();
        }

        astronautGroup.add(model);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Failed to load RikModelExport22.glb:", err);
        setLoading(false);
      }
    );

    // 5. Cursor Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 6. Scroll Parallax Listener
    let currentScrollY = 0;
    let targetScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 7. Main Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Update Blink2 animation
      if (mixer) {
        mixer.update(delta);
      }

      const elapsedTime = now * 0.001;

      // Rotate space dust fireflies
      spaceDust.rotation.y = elapsedTime * 0.04;
      spaceDust.rotation.x = elapsedTime * 0.02;

      // Smooth Scroll Interpolation
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      const scrollProgress = Math.min(currentScrollY / 900, 1.5);

      // Base Floating & Breathing Physics
      const floatY = Math.sin(elapsedTime * 1.5) * 0.09;
      const floatX = Math.cos(elapsedTime * 1.1) * 0.04;

      astronautGroup.position.y = floatY - scrollProgress * 0.5;
      astronautGroup.position.x = floatX + scrollProgress * 0.2;
      astronautGroup.position.z = scrollProgress * 0.4;

      // Cursor follow rotation (smooth lerp)
      targetX = mouseX * 0.6;
      targetY = mouseY * 0.4;

      astronautGroup.rotation.y += (targetX + scrollProgress * 0.45 - astronautGroup.rotation.y) * 0.06;
      astronautGroup.rotation.x += (targetY - scrollProgress * 0.12 - astronautGroup.rotation.x) * 0.06;
      astronautGroup.rotation.z = Math.sin(elapsedTime * 0.8) * 0.025 + mouseX * 0.04;

      // Holographic Badge Float
      holoBadgeMesh.position.y = 0.58 + Math.sin(elapsedTime * 2.5) * 0.025;

      // --- PROCEDURAL HAND GESTURE & EXPLAINING ANIMATION ---
      const topic = activeTopicRef.current;
      const gestureCycle = Math.sin(elapsedTime * 2.0);

      if (upperArmRight) {
        // Arm naturally extends and gestures
        const targetArmX = -0.32 + mouseY * 0.18 + (topic === 0 ? 0.12 : 0.04);
        const targetArmZ = -0.32 + mouseX * 0.22 + gestureCycle * 0.07;
        upperArmRight.rotation.x += (targetArmX - upperArmRight.rotation.x) * 0.08;
        upperArmRight.rotation.z += (targetArmZ - upperArmRight.rotation.z) * 0.08;
      }

      if (lowerArmRight) {
        const targetForeX = 0.62 + gestureCycle * 0.1;
        lowerArmRight.rotation.x += (targetForeX - lowerArmRight.rotation.x) * 0.08;
      }

      if (handRight) {
        // Welcoming hand wave towards cursor
        const wave = Math.sin(elapsedTime * 3.6) * 0.22;
        handRight.rotation.z += (wave - handRight.rotation.z) * 0.1;
        handRight.rotation.y += (mouseX * 0.25 - handRight.rotation.y) * 0.08;
      }

      if (headBone) {
        // Head looks directly towards cursor
        headBone.rotation.y += (mouseX * 0.42 - headBone.rotation.y) * 0.08;
        headBone.rotation.x += (-mouseY * 0.28 - headBone.rotation.x) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
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
      {/* Golden Orbital Ellipse Rings around Astronaut */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        {/* Ring 1 */}
        <div
          className="w-[380px] sm:w-[480px] lg:w-[580px] h-[380px] sm:h-[480px] lg:h-[580px] rounded-full border border-[#FFD400]/30 shadow-[0_0_35px_rgba(255,212,0,0.18)] animate-spin"
          style={{ animationDuration: "40s", transform: "rotateX(65deg) rotateY(15deg)" }}
        />
        {/* Ring 2 */}
        <div
          className="absolute w-[450px] sm:w-[550px] lg:w-[660px] h-[450px] sm:h-[550px] lg:h-[660px] rounded-full border border-dashed border-[#FFD400]/25 animate-spin"
          style={{ animationDuration: "60s", animationDirection: "reverse", transform: "rotateX(72deg) rotateY(-25deg)" }}
        />
        {/* Ambient Gold Glow Core */}
        <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#FFD400]/15 blur-[95px] pointer-events-none" />
      </div>

      {/* Loading state indicator */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
          <div className="w-12 h-12 border-3 border-[#FFD400] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-[#FFD400] tracking-wider uppercase">
            RikModelExport22.glb • Initializing Mission...
          </span>
        </div>
      )}

      {/* Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />
    </div>
  );
}
