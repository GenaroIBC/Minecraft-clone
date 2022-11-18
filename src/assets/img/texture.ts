import { grassImg, dirtImg, glassImg, logImg, woodImg } from "./images";

import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

const images = [grassImg, logImg, dirtImg, woodImg, glassImg];

const textures = images.map(img => new TextureLoader().load(img));

textures.forEach(texture => {
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
});

const grassTexture = textures[0];
const logTexture = textures[1];
const dirtTexture = textures[2];
const woodTexture = textures[3];
const glassTexture = textures[4];

export { grassTexture, logTexture, dirtTexture, woodTexture, glassTexture };
