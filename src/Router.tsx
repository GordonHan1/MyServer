import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { UnderConstruction } from './pages/Underconstruction';
import { BlogHomePage } from './pages/BlogHome.page';
import { RootLayout } from './components/Layout/RootLayout'; // Import the layout
import AboutMe from './pages/AboutMe.page';

const router = createBrowserRouter([
  {
    // This is the layout route
    element: <RootLayout />,
    // Add an error element here for better error handling if needed
    // errorElement: <ErrorPage />,
    children: [
      // These routes will render inside the RootLayout's <Outlet />
      {
        path: '/landing',
        element: <HomePage />,
      },
      {
        path: '/', // Consider if you want '/' or '/landing' as the default
        element: <UnderConstruction />,
      },
      {
        path: '/blog',
        element: <BlogHomePage />,
      },
      {
        path: '/learn', // Add placeholder routes if needed
        element: <UnderConstruction />,
      },
      {
        path: '/community', // Add placeholder routes if needed
        element: <UnderConstruction />,
      },
      {
        path: '/aboutme',
        element: <AboutMe />,
      },
      // Add other routes that should have the navbar here
    ],
  },
  // You could add other top-level routes here if they
  // should NOT have the Navbar, e.g., a login page.
  // {
  //   path: '/login',
  //   element: <LoginPage />
  // }
]);

export function Router() {
  return <RouterProvider router={router} />;
}