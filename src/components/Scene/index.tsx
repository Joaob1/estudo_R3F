import { OrbitControls, ScrollControls, Text } from "@react-three/drei";
import styles from "./styles.module.scss";
import { Avatar } from "../Avatar";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Avatar />
    </>
  );
}
