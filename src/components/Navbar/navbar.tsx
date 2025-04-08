import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core'; // Removed unused Text import
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import cx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
// Removed unused HomePage import - navigation handled by Link
// import { HomePage } from '@/pages/Home.page';
// import { ColorSchemeToggler } from '../ColorSchemeToggle/ColorSchemeToggler'; // Removed unused import
import { IconSun, IconMoon } from '@tabler/icons-react';
import logo from "../../assets/gordonLogo.png";
import { Link, useLocation } from 'react-router-dom'; // Added useLocation import

const links = [
  { link: '/landing', label: 'Home' },
  { link: '/blog', label: 'Blog' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

// Define the home page route consistently
const homeRoute = '/landing';

export function NavbarHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation(); // Get current location
  const [active, setActive] = useState(location.pathname); // Set active based on current path

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    // Use Link component from react-router-dom
    <Link
      key={link.label}
      to={link.link} // Use 'to' prop instead of 'href'
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // No event.preventDefault() needed
        setActive(link.link);
        // Optionally close the mobile menu if opened
        // close(); // You might need to get 'close' from useDisclosure if needed here
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* Wrap logo in a Link component */}
        <Link to={homeRoute} onClick={() => setActive(homeRoute)}>
          <img
            src={logo}
            alt="Gordon Logo"
            className={classes.logo}
            // Remove the incorrect onClick handler
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
          <Group justify="center">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
              variant="default"
              size="xl"
              aria-label="Toggle color scheme"
            >
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        {/* Add Mobile Drawer/Menu handling here if needed, using the 'opened' state */}
        {/* Example: <Drawer opened={opened} onClose={close} title="Navigation"> {items} </Drawer> */}
      </Container>
    </header>
  );
}

export default NavbarHeader;