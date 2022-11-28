import { Cube } from "./Cube";
import { useWorldStore } from "../hooks/useWorldStore";

export default function Cubes() {
  const { cubes } = useWorldStore();

  return (
    <>
      {cubes.map(cube => (
        <Cube key={cube.id} {...cube} />
      ))}
    </>
  );
}
