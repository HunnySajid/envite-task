import * as React from 'react';
import {
  Box,
  Text,
  Grid,
  Container,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Logo } from '../../components';
import { Icon } from '@chakra-ui/react';
import { BsCalendar } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import eventPageLogo from '../../assets/images/event.png';

export const Event = () => (
  <Grid minH='100vh' p={0}>
    <Container px={{ base: 0, md: 40 }} py={{ base: 0, md: 20 }} maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} py={0}>
        <Logo
          display={{ lg: 'none' }}
          css={{
            filter: 'drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))',
          }}
          rounded='none'
          src={eventPageLogo}
          h='96'
          pointerEvents='none'
        />
        <Text
          textAlign={'left'}
          fontWeight={700}
          px={2}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          color='primary.100'
          as={'span'}
        >
          Birthday Bash
        </Text>
        <Text
          textAlign={'left'}
          pl={2}
          fontSize={{ base: '14px', sm: '14px', md: '18px' }}
          color='neutral.200'
          as={'span'}
        >
          hosted by{' '}
          <Text
            textAlign={'left'}
            fontWeight={700}
            pr={2}
            fontSize={{ base: '14px', sm: '14px', md: '18px' }}
            color='neutral.200'
            as={'span'}
          >
            Elias
          </Text>
        </Text>
        <HStack px={2} my='md'>
          <VStack>
            <Box
              display='flex'
              boxShadow={'0px 0px 5px rgba(0, 0, 0, 0.1)'}
              rounded='md'
              p={4}
              bgColor='white'
            >
              <Icon color='#8456EC' as={BsCalendar} />
            </Box>
          </VStack>
          <VStack alignItems='flex-start'>
            <Text color='primary.100' fontSize={{ sm: 'md', md: 'lg' }} fontWeight={700}>
              18 August 6:00PM
            </Text>
            <Text color='neutral.100' mt={0} pt={0} fontSize={{ base: '14px', md: 'lg' }} fontWeight={400}>
              to <strong>19 August 1:00PM</strong> UTC +10
            </Text>
          </VStack>
        </HStack>
        <HStack px={2} my={{base: 'md', md:'32px' }}>
          <VStack>
            <Box
              display='flex'
              boxShadow={'0px 0px 5px rgba(0, 0, 0, 0.1)'}
              rounded='md'
              p={4}
              bgColor='white'
            >
              <Icon color='#8456EC' as={GoLocation} />
            </Box>
          </VStack>
          <VStack alignItems='flex-start'>
            <Text color='primary.100' fontSize={{ base: 'md', md: 'lg' }} fontWeight={700}>
                Street name
            </Text>
            <Text color='neutral.100' marginTop={0} p={0} fontSize={{ base: '14px', md: 'lg' }} fontWeight={400}>
                Suburb, State, Postcode
            </Text>
          </VStack>
        </HStack>
      </Stack>
    </Container>
  </Grid>
);
