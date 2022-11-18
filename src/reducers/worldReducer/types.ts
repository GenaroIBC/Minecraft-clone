export type WorldReducerActionType =
  | "ADD_CUBE"
  | "REMOVE_CUBE"
  | "SAVE_WORLD"
  | "RESET_WORLD"
  | "SET_TEXTURE";

export type Texture = "grass" | "log" | "glass" | "dirt" | "wood";

export type CubePosition = [number, number, number];

export type Cube = {
  id: string;
  position: CubePosition;
  texture: Texture;
};

export type WorldState = {
  cubes: Array<Cube>;
  texture: Texture;
};
