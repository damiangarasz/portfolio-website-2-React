import { useState, useEffect } from "react";

function useButtonClick(buttonRef) {
  return new Promise((resolve) => {
    const handleClick = () => {
      resolve("Kliknięto przycisk!");
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("click", handleClick, { once: true });

      // Cleanup: usuń event listener przy odmontowaniu komponentu
      return () => {
        button.removeEventListener("click", handleClick);
      };
    }
  });
}

export default function App() {
  const [message, setMessage] = useState("");
  const buttonRef = useState(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    useButtonClick(buttonRef).then((msg) => {
      setMessage(msg);
    });

    // Cleanup funkcji asynchronicznej
    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", useButtonClick);
      }
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Kliknij mnie</button>
      <p>{message}</p>
    </div>
  );
}
