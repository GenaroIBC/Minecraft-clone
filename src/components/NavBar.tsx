import { useWorldStore } from "../hooks/useWorldStore";
import { HelpMenu } from "./HelpMenu";

export function NavBar() {
  const { saveWorld, resetWorld } = useWorldStore();

  return (
    <>
      <button className="save-world-btn texturized-btn" onClick={saveWorld}>
        Save World
      </button>
      <button className="reset-world-btn texturized-btn" onClick={resetWorld}>
        Reset World
      </button>
      <HelpMenu />
    </>
  );
}
