import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme(
  {
    fonts: {
        heading: `'Helvetica', sans-serif`,
        body: `'Helvetica', sans-serif`,
    },
    colors: {
      primary: {
        100: '#240D57',
        200: '#501FC1',
        300: '#8456EC',
        400: '#E87BF8',
      },
      secondary: {
        100: '#CCB6FF',
        200: '#EDE5FF',
        300: '#F6F2FF',
      },
      alert: {
        100: '#FFD7E0',
        200: '#E61445',
        300: '#D3FFE2',
        400: '#00805E'
      },
      neutral: {
        100: '#4F4F4F',
        200: '#828282',
        300: '#BDBDBD',
        400: '#E0E0E0',
        500: '#F2F2F2',
        600: '#BDBDBD'
      }
    },
  }
);

export default customTheme;