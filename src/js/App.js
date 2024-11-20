import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Header from "./Header/Header";

const App = () => {
  return _jsx(Header, {});
};
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container == null) {
    return;
  }
  const root = createRoot(container);
  root.render(_jsx(App, {}));
});
