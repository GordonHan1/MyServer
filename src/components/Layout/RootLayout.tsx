import { Outlet } from 'react-router-dom';
import { NavbarHeader } from '../Navbar/navbar';
import { Box } from '@mantine/core'; // Optional: for layout structure

export function RootLayout() {
  return (
    <> {/* Or use a Mantine Box/AppShell for better structure */}
      <NavbarHeader />
      <main> {/* Optional: semantic main tag */}
        <Outlet /> {/* Child routes will render here */}
      </main>
    </>
  );
}