import {
  CubePosition,
  WorldReducerActionType,
  WorldState,
  Texture
} from "./types";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";

const userLocalWorldState = localStorage.getItem("worldState");

export const WORLD_INITIAL_STATE: WorldState = JSON.parse(
  userLocalWorldState ??
    `{"cubes":[{"id":"71998f0b-1e01-47c0-b866-b089432e79b4","position":[-9,4,-15],"texture":"glass"},{"id":"708888cd-7f19-46d1-8ba1-553e762a4e3f","position":[-8,4,-15],"texture":"glass"},{"id":"a537a5fd-f90f-4d1a-902d-ccf0c544a899","position":[-7,4,-15],"texture":"glass"},{"id":"eeadbd32-9af7-4c74-b57e-c6395554c5ad","position":[-6,2,-15],"texture":"glass"},{"id":"529e406f-0624-4dc2-8a4d-0b568618b25c","position":[-6,3,-15],"texture":"glass"},{"id":"704455dc-e80b-490c-8e5f-7f75da350529","position":[-6,4,-15],"texture":"glass"},{"id":"07ad93f8-d1f5-4f9a-9949-a79cd5cb3bdd","position":[-6,5,-15],"texture":"glass"},{"id":"63cc8cf1-b100-481d-8a0c-d19f81703166","position":[-6,6,-15],"texture":"glass"},{"id":"0968d34e-4add-477b-bc82-9ec3c23275c1","position":[-3,2,-15],"texture":"glass"},{"id":"15b33c1a-bab1-4126-9288-281266cf1829","position":[-3,3,-15],"texture":"glass"},{"id":"b4526a1b-8bfc-4bd7-afaf-09ad888ca3cc","position":[-3,4,-15],"texture":"glass"},{"id":"0c4b2533-1d04-4100-8d71-2ea61c1e66e5","position":[-3,5,-15],"texture":"glass"},{"id":"6754b8de-5a86-4e79-9a1b-8d6076129514","position":[-3,6,-15],"texture":"glass"},{"id":"126c8359-edbd-4dce-8c81-2e662f6f6359","position":[-2,2,-15],"texture":"glass"},{"id":"4cf965c7-ca07-4031-a9dc-3e8203a71c8d","position":[-1,2,-15],"texture":"glass"},{"id":"57259f18-e374-4837-a96b-affb07163d3e","position":[0,2,-15],"texture":"glass"},{"id":"6a5c952e-a7f4-4a4c-8688-94762048e571","position":[-2,4,-15],"texture":"glass"},{"id":"7e893383-c895-4316-86c1-bbdd79f248a0","position":[-1,4,-15],"texture":"glass"},{"id":"30b36a26-9a6e-4630-8cb9-b08ff169644c","position":[0,4,-15],"texture":"glass"},{"id":"4931cc5a-ffae-4d1b-a7f4-ae4db3a4f4ba","position":[-2,6,-15],"texture":"glass"},{"id":"07e83fa2-324c-4b36-bb16-bcd655bc2f58","position":[-1,6,-15],"texture":"glass"},{"id":"2fbb2e79-eb0d-4ace-aeb2-ddae2713b3da","position":[0,6,-15],"texture":"glass"},{"id":"7205aa57-ddc3-40eb-a8aa-ca0b19cf6818","position":[-9,3,-15],"texture":"glass"},{"id":"0a80177a-f233-425f-8c19-531ba76ce15a","position":[-9,2,-15],"texture":"glass"},{"id":"9340f82e-bf48-4acb-8171-91d75ef3dd04","position":[-9,5,-15],"texture":"glass"},{"id":"100dcf44-7af5-477e-9d26-f44b47d3b553","position":[-9,6,-15],"texture":"glass"},{"id":"04bc0f1e-d780-46ee-b50e-eaa1118f5f94","position":[3,2,-15],"texture":"glass"},{"id":"4a944c1b-0172-4025-99c5-c90bcde9f5b3","position":[9,2,-15],"texture":"glass"},{"id":"2c10bb94-2355-4f99-acbd-1549cea47b32","position":[9,3,-15],"texture":"glass"},{"id":"f8823ea4-41d2-4c91-98e4-211ec40c755a","position":[9,4,-15],"texture":"glass"},{"id":"43fa87ff-d52f-4d78-b8b3-3755a78c6f88","position":[9,5,-15],"texture":"glass"},{"id":"14598fdd-e4f7-4d6c-8607-5a759569eec1","position":[9,6,-15],"texture":"glass"},{"id":"939b646b-f1b3-4e7b-9723-1f17991b255c","position":[10,6,-15],"texture":"glass"},{"id":"0d28e5b0-fe17-45eb-a063-7d7e7a166295","position":[11,6,-15],"texture":"glass"},{"id":"47f58b59-07b4-4abc-9393-7af98c0f10dc","position":[12,6,-15],"texture":"glass"},{"id":"e2156f18-dd13-42ad-8351-cb0f9916b55d","position":[12,5,-15],"texture":"glass"},{"id":"5a6a0772-1302-450d-b50c-aeed4fb79c97","position":[12,4,-15],"texture":"glass"},{"id":"fa94b558-3159-40b9-a395-4a2569de3a62","position":[12,3,-15],"texture":"glass"},{"id":"d3c7ce70-0311-4910-bd77-a0de299e5951","position":[12,2,-15],"texture":"glass"},{"id":"e55065ef-8835-47bf-9349-bee7003cf755","position":[2,2,-15],"texture":"glass"},{"id":"6b900ae9-9177-451e-a5dc-e80a30a35f62","position":[2,3,-15],"texture":"glass"},{"id":"374dafa9-a049-43cf-9538-af1a567267f7","position":[2,4,-15],"texture":"glass"},{"id":"e77a98b8-c35d-4f38-9ea4-af42dcaf64cb","position":[2,5,-15],"texture":"glass"},{"id":"cf4ec5e5-d46f-4bda-87ff-cdc6f5cef575","position":[2,6,-15],"texture":"glass"},{"id":"0e29af4e-2357-478b-af83-d9e757db2929","position":[5,2,-15],"texture":"glass"},{"id":"b2b898fa-7f28-4b06-9407-7871d93f2f3c","position":[5,3,-15],"texture":"glass"},{"id":"a7fb87f0-19b5-4f35-a9d0-79be2baf616f","position":[5,4,-15],"texture":"glass"},{"id":"5ab4eb7d-c287-4660-933d-3719381cac62","position":[5,5,-15],"texture":"glass"},{"id":"08cdf2e1-eb00-4df6-bc9c-19ea18fa0b5a","position":[5,6,-15],"texture":"glass"},{"id":"e619f2e8-b219-407c-8acb-b278848116ac","position":[6,2,-15],"texture":"glass"},{"id":"caa612b7-0e30-413e-9335-ada57b94d8e6","position":[10,2,-15],"texture":"glass"},{"id":"a5d57597-d5a1-4272-ac5a-13b172fee57f","position":[11,2,-15],"texture":"glass"}],"texture":"glass"}`
);

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
      return {
        cubes: [],
        texture: "wood"
      };
    case "SAVE_WORLD":
      localStorage.setItem("worldState", JSON.stringify(state));
      return state;
    case "SET_TEXTURE":
      return { ...state, texture: action.payload!.texture! };
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

  const resetWorld = () => {
    const isDelete = window.confirm(
      "Are you sure you want to reset this world? There is no back!"
    );

    if (isDelete) worldDispatcher({ type: "RESET_WORLD", payload: null });
  };

  return { worldState, addCube, removeCube, saveWorld, setTexture, resetWorld };
}
