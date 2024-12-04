import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header/Header";
import { Form } from "./Sing-in/Form";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const container = document.getElementById("root");
if (container == null) {
  throw new Error("lol nie działa, container oddał null");
}
const root = createRoot(container);
root.render(<App />);
