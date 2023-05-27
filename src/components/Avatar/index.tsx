import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Text, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

export function Avatar(props: JSX.IntrinsicElements["group"]) {
  const [activeAnimation, setActiveAnimation] = useState("idle");
  const { nodes, materials } = useGLTF("/avatar.glb") as GLTFResult;
  const avatarRef = useRef<THREE.Group>(null);
  const { animations: sitting } = useFBX("/Sitting.fbx");
  sitting[0].name = "sitting";
  const { animations: jump } = useFBX("/Jump.fbx");
  jump[0].name = "jump";
  const { animations: idle } = useFBX("/Idle.fbx");
  idle[0].name = "idle";
  const { animations: running } = useFBX("/Running.fbx");
  running[0].name = "running";
  const { animations: walking } = useFBX("/Walking.fbx");
  walking[0].name = "walking";

  const { actions } = useAnimations(
    [idle[0], sitting[0], jump[0], running[0], walking[0]],
    avatarRef
  );

  useEffect(() => {
    actions["idle"]?.play();
  }, [actions]);

  const actionIdle = () => {
    if (activeAnimation === "idle") {
      actions[activeAnimation]?.reset().play();
      return;
    }
    actions[activeAnimation]?.fadeOut(0.5);
    actions["idle"]?.reset().fadeIn(0.5).play();
    setActiveAnimation("idle");
  };
  const actionSit = () => {
    if (activeAnimation === "sitting") {
      actions[activeAnimation]?.reset().play();
      return;
    }
    actions[activeAnimation]?.fadeOut(0.5);
    actions["sitting"]?.reset().fadeIn(0.5).play();
    setActiveAnimation("sitting");
  };
  const actionJump = () => {
    if (activeAnimation === "jump") {
      actions[activeAnimation]?.reset().play();
      return;
    }
    actions[activeAnimation]?.fadeOut(0.5);
    actions["jump"]?.reset().fadeIn(0.5).play();
    setActiveAnimation("jump");
  };
  const actionRun = () => {
    if (activeAnimation === "running") {
      actions[activeAnimation]?.reset().play();
      return;
    }
    actions[activeAnimation]?.fadeOut(0.5);
    actions["running"]?.reset().fadeIn(0.5).play();
    setActiveAnimation("running");
  };

  const actionWalk = () => {
    if (activeAnimation === "walking") {
      actions[activeAnimation]?.reset().play();
      return;
    }
    actions[activeAnimation]?.fadeOut(0.5);
    actions["walking"]?.reset().fadeIn(0.5).play();
    setActiveAnimation("walking");
  };
  return (
    <>
      <mesh position={[-4, 3, 0]} onClick={actionIdle}>
        <meshNormalMaterial />
        <boxGeometry args={[1.5, 0.7, 0.5]} />
        <Text
          fontSize={0.2}
          position={[0, 0, 0.3]}
          outlineColor={"#000000"}
          outlineWidth={0.02}
        >
          Ficar parado
        </Text>
      </mesh>
      <mesh position={[-2, 3, 0]} onClick={actionSit}>
        <meshNormalMaterial />
        <boxGeometry args={[1.5, 0.7, 0.5]} />
        <Text
          fontSize={0.2}
          position={[0, 0, 0.3]}
          outlineColor={"#000000"}
          outlineWidth={0.02}
        >
          Sentar
        </Text>
      </mesh>
      <mesh position={[0, 3, 0]} onClick={actionJump}>
        <meshNormalMaterial />
        <boxGeometry args={[1.5, 0.7, 0.5]} />
        <Text
          fontSize={0.2}
          position={[0, 0, 0.3]}
          outlineColor={"#000000"}
          outlineWidth={0.02}
        >
          Pular
        </Text>
      </mesh>
      <mesh position={[2, 3, 0]} onClick={actionWalk}>
        <meshNormalMaterial />
        <boxGeometry args={[1.5, 0.7, 0.5]} />
        <Text
          fontSize={0.2}
          position={[0, 0, 0.3]}
          outlineColor={"#000000"}
          outlineWidth={0.02}
        >
          Andar
        </Text>
      </mesh>
      <mesh position={[4, 3, 0]} onClick={actionRun}>
        <meshNormalMaterial />
        <boxGeometry args={[1.5, 0.7, 0.5]} />
        <Text
          fontSize={0.2}
          position={[0, 0, 0.3]}
          outlineColor={"#000000"}
          outlineWidth={0.02}
        >
          Correr
        </Text>
      </mesh>
      <group {...props} ref={avatarRef} dispose={null}>
        <group rotation-x={-Math.PI / 2}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/avatar.glb");
