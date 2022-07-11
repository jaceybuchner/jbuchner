
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Experience() {
  return (
    <>
      <Container maxW={'7xl'}>
        <Heading
            margin={0}
            pl={10}
            fontWeight={500}
            fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
            lineHeight={'100%'}>
            experience
        </Heading>
        <Stack
         p={10} 
         direction={{ base: 'column', md: 'column' }}
         margin={0}
         textAlign={'flex-start'}
          >

          
          <Text width={'70%'} fontSize={'xl'} color={'gray.800'}>
            Product Management Intern @ Kaiser Permante
          </Text>
          <Text fontSize={'large'} color={'gray.500'}>
            
           
          </Text>
            <br></br>
          <Text width={'70%'} fontSize={'xl'} color={'gray.800'}>
            Software Engineer Intern @ Berkeley Pharma Tech
          </Text>
          <Text fontSize={'large'} color={'gray.500'}>
            
            
          </Text>
        </Stack>
      </Container>
    </>
  );
}
