"use client";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.scss";
import Scene from "@/components/Scene";
export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <gridHelper />
        <Scene />
      </Canvas>
    </div>
  );
}
