import Profile from './Profile';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack p={10} direction={{ base: 'column', md: 'row' }}>
        
        <Flex
        pt={10}
        alignItems={'center'}
        justifyContent={'center'}
        flex={1}>
            
     
          {<Image
            height={'50vh'}
            rounded={15}
            
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/281354924_996970160954592_3957231374639651999_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qFPbAkOgWncAX_HaZo1&tn=6jsJUdONq_9vkfMx&_nc_ht=scontent-lax3-2.xx&oh=03_AVLi6SwuWgesqeJX6em_RTDpDR80fgpg5purIMzFPF9djg&oe=62F200BE'
             }
          /> }
        </Flex>

        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
              
            <Heading fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}>
                
            <Text color={'black.400'} paddingLeft={0}as={'span'}>
              </Text>{' '}
              <br />{' '}
              <Text
                fontSize={'100%'}
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.200',
                  zIndex: -1,
                }}>
                Jacey Buchner
              </Text>
              
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                I'm a Sophomore studying Computer Science at UC Santa Barbara! 
                
            <br></br>
                
               
            </Text>
            
            <Stack direction={{ base: 'row', md: 'row' }} spacing={4}>
                
              <Button
                rounded={'9'}
                bg={'gray.200'}
                color={'blackAlpha.700'}
                _hover={{
                  bg: 'gray.500',
                  color: 'white',
                }}>
                LinkedIn
              </Button>
              
              <Button
                rounded={'9'}
                bg={'gray.200'}
                color={'blackAlpha.700'}
                _hover={{
                  bg: 'gray.500',
                  color: 'white',
                }}>
                Resume
              </Button>

              <Button
                rounded={'9'}
                bg={'gray.200'}
                color={'blackAlpha.700'}
                _hover={{
                  bg: 'gray.500',
                  color: 'white',
                }}>
                Email
              </Button>

            </Stack>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }