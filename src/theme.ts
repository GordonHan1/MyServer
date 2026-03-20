import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Arial, sans-serif',
  primaryColor: 'mist',
  defaultRadius: 'sm',
  colors: {
    mist: [
      '#eef3f7',
      '#dbe4ec',
      '#c2d0dc',
      '#a3b7c7',
      '#839db1',
      '#6c879d',
      '#577084',
      '#465b6b',
      '#364653',
      '#27343e',
    ],
    dark: [
      '#e7e9ec', // 0: main text color
      '#cdd2d8', // 1: secondary text
      '#aab2bc', // 2: muted text
      '#6c7580', // 3: disabled text / soft dividers
      '#3a424b', // 4: borders and inner lines
      '#23282e', // 5: elevated surfaces
      '#1c2025', // 6: panels
      '#15181c', // 7: base background
      '#101215', // 8: deeper background
      '#0a0c0e', // 9: darkest background
    ],
  },
  other: {},
});
