import '@mantine/core/styles.css';
import { NavbarHeader } from './components/Navbar/navbar';
import { MantineProvider,} from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NavbarHeader /> {/* Add navbarHeader here */}
      <Router />
    </MantineProvider>
  );
}
