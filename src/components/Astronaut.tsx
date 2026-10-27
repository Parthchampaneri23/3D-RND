"use client";

import React, { Suspense, useEffect, useRef, useMemo } from "react";
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
  lowerArmLeftRotX?: number;
  lowerArmLeftRotZ?: number;
  handLeftRotY?: number;
  handLeftRotZ?: number;
  armRightRotX?: number;
  armRightRotZ?: number;
  lowerArmRightRotX?: number;
  lowerArmRightRotZ?: number;
  handRightRotY?: number;
  handRightRotZ?: number;
  gestureSide?: "left" | "right" | "both" | "auto" | "none";
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
  targetSide = "center",
}: {
  modelPath?: string;
  pose?: AstronautActionPose;
  targetSide?: "center" | "left" | "right";
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);

  // Filter animations so Blink2 only animates eye/mouth blinking,
  // leaving arms, hands, head, neck, and body 100% under procedural kinematic control!
  const eyeAnimations = useMemo(() => {
    return (animations || []).map((clip: THREE.AnimationClip) => {
      const cloned = clip.clone();
      cloned.tracks = cloned.tracks.filter(
        (track: THREE.KeyframeTrack) =>
          !track.name.includes("Arm") &&
          !track.name.includes("Heand") &&
          !track.name.includes("Head") &&
          !track.name.includes("Neck") &&
          !track.name.includes("Body")
      );
      return cloned;
    });
  }, [animations]);

  const { actions, names } = useAnimations(eyeAnimations, group);

  // References for all expressive skeletal bones
  const headRef = useRef<THREE.Object3D | null>(null);
  const neckRef = useRef<THREE.Object3D | null>(null);
  const bodyRef = useRef<THREE.Object3D | null>(null);
  const upperArmLeftRef = useRef<THREE.Object3D | null>(null);
  const lowerArmLeftRef = useRef<THREE.Object3D | null>(null);
  const handLeftRef = useRef<THREE.Object3D | null>(null);
  const upperArmRightRef = useRef<THREE.Object3D | null>(null);
  const lowerArmRightRef = useRef<THREE.Object3D | null>(null);
  const handRightRef = useRef<THREE.Object3D | null>(null);
  const initialRotations = useRef<{ [key: string]: THREE.Euler }>({});

  // Current interpolated values for 60/120 FPS buttery smooth transitions
  const curX = useRef(0);
  const curY = useRef(0);
  const curRotY = useRef(0);
  const curRotX = useRef(0);
  const curHeadYaw = useRef(0);
  const curHeadPitch = useRef(0);
  const curArmLX = useRef(0);
  const curArmLY = useRef(0);
  const curArmLZ = useRef(0);
  const curLowerArmLX = useRef(0);
  const curLowerArmLZ = useRef(0);
  const curHandLY = useRef(0);
  const curArmRX = useRef(0);
  const curArmRY = useRef(0);
  const curArmRZ = useRef(0);
  const curLowerArmRX = useRef(0);
  const curLowerArmRZ = useRef(0);
  const curHandRY = useRef(0);

  // 1. Play base facial blink animation
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

  // 2. Discover bones and attach glowing neon visor halo
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness ?? 0.45, 0.32);
          mat.metalness = Math.max(mat.metalness ?? 0.3, 0.55);
        }
      }

      // Track bones by their exact rigged names in astronaut.glb
      if (child.name === "Head") headRef.current = child;
      else if (child.name === "Neck") neckRef.current = child;
      else if (child.name === "Body") bodyRef.current = child;
      else if (child.name === "Upper_Arm_Left") upperArmLeftRef.current = child;
      else if (child.name === "Lower_Arm_Left") lowerArmLeftRef.current = child;
      else if (child.name === "Heand_Left") handLeftRef.current = child;
      else if (child.name === "Upper_Arm_Right") upperArmRightRef.current = child;
      else if (child.name === "Lower_Arm_Right") lowerArmRightRef.current = child;
      else if (child.name === "Heand_Right") handRightRef.current = child;

      if (child.isObject3D && !initialRotations.current[child.name]) {
        initialRotations.current[child.name] = child.rotation.clone();
      }
    });
  }, [scene]);

  // 3. Render Loop: Continuous Cursor Gestures & Scroll Position Lerping
  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;

    // Subtle zero-gravity float
    const floatY = Math.sin(time * 1.5) * 0.035;

    // Target positions from pose
    const tX = pose?.targetX ?? 0;
    const tY = (pose?.targetY ?? 0) + floatY;
    const tRotY = pose?.targetRotY ?? 0;
    const tRotX = pose?.targetRotX ?? 0;

    // Normalized pointer coordinates: [-1 to +1]
    const pX = state.pointer.x;
    const pY = state.pointer.y;

    // Cursor influence calculation:
    // When targetSide is "center" (Stand up fixed in center):
    // - Cursor moves left (pX < -0.05) -> Viewer's left arm (Upper_Arm_Right) lifts and points to left content!
    // - Cursor moves right (pX > 0.05) -> Viewer's right arm (Upper_Arm_Left) lifts and points to right content!
    // - Vertical cursor (pY) modulates arm reach height and gaze pitch!
    let cursorArmRX = 0;
    let cursorArmRY = 0;
    let cursorArmRZ = 0;
    let cursorLowerArmRX = 0;
    let cursorLowerArmRZ = 0;
    let cursorHandRY = 0;
    let cursorHandRZ = 0;

    let cursorArmLX = 0;
    let cursorArmLY = 0;
    let cursorArmLZ = 0;
    let cursorLowerArmLX = 0;
    let cursorLowerArmLZ = 0;
    let cursorHandLY = 0;
    let cursorHandLZ = 0;

    let cursorHeadYaw = pX * 0.45;
    let cursorHeadPitch = -pY * 0.35;

    if (targetSide === "center") {
      // Stand-up fix: Left / Right presentation mode
      if (pX < -0.05) {
        // Pointing Left (Viewer's Left -> Astronaut's Right Arm)
        const weight = THREE.MathUtils.clamp((-pX - 0.05) / 0.55, 0, 1);
        cursorArmRY = 0.85 * weight;                         // Elevates arm up
        cursorArmRZ = 0.48 * weight;                         // Reaches forward
        cursorArmRX = 0.22 * weight - pY * 0.35 * weight;    // Tracks cursor height
        cursorLowerArmRZ = 0.65 * weight;                    // Unfurls elbow to point
        cursorHandRY = 0.38 * weight;                        // Opens palm to content
        cursorHeadYaw = -0.6 * weight;                       // Gazes directly at left content
        cursorHeadPitch = -pY * 0.32 * weight;
      } else if (pX > 0.05) {
        // Pointing Right (Viewer's Right -> Astronaut's Left Arm)
        const weight = THREE.MathUtils.clamp((pX - 0.05) / 0.55, 0, 1);
        cursorArmLY = -0.85 * weight;                        // Elevates arm up
        cursorArmLZ = -0.48 * weight;                        // Reaches forward
        cursorArmLX = -0.22 * weight - pY * 0.35 * weight;   // Tracks cursor height
        cursorLowerArmLZ = -0.65 * weight;                   // Unfurls elbow to point
        cursorHandLY = -0.38 * weight;                       // Opens palm to content
        cursorHeadYaw = 0.6 * weight;                        // Gazes directly at right content
        cursorHeadPitch = -pY * 0.32 * weight;
      }
    } else if (targetSide === "left") {
      // Astronaut is on LEFT side of screen -> Show content on the RIGHT with Inner Arm (Viewer's Right Arm / Upper_Arm_Left)
      cursorArmLY = -0.88;
      cursorArmLZ = -0.52;
      cursorArmLX = -0.2 - pY * 0.32;
      cursorLowerArmLZ = -0.72;
      cursorHandLY = -0.42;
      cursorHeadYaw = 0.55 + pX * 0.15; // Gazes across at right content
      cursorHeadPitch = -pY * 0.25;
    } else if (targetSide === "right") {
      // Astronaut is on RIGHT side of screen -> Show content on the LEFT with Inner Arm (Viewer's Left Arm / Upper_Arm_Right)
      cursorArmRY = 0.88;
      cursorArmRZ = 0.52;
      cursorArmRX = 0.2 - pY * 0.32;
      cursorLowerArmRZ = 0.72;
      cursorHandRY = 0.42;
      cursorHeadYaw = -0.55 + pX * 0.15; // Gazes across at left content
      cursorHeadPitch = -pY * 0.25;
    }

    // Blend explicit pose props with cursor kinematics
    const finalArmRX = (pose?.armRightRotX ?? 0) + cursorArmRX;
    const finalArmRY = cursorArmRY;
    const finalArmRZ = (pose?.armRightRotZ ?? 0) + cursorArmRZ;
    const finalLowerArmRX = (pose?.lowerArmRightRotX ?? 0) + cursorLowerArmRX;
    const finalLowerArmRZ = cursorLowerArmRZ;
    const finalHandRY = (pose?.handRightRotY ?? 0) + cursorHandRY;
    const finalHandRZ = cursorHandRZ;

    const finalArmLX = (pose?.armLeftRotX ?? 0) + cursorArmLX;
    const finalArmLY = cursorArmLY;
    const finalArmLZ = (pose?.armLeftRotZ ?? 0) + cursorArmLZ;
    const finalLowerArmLX = (pose?.lowerArmLeftRotX ?? 0) + cursorLowerArmLX;
    const finalLowerArmLZ = cursorLowerArmLZ;
    const finalHandLY = (pose?.handLeftRotY ?? 0) + cursorHandLY;
    const finalHandLZ = cursorHandLZ;

    const finalHeadYaw = (pose?.headYawOffset ?? 0) + cursorHeadYaw;
    const finalHeadPitch = (pose?.headPitchOffset ?? 0) + cursorHeadPitch;

    // 1. Position lerping across screen
    curX.current = THREE.MathUtils.lerp(curX.current, tX, 0.08);
    curY.current = THREE.MathUtils.lerp(curY.current, tY, 0.08);
    group.current.position.x = curX.current;
    group.current.position.y = curY.current;

    // 2. Body rotation lerping
    const pointerBodyYaw = pX * 0.08;
    curRotY.current = THREE.MathUtils.lerp(curRotY.current, tRotY + pointerBodyYaw, 0.07);
    curRotX.current = THREE.MathUtils.lerp(curRotX.current, tRotX, 0.07);
    group.current.rotation.y = curRotY.current;
    group.current.rotation.x = curRotX.current;

    // 3. Head & Neck tracking
    curHeadYaw.current = THREE.MathUtils.lerp(curHeadYaw.current, finalHeadYaw, 0.09);
    curHeadPitch.current = THREE.MathUtils.lerp(curHeadPitch.current, finalHeadPitch, 0.09);

    if (headRef.current) {
      headRef.current.rotation.y = curHeadYaw.current;
      headRef.current.rotation.x = curHeadPitch.current;
      headRef.current.rotation.z = -curHeadYaw.current * 0.12;
    }

    if (neckRef.current) {
      neckRef.current.rotation.y = curHeadYaw.current * 0.35;
      neckRef.current.rotation.x = curHeadPitch.current * 0.25;
    }

    // 4. Chest/Body subtle breathing oscillation
    if (bodyRef.current) {
      bodyRef.current.rotation.x = Math.sin(time * 2.0) * 0.02;
    }

    // 5. Viewer's Left Arm (Upper_Arm_Right in GLTF)
    curArmRX.current = THREE.MathUtils.lerp(curArmRX.current, finalArmRX, 0.08);
    curArmRY.current = THREE.MathUtils.lerp(curArmRY.current, finalArmRY, 0.08);
    curArmRZ.current = THREE.MathUtils.lerp(curArmRZ.current, finalArmRZ, 0.08);
    curLowerArmRX.current = THREE.MathUtils.lerp(curLowerArmRX.current, finalLowerArmRX, 0.08);
    curLowerArmRZ.current = THREE.MathUtils.lerp(curLowerArmRZ.current, finalLowerArmRZ, 0.08);
    curHandRY.current = THREE.MathUtils.lerp(curHandRY.current, finalHandRY, 0.08);

    if (upperArmRightRef.current && initialRotations.current["Upper_Arm_Right"]) {
      const init = initialRotations.current["Upper_Arm_Right"];
      upperArmRightRef.current.rotation.x = init.x + curArmRX.current;
      upperArmRightRef.current.rotation.y = init.y + curArmRY.current;
      upperArmRightRef.current.rotation.z = init.z + curArmRZ.current;
    }
    if (lowerArmRightRef.current && initialRotations.current["Lower_Arm_Right"]) {
      const init = initialRotations.current["Lower_Arm_Right"];
      lowerArmRightRef.current.rotation.x = init.x + curLowerArmRX.current;
      lowerArmRightRef.current.rotation.z = init.z + curLowerArmRZ.current;
    }
    if (handRightRef.current && initialRotations.current["Heand_Right"]) {
      const init = initialRotations.current["Heand_Right"];
      handRightRef.current.rotation.y = init.y + curHandRY.current;
    }

    // 6. Viewer's Right Arm (Upper_Arm_Left in GLTF)
    curArmLX.current = THREE.MathUtils.lerp(curArmLX.current, finalArmLX, 0.08);
    curArmLY.current = THREE.MathUtils.lerp(curArmLY.current, finalArmLY, 0.08);
    curArmLZ.current = THREE.MathUtils.lerp(curArmLZ.current, finalArmLZ, 0.08);
    curLowerArmLX.current = THREE.MathUtils.lerp(curLowerArmLX.current, finalLowerArmLX, 0.08);
    curLowerArmLZ.current = THREE.MathUtils.lerp(curLowerArmLZ.current, finalLowerArmLZ, 0.08);
    curHandLY.current = THREE.MathUtils.lerp(curHandLY.current, finalHandLY, 0.08);

    if (upperArmLeftRef.current && initialRotations.current["Upper_Arm_Left"]) {
      const init = initialRotations.current["Upper_Arm_Left"];
      upperArmLeftRef.current.rotation.x = init.x + curArmLX.current;
      upperArmLeftRef.current.rotation.y = init.y + curArmLY.current;
      upperArmLeftRef.current.rotation.z = init.z + curArmLZ.current;
    }
    if (lowerArmLeftRef.current && initialRotations.current["Lower_Arm_Left"]) {
      const init = initialRotations.current["Lower_Arm_Left"];
      lowerArmLeftRef.current.rotation.x = init.x + curLowerArmLX.current;
      lowerArmLeftRef.current.rotation.z = init.z + curLowerArmLZ.current;
    }
    if (handLeftRef.current && initialRotations.current["Heand_Left"]) {
      const init = initialRotations.current["Heand_Left"];
      handLeftRef.current.rotation.y = init.y + curHandLY.current;
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
          <AstronautCenterModel
            modelPath={modelPath}
            pose={pose}
            targetSide={targetSide}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
