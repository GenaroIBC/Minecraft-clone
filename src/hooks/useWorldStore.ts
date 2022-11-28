import { v4 as uuid } from "uuid";
import create from "zustand";
import { CubePosition, WorldState } from "../reducers/worldReducer/types";
import { Texture } from "../reducers/worldReducer/types";
import { getLocalInitialWorld } from "../utils/getLocalInitialWorld";

type WorldStore = WorldState & {
  addCube: (position: CubePosition) => void;
  removeCube: (id: string) => void;
  setTexture: (texture: Texture) => void;
  saveWorld: () => void;
  resetWorld: () => void;
};

const { cubes, texture } = getLocalInitialWorld();

export const useWorldStore = create<WorldStore>((set, get) => ({
  cubes,
  texture,
  addCube: position => {
    set(state => ({
      ...state,
      cubes: [
        ...state.cubes,
        {
          id: uuid(),
          position: position,
          texture: state.texture
        }
      ]
    }));
  },
  setTexture: (texture: Texture) => {
    set(() => ({ texture }));
  },
  removeCube: (id: string) => {
    set(state => ({
      cubes: [...state.cubes.filter(cube => cube.id !== id)]
    }));
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
      texture: "wood"
    }));
  },
  saveWorld: () => {
    const stringifiedWorld = JSON.stringify({
      cubes: get().cubes,
      texture: get().texture
    });

    localStorage.setItem("worldState", stringifiedWorld);
  }
}));
