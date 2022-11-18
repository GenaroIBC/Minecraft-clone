import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import * as images from "../assets/img/images";
import { useKeyboard } from "../hooks/useKeyboard";
import { Texture } from "../reducers/worldReducer/types";

export function TextureSelector({ setTexture, texture }) {
  const { dirt, grass, glass, log, wood } = useKeyboard();

  const textureOptions = { dirt, grass, glass, log, wood };

  useEffect(() => {
    const selectedTexture = Object.entries(textureOptions).find(
      ([texture, isSelected]) => isSelected
    );

    if (selectedTexture) {
      setTexture(selectedTexture[0] as Texture);
    }
  }, [textureOptions]);

  return (
    <nav className="select-texture-bar">
      {Object.entries(images).map(([textureName, textureUrl]) => (
        <img
          className={
            texture === textureName.replace("Img", "") ? "selected" : ""
          }
          key={uuid()}
          src={textureUrl}
        />
      ))}
    </nav>
  );
}
