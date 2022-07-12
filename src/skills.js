import React from 'react';
import {
    Heading,
    SimpleGrid,
  ChakraProvider,
  Divider, 
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  theme,
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'
import Emoji from './emoji';
 

export default function skills() {
    return(
        <Box margin={10} 
        //borderRadius={10} bg={"gray.100"} 
        pr={20}
        pl={20} >
            <Heading mb={9}>my skills.<Emoji symbol=" 🧮"/> </Heading>
            
            <SimpleGrid fontSize={"lg"}columns={{ base: 1, md: 2 }} spacing={10}>
              
               
                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>C/C++</Text>
                        <Text >Experienced</Text>
                    </Stack>
                    <Progress value={95} />
                </Box>

                <Box>
                    <Stack  spacing={'auto'}mb={1} direction={'row'}>
                        <Text>HTML/CSS </Text>
                        <Text >Experienced</Text>
                    </Stack>
                    <Progress value={90} />
                </Box>

                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>Java</Text>
                        <Text >Experienced</Text>
                    </Stack>
                    <Progress value={90} />
                </Box>

                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>React.js</Text>
                        <Text >Experienced</Text>
                    </Stack>
                    <Progress value={90} />
                </Box>

                <Box>
                    <Stack  spacing={'auto'} mb={1} direction={'row'}>
                        <Text>Solidity</Text>
                        <Text > Somewhat Experienced</Text>
                    </Stack>
                    <Progress value={70} />
                </Box>

                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>Python</Text>
                        <Text > Somewhat Experienced</Text>
                    </Stack>
                    <Progress value={70} />
                </Box>
                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>Salesforce CRM </Text>
             
                        <Text > Somewhat Experienced</Text>
                    </Stack>
                    <Progress value={70} />
                </Box>
                <Box>
                    <Stack spacing={'auto'} mb={1} direction={'row'}>
                        <Text>SQL</Text>
                        <Text > Familiar</Text>
                    </Stack>
                    <Progress value={57} />
                </Box>
             </SimpleGrid>
        </Box>
    );
}