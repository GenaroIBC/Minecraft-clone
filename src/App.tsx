import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { FirstPersonView } from "./components/FirstPersonView";
import { Player } from "./components/Player";
import Cubes from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[1, 0, 1]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <span className="player-pointer">+</span>
      <TextureSelector />
      <NavBar />
    </>
  );
}
