import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { UnderConstruction } from './pages/Underconstruction';

const router = createBrowserRouter([
  {
    path: '/landing',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <UnderConstruction />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
