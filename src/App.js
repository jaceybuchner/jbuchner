import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Simple from './Navbar';
import SplitScreen from './About';
import Experience from './Experience';
import Timeline from './Timeline';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize={'xl'} >
        <Simple>
        </Simple>
    
        <SplitScreen />
        <Timeline />
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
