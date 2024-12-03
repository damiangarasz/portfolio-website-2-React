import { createRoot } from "react-dom/client";
import Header from "./Header/Header";
import ErrorBoundary from "./ErrorBoundary";
import Form from "./Sing-in/Form";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Form />
    </ErrorBoundary>
  );
};

const container = document.getElementById("root");
if (container == null) {
  throw new Error("lol nie działa, container oddał null");
}
const root = createRoot(container);
root.render(<App />);
