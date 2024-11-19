import { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => {
  <Header />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
