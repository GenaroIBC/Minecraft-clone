import {
  CubePosition,
  WorldReducerActionType,
  WorldState,
  Texture
} from "./types";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";

const userLocalWorldState = JSON.parse(
  localStorage.getItem("worldState") as string
);

export const WORLD_INITIAL_STATE: WorldState = userLocalWorldState ?? {
  cubes: [],
  texture: "dirt"
};

type WorldReducerAction = {
  type: WorldReducerActionType;
  payload: {
    position?: CubePosition;
    id?: string;
    texture?: Texture;
  } | null;
};

type WorldReducer = (
  state: WorldState,
  action: WorldReducerAction
) => WorldState;

export const worldReducer: WorldReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CUBE":
      return {
        ...state,
        cubes: [
          ...state.cubes,
          {
            id: uuid(),
            position: action.payload!.position!,
            texture: state.texture
          }
        ]
      };

    case "REMOVE_CUBE":
      return {
        ...state,
        cubes: [...state.cubes.filter(cube => cube.id !== action.payload!.id)]
      };
    case "RESET_WORLD":
      return state;
    case "SAVE_WORLD":
      localStorage.setItem("worldState", JSON.stringify(state));
      return state;
    case "SET_TEXTURE":
      return { ...state, texture: action.payload!.texture! };
    default:
      return state;
  }
};

export function useWorldReducer() {
  const [worldState, worldDispatcher] = useReducer(
    worldReducer,
    WORLD_INITIAL_STATE
  );

  const addCube = (position: CubePosition) => {
    worldDispatcher({ type: "ADD_CUBE", payload: { position } });
  };

  const removeCube = (id: string) => {
    worldDispatcher({ type: "REMOVE_CUBE", payload: { id } });
  };

  const saveWorld = () => {
    worldDispatcher({ type: "SAVE_WORLD", payload: null });
  };

  const setTexture = (texture: Texture) => {
    worldDispatcher({ type: "SET_TEXTURE", payload: { texture } });
  };

  return { worldState, addCube, removeCube, saveWorld, setTexture };
}
