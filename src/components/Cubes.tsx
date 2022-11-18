import { Cube } from "./Cube";
import { Cube as CubeT, CubePosition } from "../reducers/worldReducer/types";

type Props = {
  cubes: Array<CubeT>;
  removeCube: (id: string) => void;
  addCube: (position: CubePosition) => void;
};

export default function Cubes({ cubes, removeCube, addCube }: Props) {
  return (
    <>
      {cubes.map(cube => (
        <Cube
          removeCube={removeCube}
          addCube={addCube}
          key={cube.id}
          {...cube}
        />
      ))}
    </>
  );
}
