"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export interface CursorAstronautProps {
  modelPath?: string;
  isExplainingLeft?: boolean;
  activeTopicIndex?: number;
  scale?: number;
}

export default function CursorAstronaut({
  modelPath = "/wh63ab6b.glb",
  isExplainingLeft = true,
  activeTopicIndex = 0,
  scale = 1.6,
}: CursorAstronautProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  // 1. Discover bones inside the GLB skeleton (supporting standard, mixamo, and custom rigs)
  const bones = useMemo(() => {
    const found: Record<string, THREE.Object3D> = {};

    scene.traverse((object) => {
      // Look for bones or rigged joints
      const isBone = (object as THREE.Bone).isBone || object.type === "Bone";
      const name = object.name.toLowerCase().replace(/[^a-z0-9]/g, "");

      // Enhance material appearance
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }

      if (name.includes("head") && !name.includes("top")) {
        found.head = object;
      } else if (name.includes("neck")) {
        found.neck = object;
      } else if (
        name.includes("leftarm") ||
        name.includes("upperarmleft") ||
        name.includes("upperarml") ||
        name === "armleft" ||
        /^(left|l)(upperarm|arm)$/.test(name)
      ) {
        found.leftArm = object;
      } else if (
        name.includes("rightarm") ||
        name.includes("upperarmright") ||
        name.includes("upperarmr") ||
        name === "armright" ||
        /^(right|r)(upperarm|arm)$/.test(name)
      ) {
        found.rightArm = object;
      } else if (
        name.includes("leftforearm") ||
        name.includes("lowerarmleft") ||
        name.includes("lowerarml") ||
        name === "forearmleft" ||
        /^(left|l)(forearm|lowerarm)$/.test(name)
      ) {
        found.leftForearm = object;
      } else if (
        name.includes("rightforearm") ||
        name.includes("lowerarmright") ||
        name.includes("lowerarmr") ||
        name === "forearmright" ||
        /^(right|r)(forearm|lowerarm)$/.test(name)
      ) {
        found.rightForearm = object;
      } else if (
        name.includes("lefthand") ||
        name.includes("heandleft") ||
        name.includes("handleft") ||
        name.includes("handl") ||
        /^(lefthand|handl)$/.test(name)
      ) {
        found.leftHand = object;
      } else if (
        name.includes("righthand") ||
        name.includes("heandright") ||
        name.includes("handright") ||
        name.includes("handr") ||
        /^(righthand|handr)$/.test(name)
      ) {
        found.rightHand = object;
      } else if (name.includes("spine2") || name.includes("spine1") || name.includes("chest")) {
        found.chest = object;
      }
    });

    return found;
  }, [scene]);

  // 2. Save original rotations so all motion is relative to the model's base pose
  const baseRotations = useMemo(() => {
    const result: Record<string, THREE.Euler> = {};
    Object.entries(bones).forEach(([key, bone]) => {
      if (bone) {
        result[key] = bone.rotation.clone();
      }
    });
    return result;
  }, [bones]);

  // 3. 60/120 FPS Physics & Kinematics Loop
  useFrame((state, delta) => {
    const pointerX = state.pointer.x; // -1 (left) to +1 (right)
    const pointerY = state.pointer.y; // -1 (down) to +1 (up)
    const time = state.clock.getElapsedTime();

    // Smooth exponential decay follow
    const smoothness = 1 - Math.exp(-5 * delta);

    // Bone rotation helper
    const moveBone = (
      key: string,
      targetX: number,
      targetY: number,
      targetZ: number
    ) => {
      const bone = bones[key];
      const base = baseRotations[key];
      if (!bone || !base) return;

      bone.rotation.x = THREE.MathUtils.lerp(
        bone.rotation.x,
        base.x + targetX,
        smoothness
      );
      bone.rotation.y = THREE.MathUtils.lerp(
        bone.rotation.y,
        base.y + targetY,
        smoothness
      );
      bone.rotation.z = THREE.MathUtils.lerp(
        bone.rotation.z,
        base.z + targetZ,
        smoothness
      );
    };

    // -------------------------------------------------------------
    // EXPLAINING LEFT TEXT BIAS & CURSOR GESTURES
    // When pointer is on left side or isExplainingLeft is active,
    // the astronaut directs its head, neck, and right arm to point & explain
    // -------------------------------------------------------------
    const leftBias = isExplainingLeft ? 0.35 : 0;
    // Topic vertical targeting: card 0 (top), card 1 (mid), card 2 (lower)
    const topicPitchTarget = (1 - activeTopicIndex) * 0.12;

    // Head & Neck look toward the pointer (with strong left focus when explaining)
    const headYaw = pointerX * 0.38 - leftBias * 0.45;
    const headPitch = -pointerY * 0.22 + topicPitchTarget;
    const headRoll = -pointerX * 0.08;

    moveBone("neck", headPitch * 0.45, headYaw * 0.55, headRoll * 0.4);
    moveBone("head", headPitch * 0.65, headYaw * 0.85, headRoll * 0.7);

    // Gentle chest breathing
    const breath = Math.sin(time * 2.2) * 0.02;
    moveBone("chest", breath, 0, -pointerX * 0.04);

    // RIGHT ARM (Points across body towards left side info text when explaining)
    // Elevation, reach across, and wrist articulation
    const isPointingLeft = pointerX < 0.15 || isExplainingLeft;
    const rightArmReachX = isPointingLeft ? -0.45 - pointerY * 0.2 : pointerY * 0.12;
    const rightArmReachY = isPointingLeft ? 0.55 - pointerX * 0.25 : -pointerX * 0.08;
    const rightArmReachZ = isPointingLeft ? -0.42 - pointerY * 0.15 : -pointerX * 0.12;

    moveBone("rightArm", rightArmReachX, rightArmReachY, rightArmReachZ);
    moveBone(
      "rightForearm",
      isPointingLeft ? -0.35 - pointerY * 0.15 : -pointerY * 0.1,
      isPointingLeft ? 0.2 : 0,
      isPointingLeft ? -0.35 - pointerX * 0.1 : -pointerX * 0.08
    );
    moveBone(
      "rightHand",
      isPointingLeft ? -0.25 - pointerY * 0.1 : -pointerY * 0.08,
      isPointingLeft ? 0.35 : 0,
      isPointingLeft ? -0.2 : -pointerX * 0.06
    );

    // LEFT ARM (Organic secondary movement and open gesture)
    const leftArmX = pointerY * 0.14 + (isPointingLeft ? 0.1 : 0);
    const leftArmY = -pointerX * 0.1 - (isPointingLeft ? 0.2 : 0);
    const leftArmZ = -pointerX * 0.12 + (isPointingLeft ? 0.15 : 0);

    moveBone("leftArm", leftArmX, leftArmY, leftArmZ);
    moveBone("leftForearm", -pointerY * 0.1, 0, -pointerX * 0.08);
    moveBone("leftHand", -pointerY * 0.08, 0, -pointerX * 0.06);

    // -------------------------------------------------------------
    // ROOT GROUP MOTION: Parallax tilt & float
    // Ensures models without bones (like wh63ab6b.glb) also track gracefully!
    // -------------------------------------------------------------
    if (groupRef.current) {
      const floatY = Math.sin(time * 1.6) * 0.04;
      const targetBodyRotY = -0.32 + pointerX * 0.25; // Base angle facing slightly inward towards left text
      const targetBodyRotX = -pointerY * 0.12;
      const targetBodyRotZ = -pointerX * 0.08;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetBodyRotY,
        smoothness
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetBodyRotX,
        smoothness
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetBodyRotZ,
        smoothness
      );

      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        floatY - 0.1,
        smoothness
      );
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        0.35 + pointerX * 0.15, // Anchored on center-right side
        smoothness
      );
    }
  });

  return (
    <group ref={groupRef} scale={scale} dispose={null}>
      <Center top position={[0, -0.6, 0]}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Preload models for instant response
useGLTF.preload("/models/astronaut.glb");
useGLTF.preload("/wh63ab6b.glb");
