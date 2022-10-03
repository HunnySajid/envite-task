import React, { useState } from 'react';
import {
  Box,
  Text,
  Grid,
  Container,
  Stack,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { Logo, FileUpload } from '../../components';
import { Icon } from '@chakra-ui/react';
import { BsCalendar } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { useHistory } from 'react-router-dom';

export const CreateEventForm = () => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
    
  const history = useHistory()

  const handleClick = () => {
    history.push('/event');
    // TODO => BUG: history not updating the page for some reason
    window.location.reload();
}

  return (
    <Grid minH='100vh' p={0}>
      <Container px={{ base: 0, md: 40 }} py={{ base: 0, md: 20 }} maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} py={0}>
          <Logo
            display={{ lg: 'none' }}
            css={{
              filter: 'drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))',
            }}
            rounded='none'
            src={img}
            h='96'
            pointerEvents='none'
          />
          <FileUpload onImageUpload={(img: any) => setImg(img)} />
          <Input
            textAlign={'left'}
            placeholder='Event Name'
            onChange={(e) => setName(e.target.value) }
            fontWeight={700}
            border='none'
            px={2}
            fontSize={{ base: 'lg', sm: '2xl', md: 'xl' }}
          />

          <Text
            textAlign={'left'}
            pl={2}
            fontSize={{ base: '14px', sm: '14px', md: '18px' }}
            color='neutral.200'
            as={'span'}
          >
            hosted by{' '}
            <Input
              textAlign={'left'}
              fontWeight={700}
              border='none'
              onChange={(e) => setOrg(e.target.value) }
              placeholder='eg. Travis John'
              pr={2}
              fontSize={{ base: '14px', sm: '14px', md: '18px' }}
              color='neutral.200'
            />
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
              <Text
                color='neutral.100'
                mt={0}
                pt={0}
                fontSize={{ base: '14px', md: 'lg' }}
                fontWeight={400}
              >
                From{' '}
                <Input
                  type='datetime-local'
                  placeholder='Select Start Date'
                  color='primary.100'
                  size='md'
                  border='none'
                  width={{ base: '200px', md: '300px' }}
                  onChange={(e) => setStart(e.target.value) }
            
                  fontSize={{ sm: 'md', md: 'lg' }}
                  fontWeight={700}
                />
              </Text>

              <Text
                color='neutral.100'
                mt={0}
                pt={0}
                fontSize={{ base: '14px', md: 'lg' }}
                fontWeight={400}
              >
                To{' '}
                <Input
                  type='datetime-local'
                  placeholder='Select End Date'
                  color='primary.100'
                  size='sm'
                  onChange={(e) => setEnd(e.target.value) }
                  border='none'
                  width={{ base: '200px', md: '300px' }}
                  fontSize={{ sm: 'sm', md: 'md' }}
                  fontWeight={700}
                />
              </Text>
            </VStack>
          </HStack>
          <HStack px={2} my={{ base: 'md', md: '32px' }}>
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
              <Text
                color='primary.100'
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight={700}
              >
                Street name
              </Text>
              <Text
                color='neutral.100'
                marginTop={0}
                p={0}
                fontSize={{ base: '14px', md: 'lg' }}
                fontWeight={400}
              >
                Suburb, State, Postcode
              </Text>
            </VStack>
          </HStack>
        </Stack>
        <Button
          rounded='lg'
          px={6}
          my={6}
          bgGradient='linear(to-r, primary.300, primary.400)'
          onClick={handleClick}
          color='white'
          _hover={{
            bg: 'primary.300',
          }}
          disabled={ !img || !name || !org}
        >
          🎉 Next
        </Button>
      </Container>
    </Grid>
  );
};
