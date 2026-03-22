import { useEffect, useState } from 'react';
import { Container, Group, Burger, Drawer, Stack } from '@mantine/core';
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
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  useEffect(() => {
    setActive(location.pathname);
    close();
  }, [close, location.pathname]);

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

  const mobileItems = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.mobileLink}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Group gap={30} visibleFrom="xs">
            <Group gap={30} className={classes.linksGroup}>
              {items}
            </Group>
            <Group justify="center">
              <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
                variant="outline"
                color="gray"
                size="xl"
                aria-label="Toggle color scheme"
              >
                <IconSun className={cx(classes.icon, classes.dark)} stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.light)} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="xs"
            size="sm"
            aria-label="Toggle navigation"
            className={classes.mobileTrigger}
          />
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="xs"
        withCloseButton={false}
        size="100%"
        padding={0}
        classNames={{
          content: classes.mobileDrawerContent,
          body: classes.mobileDrawerBody,
        }}
      >
        <div className={classes.mobileDrawerHeader}>
        <Burger
          opened={opened}
          onClick={close}
          size="sm"
          aria-label="Close navigation"
          className={classes.mobileBurger}
        />
        </div>
        <Stack gap="xl" justify="center" align="center" className={classes.mobileMenu}>
          {mobileItems}
        </Stack>
      </Drawer>
    </>
  );
}

export default NavbarHeader;
