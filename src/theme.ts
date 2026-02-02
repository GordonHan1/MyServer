import { createTheme } from '@mantine/core';
import { MantineThemeOverride } from '@mantine/core';
export const theme = createTheme({
  fontFamily: 'Arial, sans-serif',
  primaryColor: 'blue',
  defaultRadius: 'sm',
  colors: {
    dark: [
      '#ffffd6', // 0: Main Text Color
      '#dcdca0', // 1
      '#b9b970', // 2
      '#969640', // 3
      '#323228', // 4: Inner Lines / Borders (Mantine default for borders)
      '#2a2a20', // 5
      '#1a1c1a', // 6
      '#0e100f', // 7: Main Background Color
      '#080908', // 8
      '#020202', // 9
    ],
  },
  other: {},
});