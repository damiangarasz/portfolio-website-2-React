import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header/Header";
import { Form } from "./Sing-in/Form";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Form />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById("root");
if (container == null) {
  throw new Error("lol nie działa, container oddał null");
}
const root = createRoot(container);
root.render(<App />);
