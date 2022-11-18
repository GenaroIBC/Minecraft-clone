import { Cube } from "./Cube";

export default function Cubes({ cubes, removeCube, addCube }) {
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
