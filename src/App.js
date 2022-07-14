import React from 'react';
import {
  ChakraProvider,
  Divider, 
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useColorModeValue,
  Container, 
  Stack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Navbar';
import SplitScreen from './About';
import Experience from './Experience';
import Timeline from './Timeline';
import Projects from './Projects';
import Me from './Me';
import Project from './Project';
import Skills from './skills';
import SFooter from './SmallFooter';
import Emoji from './emoji';



function App() {
  return (
    <ChakraProvider 
    
    theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet"></link>
      <Box 
      borderWidth={0.1}
      fontSize={'xl'} >
        

        <Navbar />
        
        <SplitScreen />
        <br></br>
        <Me />
        <br></br>
        <Projects/>
        <br></br>
        <Skills/>
        <br></br>
        <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
         <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
        <Text fontSize={'sm'}>created by Jacey Buchner w/ <Emoji symbol="🍵"/>  and <Emoji symbol="❤️" /></Text>
        
      </Container>
    </Box>
      </Box>
    </ChakraProvider>
  );
}

/** removed from react chakra template
 * 
 *  <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
 */
export default App;
