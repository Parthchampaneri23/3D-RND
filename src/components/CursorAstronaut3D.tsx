"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Float, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

interface CursorAstronautModelProps {
  modelPath?: string;
  intensity?: number;
  sensitivity?: {
    rotX?: number; // Pitch tilt multiplier
    rotY?: number; // Yaw turn multiplier
    rotZ?: number; // Roll bank multiplier
    posX?: number; // Parallax horizontal shift
    posY?: number; // Parallax vertical shift
  };
  enableFloat?: boolean;
  scale?: number;
}

/**
 * 3D Model Mesh with Full Real-time Cursor & Physics Tracking
 */
export function CursorAstronautModel({
  modelPath = "/models/wh63ab6b.glb",
  intensity = 1,
  sensitivity = {
    rotX: 0.5, // ~28 degrees pitch
    rotY: 0.8, // ~45 degrees yaw
    rotZ: 0.15, // subtle bank
    posX: 0.35, // parallax drift X
    posY: 0.25, // parallax drift Y
  },
  enableFloat = true,
  scale = 1.6,
}: CursorAstronautModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  // Enhance materials for glowing gold rim & deep contrast
  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness ?? 0.5, 0.4);
          mat.metalness = Math.max(mat.metalness ?? 0.2, 0.45);
        }
      }
    });
  }, [scene]);

  // 60/120 FPS Render Loop: Handles continuous pointer tracking & damping
  useFrame((state, delta) => {
    if (!modelRef.current) return;

    // state.pointer provides normalized mouse coordinates:
    // pointer.x: [-1 (left) to +1 (right)]
    // pointer.y: [-1 (bottom) to +1 (top)]
    const pointerX = state.pointer.x * intensity;
    const pointerY = state.pointer.y * intensity;
    const time = state.clock.getElapsedTime();

    // 1. Calculate Target Rotations based on Cursor:
    // - Horizontal movement -> Yaw rotation (turn left/right to face cursor)
    // - Vertical movement -> Pitch rotation (tilt up/down towards cursor)
    // - Subtle roll -> Banks into cursor direction for weight and realism
    const targetRotY = pointerX * (sensitivity.rotY ?? 0.8);
    const targetRotX = -pointerY * (sensitivity.rotX ?? 0.5);
    const targetRotZ = -pointerX * (sensitivity.rotZ ?? 0.15);

    // 2. Calculate Target Positions (Parallax Drift + Zero-G Float):
    const floatY = enableFloat ? Math.sin(time * 1.5) * 0.08 : 0;
    const floatZ = enableFloat ? Math.cos(time * 1.2) * 0.04 : 0;
    const targetPosX = pointerX * (sensitivity.posX ?? 0.35);
    const targetPosY = pointerY * (sensitivity.posY ?? 0.25) + floatY;
    const targetPosZ = floatZ;

    // 3. Smooth Damping (Frame-rate independent LERP):
    // THREE.MathUtils.damp guarantees buttery motion on 60Hz, 120Hz, and 144Hz monitors
    const dampSpeed = 5.5; // Smooth responsiveness factor
    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      targetRotY,
      dampSpeed,
      delta
    );
    modelRef.current.rotation.x = THREE.MathUtils.damp(
      modelRef.current.rotation.x,
      targetRotX,
      dampSpeed,
      delta
    );
    modelRef.current.rotation.z = THREE.MathUtils.damp(
      modelRef.current.rotation.z,
      targetRotZ,
      dampSpeed,
      delta
    );

    modelRef.current.position.x = THREE.MathUtils.damp(
      modelRef.current.position.x,
      targetPosX,
      dampSpeed,
      delta
    );
    modelRef.current.position.y = THREE.MathUtils.damp(
      modelRef.current.position.y,
      targetPosY,
      dampSpeed,
      delta
    );
    modelRef.current.position.z = THREE.MathUtils.damp(
      modelRef.current.position.z,
      targetPosZ,
      dampSpeed,
      delta
    );
  });

  return (
    <group ref={modelRef} scale={scale} dispose={null}>
      {/* Center the 1.95m model so it rotates around its chest/heart origin */}
      <Center top={false}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Preload the model for zero latency
useGLTF.preload("/models/wh63ab6b.glb");

interface CursorAstronautCanvasProps {
  modelPath?: string;
  className?: string;
  intensity?: number;
  scale?: number;
  cameraPosition?: [number, number, number];
  showShadows?: boolean;
}

/**
 * Complete Canvas Wrapper with Cinematic Studio Lighting & Ambient Glow
 */
export default function CursorAstronautCanvas({
  modelPath = "/models/wh63ab6b.glb",
  className = "w-full h-full min-h-[450px]",
  intensity = 1,
  scale = 1.6,
  cameraPosition = [0, 0, 3.8],
  showShadows = true,
}: CursorAstronautCanvasProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
      >
        {/* Soft Ambient Space Light */}
        <ambientLight intensity={0.65} />

        {/* Key Directional Light (Crisp White Highlights) */}
        <directionalLight position={[4, 5, 4]} intensity={1.8} castShadow />

        {/* Rim / Backlight in Signature Gold (#FFD400) for Cyber Atmosphere */}
        <spotLight
          position={[-5, 4, -3]}
          angle={0.6}
          penumbra={1}
          intensity={3.2}
          color="#FFD400"
        />

        {/* Cyan / Blue Accent Fill Light */}
        <pointLight position={[3, -2, -2]} intensity={1.2} color="#00E5FF" />

        {/* 3D Model with Cursor Tracking */}
        <Suspense fallback={null}>
          <CursorAstronautModel
            modelPath={modelPath}
            intensity={intensity}
            scale={scale}
          />

          {showShadows && (
            <ContactShadows
              position={[0, -1.35, 0]}
              opacity={0.6}
              scale={6}
              blur={2.4}
              far={4}
              color="#000000"
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
