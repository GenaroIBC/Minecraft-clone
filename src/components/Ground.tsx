import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { grassTexture } from "../assets/img/texture";
import { CubePosition } from "../reducers/worldReducer/types";

grassTexture.repeat.set(10, 10);
export function Ground({ addCube }) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }));

  const handleMeshClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const position = Object.values(event.point).map(value =>
      Math.ceil(value)
    ) as CubePosition;

    addCube(position);
  };

  return (
    <mesh onClick={handleMeshClick} ref={ref}>
      <planeGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial attach="material" map={grassTexture} />
    </mesh>
  );
}
