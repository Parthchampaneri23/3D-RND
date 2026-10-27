"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export interface AstronautActionPose {
  targetX?: number;
  targetY?: number;
  targetRotY?: number;
  targetRotX?: number;
  headYawOffset?: number;
  headPitchOffset?: number;
  armLeftRotX?: number;
  armLeftRotZ?: number;
  armRightRotX?: number;
  armRightRotZ?: number;
}

interface AstronautProps {
  modelPath?: string;
  className?: string;
  pose?: AstronautActionPose;
  targetSide?: "center" | "left" | "right";
}

function AstronautCenterModel({
  modelPath = "/models/astronaut.glb",
  pose,
}: {
  modelPath?: string;
  pose?: AstronautActionPose;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);
  const { actions, names } = useAnimations(animations, group);

  // References for skeletal bones
  const headRef = useRef<THREE.Object3D | null>(null);
  const neckRef = useRef<THREE.Object3D | null>(null);
  const upperArmLeftRef = useRef<THREE.Object3D | null>(null);
  const upperArmRightRef = useRef<THREE.Object3D | null>(null);
  const initialRotations = useRef<{ [key: string]: THREE.Euler }>({});

  // Current interpolated values for 60 FPS smooth transitions
  const curX = useRef(0);
  const curY = useRef(0);
  const curRotY = useRef(0);
  const curRotX = useRef(0);
  const curHeadYaw = useRef(0);
  const curHeadPitch = useRef(0);
  const curArmLX = useRef(0);
  const curArmLZ = useRef(0);
  const curArmRX = useRef(0);
  const curArmRZ = useRef(0);

  // 1. Play base standing animation so arms and hands stay calm at sides
  useEffect(() => {
    const animName = names.find((n) => n === "Blink2") || names[0];
    if (animName && actions[animName]) {
      const action = actions[animName];
      action.reset().fadeIn(0.5).play();
      return () => {
        action.fadeOut(0.3);
      };
    }
  }, [actions, names]);

  // 2. Discover bones and attach glowing neon visor halo to Head bone
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness ?? 0.45, 0.35);
          mat.metalness = Math.max(mat.metalness ?? 0.3, 0.55);
        }
      }

      if (child.name === "Head") {
        headRef.current = child;
      } else if (child.name === "Neck") {
        neckRef.current = child;
      } else if (child.name === "Upper_Arm_Left") {
        upperArmLeftRef.current = child;
      } else if (child.name === "Upper_Arm_Right") {
        upperArmRightRef.current = child;
      }

      if (child.isObject3D && !initialRotations.current[child.name]) {
        initialRotations.current[child.name] = child.rotation.clone();
      }
    });
  }, [scene]);

  // 3. Render Loop:
  // - Smooth position lerping across screen (center, left, right)
  // - Action poses for body rotation, head direction & arm gestures
  // - Natural zero-gravity floating oscillation
  // - Cursor pointer tracking
  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;

    // Subtle zero-gravity float
    const floatY = Math.sin(time * 1.4) * 0.03;

    const tX = pose?.targetX ?? 0;
    const tY = (pose?.targetY ?? 0) + floatY;
    const tRotY = pose?.targetRotY ?? 0;
    const tRotX = pose?.targetRotX ?? 0;
    const tHeadYaw = pose?.headYawOffset ?? 0;
    const tHeadPitch = pose?.headPitchOffset ?? 0;
    const tArmLX = pose?.armLeftRotX ?? 0;
    const tArmLZ = pose?.armLeftRotZ ?? 0;
    const tArmRX = pose?.armRightRotX ?? 0;
    const tArmRZ = pose?.armRightRotZ ?? 0;

    // 1. Position lerping
    curX.current = THREE.MathUtils.lerp(curX.current, tX, 0.07);
    curY.current = THREE.MathUtils.lerp(curY.current, tY, 0.07);
    group.current.position.x = curX.current;
    group.current.position.y = curY.current;

    // 2. Body rotation lerping (target pose + subtle pointer reaction)
    const pointerHeadYaw = state.pointer.x * 0.45;
    const pointerHeadPitch = -state.pointer.y * 0.35;
    const pointerBodyYaw = state.pointer.x * 0.08;

    curRotY.current = THREE.MathUtils.lerp(curRotY.current, tRotY + pointerBodyYaw, 0.06);
    curRotX.current = THREE.MathUtils.lerp(curRotX.current, tRotX, 0.06);
    group.current.rotation.y = curRotY.current;
    group.current.rotation.x = curRotX.current;

    // 3. Head & Neck tracking
    curHeadYaw.current = THREE.MathUtils.lerp(curHeadYaw.current, tHeadYaw + pointerHeadYaw, 0.08);
    curHeadPitch.current = THREE.MathUtils.lerp(curHeadPitch.current, tHeadPitch + pointerHeadPitch, 0.08);

    if (headRef.current) {
      headRef.current.rotation.y = curHeadYaw.current;
      headRef.current.rotation.x = curHeadPitch.current;
      headRef.current.rotation.z = -pointerHeadYaw * 0.08;
    }

    if (neckRef.current) {
      neckRef.current.rotation.y = curHeadYaw.current * 0.35;
      neckRef.current.rotation.x = curHeadPitch.current * 0.25;
    }

    // 4. Arms action poses
    curArmLX.current = THREE.MathUtils.lerp(curArmLX.current, tArmLX, 0.06);
    curArmLZ.current = THREE.MathUtils.lerp(curArmLZ.current, tArmLZ, 0.06);
    curArmRX.current = THREE.MathUtils.lerp(curArmRX.current, tArmRX, 0.06);
    curArmRZ.current = THREE.MathUtils.lerp(curArmRZ.current, tArmRZ, 0.06);

    if (upperArmLeftRef.current && initialRotations.current["Upper_Arm_Left"]) {
      const init = initialRotations.current["Upper_Arm_Left"];
      upperArmLeftRef.current.rotation.x = init.x + curArmLX.current;
      upperArmLeftRef.current.rotation.z = init.z + curArmLZ.current;
    }

    if (upperArmRightRef.current && initialRotations.current["Upper_Arm_Right"]) {
      const init = initialRotations.current["Upper_Arm_Right"];
      upperArmRightRef.current.rotation.x = init.x + curArmRX.current;
      upperArmRightRef.current.rotation.z = init.z + curArmRZ.current;
    }
  });

  return (
    <group ref={group}>
      {/* Astronaut Model positioned so Head is at y ~ +0.33 and Chest is at y ~ -0.35 */}
      <primitive object={scene} scale={2.1} position={[0, -1.72, 0]} />
    </group>
  );
}

// Preload model
useGLTF.preload("/models/astronaut.glb");

export default function Astronaut({
  modelPath = "/models/astronaut.glb",
  className = "w-full h-full",
  pose,
  targetSide = "center",
}: AstronautProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Warm yellow ambient backlight behind the astronaut that follows its target position */}
      <div
        className={`absolute top-[44%] w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full bg-[#FFD400]/16 blur-[115px] pointer-events-none transition-all duration-700 ease-out -translate-y-1/2 ${
          targetSide === "left"
            ? "left-[28%] -translate-x-1/2"
            : targetSide === "right"
            ? "left-[72%] -translate-x-1/2"
            : "left-1/2 -translate-x-1/2"
        }`}
      />

      <Canvas
        camera={{ position: [0, 0, 2.7], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10"
      >
        <ambientLight intensity={1.8} />
        {/* Front key light */}
        <directionalLight position={[2, 4, 4]} intensity={2.6} color="#ffffff" />
        {/* Golden rim and fill lights matching the reference theme */}
        <directionalLight position={[-3, 2, 2]} intensity={3.5} color="#ffd400" />
        <directionalLight position={[0, -3, 3]} intensity={2.0} color="#ffea70" />
        <directionalLight position={[0, 4, -3]} intensity={2.4} color="#ffffff" />

        <Suspense fallback={null}>
          <AstronautCenterModel modelPath={modelPath} pose={pose} />
        </Suspense>
      </Canvas>
    </div>
  );
}
