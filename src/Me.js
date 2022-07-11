import Project from './Project';
import { ReactElement } from 'react';
import { Link, useBreakpointValue, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Highlighter from "react-highlight-words";


const Highlighted = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
  
    return (
      <span>
        {parts.filter(String).map((part, i) => {
          return regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

export default function Me() {
  return (
    <Box margin={10} 
    //borderRadius={10} bg={"gray.100"} 
    pr={20} 
    pl={20}>
        <Heading mb={5}>about me </Heading>
    
    {/* <Highlighted 
      text="the quick brown fox jumps over the lazy dog"
      highlight="fox"
    /> */}

         <Text mb={3} fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
            now: Working at <Link href="https://healthy.kaiserpermanente.org/northern-california/front-door" bg={"blue.100"}>Kaiser Permanente</Link> as a PM Intern and helping grow the 
            <Link href="https://www.blockchainatucsb.com/" isExternal bg={"red.100"}> Blockchain @ UCSB </Link>
             club as ___ .
            <br></br>I spend my time listening to tech podcasts (Lex Fridman), playing ukulele, skiing and getting 
            boba with friends!
            
        </Text>  
        

        <Text mb={3}fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        interests: I'm very interested in learning more about Distributed Systems and Blockchain technologies, 
        Autonomous Driving and Security! 
        </Text>

        <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        courses: I have taken courses ranging from Obj. Oriented Design in C++, Discrete Structures to 
        Differential Equations and History of Philosophy.
        </Text>
        
    </Box>
  );
}