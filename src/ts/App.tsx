import { createRoot } from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header/Header';
import { Form } from './Sing-in/Form';
import { Game1 } from './Games/Game-1/Game-1';
import { Game2 } from './Games/Game-2/Game-2';
import { Blog } from './Blog/Blog';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Main/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
          <Routes>
            <Route path="/game-1" element={<Game1 />}></Route>
          </Routes>
          <Routes>
            <Route path="/game-2" element={<Game2 />}></Route>
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const container = document.getElementById('root');
if (container == null) {
  throw new Error('lol nie działa, container oddał null');
}
const root = createRoot(container);
root.render(<App />);
