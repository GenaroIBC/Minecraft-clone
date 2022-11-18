import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { FirstPointOfView } from "./components/FirstPointOfView";
import { Player } from "./components/Player";
import Cubes from "./components/Cubes";
import { useWorldReducer } from "./reducers/worldReducer/worldReducer";

export default function App() {
  const { addCube, worldState, removeCube, saveWorld } = useWorldReducer();

  return (
    <>
      <Canvas>
        <Sky sunPosition={[1, 0, 1]} />
        <ambientLight intensity={0.5} />
        <FirstPointOfView />
        <Physics>
          <Cubes removeCube={removeCube} cubes={worldState.cubes} />
          <Player />
          <Ground addCube={addCube} />
        </Physics>
      </Canvas>
      <span className="player-pointer">+</span>
      <button className="save-world-btn" onClick={saveWorld}>
        Save World
      </button>
    </>
  );
}
