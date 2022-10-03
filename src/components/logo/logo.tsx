import * as React from 'react';
import { chakra, ImageProps, forwardRef, Box, Text } from '@chakra-ui/react';

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  return props.src ? (
    <chakra.img ref={ref} {...props} />
  ) : (
    <Box justifyContent='center' alignItems={'center'} {...props}>
      <Text>No Image Uploaded</Text>
    </Box>
  );
});
