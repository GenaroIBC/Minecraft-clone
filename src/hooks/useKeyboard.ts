import { useEffect, useState } from "react";

const KEYBOARD_KEYS = {
  Digit1: "grass",
  Digit2: "dirt",
  Digit3: "wood",
  Digit4: "log",
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump"
};

export function useKeyboard() {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveRight: false,
    moveLeft: false,
    jump: false,
    dirt: false,
    grass: false,
    wood: false,
    log: false
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const action = KEYBOARD_KEYS[event.code];

      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
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
  });
  return actions;
}
