import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => toggleColorScheme()}>
        Switch to {colorScheme === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </Group>
  );
}
