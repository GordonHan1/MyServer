import { createTheme } from '@mantine/core';
import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Arial, sans-serif',
  primaryColor: 'blue', // Set the primary color
  defaultRadius: 'sm', // Optional: Set default border radius
  colors: {
    dark: ['#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66', '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a'],
  },
  other: {
    // Add any custom properties if needed
  },
};