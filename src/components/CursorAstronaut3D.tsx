"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export interface CursorAstronautPose {
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
  [key: string]: unknown;
}

export interface CursorAstronautModelProps {
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
  targetSide?: "center" | "left" | "right";
  pose?: CursorAstronautPose;
}

/**
 * 3D Model Mesh with Full Real-time Cursor, Physics Tracking, Bone Kinematics & Multi-Stage Sliding
 */
export function CursorAstronautModel({
  modelPath = "/wh63ab6b.glb",
  intensity = 1,
  sensitivity = {
    rotX: 0.55, // Pitch tilt up/down
    rotY: 0.95, // Yaw turn directly facing cursor
    rotZ: 0.26, // Dynamic shoulder bank so leading hand swings into direction
    posX: 0.48, // Parallax shift towards target side
    posY: 0.28, // Parallax vertical tracking
  },
  enableFloat = true,
  scale = 1.6,
  targetSide = "center",
  pose,
}: CursorAstronautModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  // Skeletal bone refs (if available in model rig)
  const headRef = useRef<THREE.Object3D | null>(null);
  const neckRef = useRef<THREE.Object3D | null>(null);
  const upperArmLeftRef = useRef<THREE.Object3D | null>(null);
  const lowerArmLeftRef = useRef<THREE.Object3D | null>(null);
  const handLeftRef = useRef<THREE.Object3D | null>(null);
  const upperArmRightRef = useRef<THREE.Object3D | null>(null);
  const lowerArmRightRef = useRef<THREE.Object3D | null>(null);
  const handRightRef = useRef<THREE.Object3D | null>(null);
  const initialRotations = useRef<{ [key: string]: THREE.Euler }>({});

  // Dynamic bone kinematics smoothing registers
  const curHeadYaw = useRef(0);
  const curHeadPitch = useRef(0);
  const curArmRX = useRef(0);
  const curArmRY = useRef(0);
  const curArmRZ = useRef(0);
  const curLowerArmRX = useRef(0);
  const curLowerArmRZ = useRef(0);
  const curHandRY = useRef(0);
  const curArmLX = useRef(0);
  const curArmLY = useRef(0);
  const curArmLZ = useRef(0);
  const curLowerArmLX = useRef(0);
  const curLowerArmLZ = useRef(0);
  const curHandLY = useRef(0);

  // Discover rigged bones and enhance materials for glowing gold rim & deep contrast
  useEffect(() => {
    // Reset bone references
    headRef.current = null;
    neckRef.current = null;
    upperArmLeftRef.current = null;
    lowerArmLeftRef.current = null;
    handLeftRef.current = null;
    upperArmRightRef.current = null;
    lowerArmRightRef.current = null;
    handRightRef.current = null;
    initialRotations.current = {};

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

      // Check standard and mixamo bone naming conventions
      const name = child.name.toLowerCase();
      if (child.name === "Head" || (name.includes("head") && !name.includes("heand"))) {
        headRef.current = child;
      } else if (child.name === "Neck" || name.includes("neck")) {
        neckRef.current = child;
      } else if (child.name === "Upper_Arm_Left" || name.includes("leftarm") || name.includes("upper_arm_l")) {
        upperArmLeftRef.current = child;
      } else if (child.name === "Lower_Arm_Left" || name.includes("leftforearm") || name.includes("lower_arm_l")) {
        lowerArmLeftRef.current = child;
      } else if (child.name === "Heand_Left" || name.includes("lefthand") || name.includes("hand_l")) {
        handLeftRef.current = child;
      } else if (child.name === "Upper_Arm_Right" || name.includes("rightarm") || name.includes("upper_arm_r")) {
        upperArmRightRef.current = child;
      } else if (child.name === "Lower_Arm_Right" || name.includes("rightforearm") || name.includes("lower_arm_r")) {
        lowerArmRightRef.current = child;
      } else if (child.name === "Heand_Right" || name.includes("righthand") || name.includes("hand_r")) {
        handRightRef.current = child;
      }

      if (child.isObject3D && !initialRotations.current[child.name]) {
        initialRotations.current[child.name] = child.rotation.clone();
      }
    });
  }, [scene]);

  // 60/120 FPS Render Loop: Handles continuous pointer tracking, bone kinematics & damping
  useFrame((state, delta) => {
    if (!modelRef.current) return;

    const pointerX = state.pointer.x * intensity;
    const pointerY = state.pointer.y * intensity;
    const time = state.clock.getElapsedTime();

    // 1. Calculate Base Stage Position & Inward Orientation from targetSide & pose:
    let basePosX = 0;
    let baseRotY = 0;

    if (targetSide === "left") {
      basePosX = -0.78;
      baseRotY = 0.35; // Face inward towards content on right
    } else if (targetSide === "right") {
      basePosX = 0.78;
      baseRotY = -0.35; // Face inward towards content on left
    }

    if (pose?.targetX !== undefined) {
      basePosX = pose.targetX;
    }
    if (pose?.targetRotY !== undefined) {
      baseRotY = pose.targetRotY;
    }
    const basePosY = pose?.targetY ?? 0;
    const baseRotX = pose?.targetRotX ?? 0;

    // 2. Body Cursor Tracking:
    const cursorRotY = pointerX * (sensitivity.rotY ?? 0.95);
    const cursorRotX = -pointerY * (sensitivity.rotX ?? 0.55);
    // Dynamic roll banking so leading shoulder & hand swing forward into the turn:
    const cursorRotZ = -pointerX * (sensitivity.rotZ ?? 0.26);

    // 3. Parallax Drift + Zero-G Float + Directional Forward Reach:
    // When facing left/right, lean forward slightly so hands visibly reach into the target direction
    const forwardReachZ = Math.abs(pointerX) * 0.12;
    const floatY = enableFloat ? Math.sin(time * 1.5) * 0.08 : 0;
    const floatZ = (enableFloat ? Math.cos(time * 1.2) * 0.04 : 0) + forwardReachZ;
    const cursorPosX = pointerX * (sensitivity.posX ?? 0.48);
    const cursorPosY = pointerY * (sensitivity.posY ?? 0.28) + floatY;

    const targetPosX = basePosX + cursorPosX;
    const targetPosY = basePosY + cursorPosY;
    const targetPosZ = floatZ;

    const targetRotX = baseRotX + cursorRotX;
    const targetRotY = baseRotY + cursorRotY;
    const targetRotZ = cursorRotZ;

    // 4. Smooth Damping on Master Model Group:
    const dampSpeed = 5.5;
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

    modelRef.current.rotation.x = THREE.MathUtils.damp(
      modelRef.current.rotation.x,
      targetRotX,
      dampSpeed,
      delta
    );
    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      targetRotY,
      dampSpeed,
      delta
    );
    modelRef.current.rotation.z = THREE.MathUtils.damp(
      modelRef.current.rotation.z,
      targetRotZ,
      dampSpeed,
      delta
    );

    // 5. Procedural Bone Kinematics: Move hands and head in same direction as face
    const hasRiggedBones = !!(headRef.current || upperArmLeftRef.current || upperArmRightRef.current);
    if (hasRiggedBones) {
      let targetArmRX = 0;
      let targetArmRY = 0;
      let targetArmRZ = 0;
      let targetLowerArmRX = 0;
      let targetLowerArmRZ = 0;
      let targetHandRY = 0;

      let targetArmLX = 0;
      let targetArmLY = 0;
      let targetArmLZ = 0;
      let targetLowerArmLX = 0;
      let targetLowerArmLZ = 0;
      let targetHandLY = 0;

      let targetHeadYaw = pointerX * 0.55;
      let targetHeadPitch = -pointerY * 0.35;

      // When looking LEFT (pointerX < -0.05): Raise and articulate Left-side presentation arm
      if (pointerX < -0.05) {
        const weight = THREE.MathUtils.clamp((-pointerX - 0.05) / 0.55, 0, 1);
        targetArmRY = 0.85 * weight; // Elevates arm
        targetArmRZ = 0.48 * weight; // Reaches forward
        targetArmRX = 0.22 * weight - pointerY * 0.35 * weight; // Tracks cursor height
        targetLowerArmRZ = 0.65 * weight; // Unfurls elbow to point
        targetHandRY = 0.38 * weight; // Opens palm to content
        targetHeadYaw = -0.6 * weight; // Gazes directly at left content
        targetHeadPitch = -pointerY * 0.32 * weight;
      }
      // When looking RIGHT (pointerX > 0.05): Raise and articulate Right-side presentation arm
      else if (pointerX > 0.05) {
        const weight = THREE.MathUtils.clamp((pointerX - 0.05) / 0.55, 0, 1);
        targetArmLY = -0.85 * weight; // Elevates arm
        targetArmLZ = -0.48 * weight; // Reaches forward
        targetArmLX = -0.22 * weight - pointerY * 0.35 * weight; // Tracks cursor height
        targetLowerArmLZ = -0.65 * weight; // Unfurls elbow to point
        targetHandLY = -0.38 * weight; // Opens palm to content
        targetHeadYaw = 0.6 * weight; // Gazes directly at right content
        targetHeadPitch = -pointerY * 0.32 * weight;
      }

      // Smooth bone interpolation
      curHeadYaw.current = THREE.MathUtils.damp(curHeadYaw.current, targetHeadYaw, dampSpeed, delta);
      curHeadPitch.current = THREE.MathUtils.damp(curHeadPitch.current, targetHeadPitch, dampSpeed, delta);

      if (headRef.current) {
        headRef.current.rotation.y = curHeadYaw.current;
        headRef.current.rotation.x = curHeadPitch.current;
        headRef.current.rotation.z = -curHeadYaw.current * 0.12;
      }
      if (neckRef.current) {
        neckRef.current.rotation.y = curHeadYaw.current * 0.35;
        neckRef.current.rotation.x = curHeadPitch.current * 0.25;
      }

      // Left Arm articulation
      curArmLY.current = THREE.MathUtils.damp(curArmLY.current, targetArmLY, dampSpeed, delta);
      curArmLZ.current = THREE.MathUtils.damp(curArmLZ.current, targetArmLZ, dampSpeed, delta);
      curArmLX.current = THREE.MathUtils.damp(curArmLX.current, targetArmLX, dampSpeed, delta);
      curLowerArmLZ.current = THREE.MathUtils.damp(curLowerArmLZ.current, targetLowerArmLZ, dampSpeed, delta);
      curHandLY.current = THREE.MathUtils.damp(curHandLY.current, targetHandLY, dampSpeed, delta);

      if (upperArmLeftRef.current && initialRotations.current["Upper_Arm_Left"]) {
        const init = initialRotations.current["Upper_Arm_Left"];
        upperArmLeftRef.current.rotation.x = init.x + curArmLX.current;
        upperArmLeftRef.current.rotation.y = init.y + curArmLY.current;
        upperArmLeftRef.current.rotation.z = init.z + curArmLZ.current;
      }
      if (lowerArmLeftRef.current && initialRotations.current["Lower_Arm_Left"]) {
        const init = initialRotations.current["Lower_Arm_Left"];
        lowerArmLeftRef.current.rotation.z = init.z + curLowerArmLZ.current;
      }
      if (handLeftRef.current && initialRotations.current["Heand_Left"]) {
        const init = initialRotations.current["Heand_Left"];
        handLeftRef.current.rotation.y = init.y + curHandLY.current;
      }

      // Right Arm articulation
      curArmRY.current = THREE.MathUtils.damp(curArmRY.current, targetArmRY, dampSpeed, delta);
      curArmRZ.current = THREE.MathUtils.damp(curArmRZ.current, targetArmRZ, dampSpeed, delta);
      curArmRX.current = THREE.MathUtils.damp(curArmRX.current, targetArmRX, dampSpeed, delta);
      curLowerArmRZ.current = THREE.MathUtils.damp(curLowerArmRZ.current, targetLowerArmRZ, dampSpeed, delta);
      curHandRY.current = THREE.MathUtils.damp(curHandRY.current, targetHandRY, dampSpeed, delta);

      if (upperArmRightRef.current && initialRotations.current["Upper_Arm_Right"]) {
        const init = initialRotations.current["Upper_Arm_Right"];
        upperArmRightRef.current.rotation.x = init.x + curArmRX.current;
        upperArmRightRef.current.rotation.y = init.y + curArmRY.current;
        upperArmRightRef.current.rotation.z = init.z + curArmRZ.current;
      }
      if (lowerArmRightRef.current && initialRotations.current["Lower_Arm_Right"]) {
        const init = initialRotations.current["Lower_Arm_Right"];
        lowerArmRightRef.current.rotation.z = init.z + curLowerArmRZ.current;
      }
      if (handRightRef.current && initialRotations.current["Heand_Right"]) {
        const init = initialRotations.current["Heand_Right"];
        handRightRef.current.rotation.y = init.y + curHandRY.current;
      }
    }
  });

  return (
    <group ref={modelRef} scale={scale} dispose={null}>
      {/* Center the model so it rotates around its chest/heart origin */}
      <Center top={false}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Preload models for zero latency
useGLTF.preload("/wh63ab6b.glb");
useGLTF.preload("/models/astronaut.glb");
useGLTF.preload("/models/wh63ab6b.glb");

export interface CursorAstronautCanvasProps {
  modelPath?: string;
  className?: string;
  intensity?: number;
  scale?: number;
  cameraPosition?: [number, number, number];
  showShadows?: boolean;
  targetSide?: "center" | "left" | "right";
  pose?: CursorAstronautPose;
}

/**
 * Complete Canvas Wrapper with Cinematic Studio Lighting & Ambient Glow
 */
export default function CursorAstronautCanvas({
  modelPath = "/wh63ab6b.glb",
  className = "w-full h-full min-h-[450px]",
  intensity = 1,
  scale = 1.6,
  cameraPosition = [0, 0, 3.8],
  showShadows = true,
  targetSide = "center",
  pose,
}: CursorAstronautCanvasProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Warm ambient backlight that dynamically tracks the side */}
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

        {/* 3D Model with Cursor Tracking & Stage Progression */}
        <Suspense fallback={null}>
          <CursorAstronautModel
            modelPath={modelPath}
            intensity={intensity}
            scale={scale}
            targetSide={targetSide}
            pose={pose}
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
