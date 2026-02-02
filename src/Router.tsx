import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { UnderConstruction } from './pages/Underconstruction';
import { BlogHomePage } from './pages/BlogHome.page';
import { RootLayout } from './components/Layout/RootLayout'; // Import the layout
import AboutMe from './pages/AboutMe.page';
import { PortfolioPage } from './pages/Portfolio.page';
import { LandingPage } from './pages/LandingPage';
const router = createBrowserRouter([
  {
    // This is the layout route
    element: <RootLayout />,
    // Add an error element here for better error handling if needed
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/blog',
        element: <BlogHomePage />,
      },
      {
        path:'/test',
        element: <LandingPage />,
      },
      {
        path: '/learn', 
        element: <UnderConstruction />,
      },
      {
        path: '/community', 
        element: <UnderConstruction />,
      },
      {
        path: '/aboutme',
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      // routes that includes the navbar
    ],
  },
  // add pages here if they dont need a navbar!!
]);

export function Router() {
  return <RouterProvider router={router} />;
}