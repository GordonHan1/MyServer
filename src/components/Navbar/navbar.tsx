import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core'; 
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import cx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/aboutme', label: 'About Me' },
  { link: '/test', label: 'Test' },
  { link: '/portfolio', label: 'Portfolio' },
];

export function NavbarHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation(); 
  const [active, setActive] = useState(location.pathname);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

 return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={30} visibleFrom="xs">
          <Group gap={30} className={classes.linksGroup}>
            {items}
          </Group>
          <Group justify="center">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
              variant="outline" // loooks better!
              color="gray"   
              size="xl"
              aria-label="Toggle color scheme"
            >
              <IconSun className={cx(classes.icon, classes.dark)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.light)} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default NavbarHeader;
