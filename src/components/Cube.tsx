import { useBox } from "@react-three/cannon";
import { useState } from "react";
import * as textures from "../assets/img/texture";
import { CubePosition, Texture } from "../reducers/worldReducer/types";

type CubeProps = {
  position: CubePosition;
  texture: Texture;
  id: string;
  removeCube: (id: string) => void;
};

export function Cube({ position, texture, id, removeCube }: CubeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position
  }));

  return (
    <mesh
      onPointerMove={e => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={e => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={e => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
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
