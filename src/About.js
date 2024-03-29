import head from '../src/adobe_head.svg';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Link,

    useBreakpointValue,
  } from '@chakra-ui/react';
import Emoji from './emoji';

  export default function SplitScreen() {
    return (
      <Stack 
      
      pr={10}
      pl={10}
      pt={20}
      margin={{base: 0, md: 10}}
      
      //borderRadius={1}
      //bg={"gray.100"}
      
      
      direction={{ base: 'column', md: 'row' }}
      >
        
        <Flex
        pt={10}
        alignItems={'center'}
        justifyContent={'center'}
        flex={1}>
            
     
          {<Image
            height={{base: '40vh', md: '60vh'}}
            rounded={10}
            
            alt={'Cover Image'}
            objectFit={'cover'}
            src={
                'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/281354924_996970160954592_3957231374639651999_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kD6mRiKfEfwAX8UiMKX&tn=6jsJUdONq_9vkfMx&_nc_ht=scontent-lax3-2.xx&oh=03_AdRIQNBcfr2-3KIYRohoffkE5iXpLu9JRudm83sH6LE4Kw&oe=63B3CD3E'
             }
          /> }
        </Flex>

        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
              
            <Heading fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}>
                
            <Text color={'black.400'} paddingLeft={0}as={'span'}>
              </Text>{' '}
              <Text
                fontSize={'100%'}
                as={'span'}
                position={'relative'}
               /**  _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.200',
                  zIndex: -1,
                }}*/>
                Hi, I'm
              </Text>
              <br />{' '}
              
              <Text
                fontSize={'100%'}
                as={'span'}
                position={'relative'}
               >
                Jacey Buchner. 
              
              </Text>
              
            </Heading>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.600'}>
                A programmer, studying Computer Science at UC Santa Barbara! 
                <Emoji symbol=" 👨‍💻️🌴"></Emoji>
            <br></br>
            </Text>
            
            <Stack direction={{ base: 'row', md: 'row' }} spacing={4}>
                
              <Link isExternal style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/jaceybuchner/">
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
              </Link>

              <Link style={{textDecoration: 'none'}} href="/jacey_b_resume.pdf" >
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
              </Link>

              <Link isExternal style={{textDecoration: 'none'}} href="mailto:jaceybuchner@gmail.com">
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
              </Link>
            </Stack>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }