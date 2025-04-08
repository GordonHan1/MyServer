import '@mantine/core/styles.css';
import React from 'react';
// No longer need useState or NavbarHeader import here
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    // MantineProvider still wraps everything
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {/* Only render the Router component */}
      {/* RouterProvider inside will handle rendering RootLayout (with Navbar) and the active route */}
      <Router />
    </MantineProvider>
  );
}