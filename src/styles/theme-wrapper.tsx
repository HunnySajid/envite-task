import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import customTheme from './theme';

export const ThemeWrapper: React.FC<any> = ({
  children,
  ...rest
}) => (
  <ChakraProvider
    theme={ customTheme }
    { ...rest }
  >
    { children }
  </ChakraProvider>
);