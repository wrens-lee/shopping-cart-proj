import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Routes from './Components/Routes.jsx';
import { ItemContextProvider } from './Components/ItemContextProvider.jsx';

const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemContextProvider>
      <RouterProvider router={router} />
    </ItemContextProvider>
  </StrictMode>,
);
