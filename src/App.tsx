import '@mantine/core/styles.css';
import { NavbarHeader } from './components/Navbar/navbar';
import { MantineProvider, MantineTheme, useMantineTheme, MantineColorScheme, useMantineColorScheme} from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';


function getComputedColorScheme(colorScheme: MantineColorScheme) {
  return colorScheme === 'auto' ? "dark": colorScheme;
}

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NavbarHeader /> {/* Add navbarHeader here */}
      <Router />
    </MantineProvider>
  );
}
