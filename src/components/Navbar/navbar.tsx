import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import cx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import { HomePage } from '@/pages/Home.page';
import { ColorSchemeToggler } from '../ColorSchemeToggle/ColorSchemeToggler';
import { IconSun, IconMoon } from '@tabler/icons-react';
import logo from "../../assets/gordonLogo.png";

const links = [
  { link: '/homepage', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
  
];

export function NavbarHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <img 
          src={logo} 
          alt="Gordon Logo" 
          className={classes.logo} 
          onClick={HomePage} 
        />
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
      </Container>
    </header>
  );
}

export default NavbarHeader;