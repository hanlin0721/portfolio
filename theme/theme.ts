import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const colors = {
  brand: {
    50: '#ecefff',
    100: '#cbceeb',
    200: '#a9aed6',
    300: '#888ec3',
    400: '#666db0',
    500: '#4d5496',
    600: '#3c4178',
    700: '#2a2f5a',
    800: '#181c3c',
    900: '#08081c',
  },
};

export const theme = extendTheme({ config, colors });
