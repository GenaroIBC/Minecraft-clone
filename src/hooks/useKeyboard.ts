import { useEffect, useState } from "react";

const KEYBOARD_KEYS = {
  Digit1: "dirt",
  Digit2: "glass",
  Digit3: "grass",
  Digit4: "wood",
  Digit5: "log",
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump"
};

export function useKeyboard() {
  const [actions, setActions] = useState({
    dirt: false,
    glass: false,
    grass: false,
    log: false,
    wood: false,
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // @ts-ignore
      const action = KEYBOARD_KEYS[event.code];

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // @ts-ignore
      const action = KEYBOARD_KEYS[event.code];

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: false
        }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return actions;
}
