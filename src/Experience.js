import Project from './Project';
import { ReactElement } from 'react';
import { Link, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


export default function Experience() {
  return (
    <Box margin={10} 
    //borderRadius={10} bg={"gray.100"} 
    pl={20} 
    pr={20}>
        <Heading mb={5}>work experience</Heading>
        <Text mb={3} fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
            before: During the spring, I worked at <Link bg="blue.100"href="https://www.berkeleypharmatech.com/"> Berkeley Pharma Tech</Link> as a Software Engineer Intern. I worked on 
            a collection of 10,000 NFTs to fund research into fast-growing redwood trees. 
            <br></br> Before that I worked as a Web Developer at Gladiators of Communication 
             
             
            
        </Text>  


        
    </Box>
  );
}