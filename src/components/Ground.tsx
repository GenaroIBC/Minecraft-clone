import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { groundTexture } from "../assets/img/texture";
import { useWorldStore } from "../hooks/useWorldStore";
import { CubePosition } from "../reducers/worldReducer/types";

groundTexture.repeat.set(50, 100);

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.5, 0]
  }));

  const { addCube } = useWorldStore();

  const handleMeshClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const position = Object.values(event.point).map(value =>
      Math.ceil(value)
    ) as CubePosition;

    addCube(position);
  };

  return (
    // @ts-ignore
    <mesh onClick={handleMeshClick} ref={ref}>
      <planeGeometry attach="geometry" args={[50, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
