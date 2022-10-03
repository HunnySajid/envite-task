import * as React from 'react';
import {
  Box,
  Text,
  Grid,
  Heading,
  Container,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../components';
import landingPageLogo from '../../assets/images/landing-page.svg';

export const Landing = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/create');
        // TODO => BUG: history not updating the page for some reason
        window.location.reload();
    }

    return (
        <Grid minH='100vh' p={3}>
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          color='primary.100'
          lineHeight={'110%'}
        >
          Imagine if <br />
          <Text
            css={{
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
            bgGradient='linear(to-r, primary.300, primary.400)'
            as={'span'}
          >
            Snapchat
          </Text>
          <br />
          <Text color='primary.100' as={'span'}>had events.</Text>
        </Heading>
        <Text lineHeight='6' fontSize='lg' color={'neutral.100'}>
          Easily host and share events with your friends across any social
          media.
        </Text>
        <Logo
          display={{lg: 'none'}}
          css={{
            filter: 'drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))',
          }}
          rounded='lg'
          src={landingPageLogo}
          h='96'
          pointerEvents='none'
        />
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            rounded='lg'
            px={6}
            bgGradient='linear(to-r, primary.300, primary.400)'
            color='white'
            onClick={handleClick}
            _hover={{
              bg: 'primary.300',
            }}
          >
            🎉 Create my event
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Grid>
    )
};
