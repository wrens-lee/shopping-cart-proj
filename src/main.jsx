import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';
import Routes from './Components/Routes.jsx';
import { ItemContext, ItemContextValue } from './Components/ItemContext.jsx';

const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemContextValue>
      <RouterProvider router={router} />
    </ItemContextValue>
  </StrictMode>,
);
