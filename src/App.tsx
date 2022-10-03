import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Router } from './routes';
import { ThemeWrapper } from './styles';

export const App = () => (
  <ThemeWrapper>
    <Box textAlign='center' fontSize='xl'>
      <Router />
    </Box>
  </ThemeWrapper>
);
