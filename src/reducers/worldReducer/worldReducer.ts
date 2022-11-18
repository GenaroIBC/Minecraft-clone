import { CubePosition, WorldReducerActionType, WorldState } from "./types";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";

const userLocalWorldState = JSON.parse(
  localStorage.getItem("worldState") as string
);

export const WORLD_INITIAL_STATE: WorldState = userLocalWorldState ?? {
  cubes: [],
  texture: "glass"
};

type WorldReducerAction = {
  type: WorldReducerActionType;
  payload: {
    position?: CubePosition;
    id?: string;
  };
};

type WorldReducer = (
  state: WorldState,
  action: WorldReducerAction
) => WorldState;

export const worldReducer: WorldReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CUBE":
      const { position } = action.payload;
      return {
        ...state,
        cubes: [
          ...state.cubes,
          {
            id: uuid(),
            position,
            texture: state.texture
          }
        ]
      };

    case "REMOVE_CUBE":
      const { id } = action.payload;

      return {
        ...state,
        cubes: [...state.cubes.filter(cube => cube.id !== id)]
      };
    case "RESET_WORLD":
      return state;
    case "SAVE_WORLD":
      localStorage.setItem("worldState", JSON.stringify(state));
      return state;
    case "SET_TEXTURE":
      return state;
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

  return { worldState, addCube, removeCube, saveWorld };
}
