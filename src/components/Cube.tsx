import { useBox } from "@react-three/cannon";
import { useState } from "react";
import * as textures from "../assets/img/texture";
import { CubePosition, Texture } from "../reducers/worldReducer/types";

type CubeProps = {
  position: CubePosition;
  texture: Texture;
  id: string;
  removeCube: (id: string) => void;
  addCube: (position: CubePosition) => void;
};

export function Cube({
  position,
  texture,
  id,
  removeCube,
  addCube
}: CubeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position
  }));

  return (
    <mesh
      onPointerOver={e => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={e => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={e => {
        e.stopPropagation();

        if (e.altKey || e.ctrlKey) {
          return removeCube(id);
        }

        const clickedFace = Math.floor((e.faceIndex ?? 0) / 2);
        const { x, y, z } = ref.current?.position ?? { x: 0, y: 0, z: 0 };

        switch (clickedFace) {
          case 0:
            addCube([x + 1, y, z]);
            break;
          case 1:
            addCube([x - 1, y, z]);
            break;
          case 2:
            addCube([x, y + 1, z]);
            break;
          case 3:
            addCube([x, y - 1, z]);
            break;
          case 4:
            addCube([x, y, z + 1]);
            break;
          case 5:
            addCube([x, y, z - 1]);
            break;
        }
      }}
      // @ts-ignore
      ref={ref}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={textures[`${texture}Texture`]}
        color={isHovered ? "gray" : "white"}
      />
    </mesh>
  );
}
