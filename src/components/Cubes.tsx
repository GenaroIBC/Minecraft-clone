import { Cube } from "./Cube";

export default function Cubes({ cubes, removeCube }) {
  return (
    <>
      {cubes.map(cube => (
        <Cube removeCube={removeCube} key={cube.id} {...cube} />
      ))}
    </>
  );
}
