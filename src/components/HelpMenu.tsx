import { useRef } from "react";

const ACTION_KEYS = [
  {
    key: "W",
    action: "Forward"
  },
  {
    key: "A",
    action: "Left"
  },
  {
    key: "S",
    action: "Backward"
  },
  {
    key: "D",
    action: "Right"
  },
  {
    key: "SPACE",
    action: "Jump"
  },
  {
    key: "CLICK",
    action: "Add cube"
  },
  {
    key: "CTRL/ALT/CMD + CLICK",
    action: "Remove cube"
  },
  {
    key: "1 - 2 - 3 - 4 - 5",
    action: "Change texture"
  },
  {
    key: "ESC",
    action: "Show cursor/Close help modal"
  }
];

export function HelpMenu() {
  const modalRef = useRef<HTMLDialogElement>(null);

  // @ts-ignore
  const handleShowModal = e => {
    e.stopPropagation();
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <section className="help-menu">
      <button className="texturized-btn" onClick={handleShowModal}>
        Help
      </button>
      <dialog onClick={e => e.stopPropagation()} ref={modalRef}>
        {ACTION_KEYS.map(({ key, action }) => (
          <p>
            <code>{key}</code>
            <span>{action}</span>
          </p>
        ))}
        <button className="texturized-btn" onClick={handleCloseModal}>
          OK
        </button>
      </dialog>
    </section>
  );
}
