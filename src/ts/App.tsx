import { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => {
  return <Header />;
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container == null) {
    return;
  }
  const root = createRoot(container);
  root.render(<App />);
});
