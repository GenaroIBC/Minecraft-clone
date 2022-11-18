import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

const PLAYER_SPEED = 6;
const PLAYER_JUMP_FORCE = 4;

export function Player() {
  const { jump, moveBackward, moveForward, moveLeft, moveRight } =
    useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 20,
    type: "Dynamic",
    position: [0, 10, 0]
  }));

  const position = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe(pos => {
      position.current = pos;
    });
  }, [api.position]);

  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe(vel => {
      velocity.current = vel;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(position.current[0], position.current[1], position.current[2])
    );

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );

    const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0));

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(PLAYER_SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    const isJumping = Math.abs(velocity.current[1]) > 0.04;

    if (jump && !isJumping) {
      api.velocity.set(
        velocity.current[0],
        PLAYER_JUMP_FORCE,
        velocity.current[2]
      );
    }
  });
  // @ts-ignore
  return <mesh ref={ref} />;
}
