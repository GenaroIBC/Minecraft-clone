import { grassImg, dirtImg, glassImg, logImg, woodImg } from "./images";

import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const dirtTexture = new TextureLoader().load(dirtImg);

grassTexture.wrapS = RepeatWrapping;
grassTexture.wrapT = RepeatWrapping;

grassTexture.magFilter = NearestFilter;
export { grassTexture, logTexture, glassTexture, woodTexture, dirtTexture };
