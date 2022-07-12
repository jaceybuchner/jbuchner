import Project from './Project';
import { ReactElement } from 'react';
import { Link, useBreakpointValue, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Highlighter from "react-highlight-words";
import Emoji from './emoji';

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
        <Heading mb={6}>about me. <Emoji symbol="😀"/></Heading>
    
    {/* <Highlighted 
      text="the quick brown fox jumps over the lazy dog"
      highlight="fox"
    /> */}
      
       
         <Text mb={4} fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
         <span style={{fontWeight: 'bold'}}>now:</span> Working at <Link href="https://healthy.kaiserpermanente.org/northern-california/front-door" bg={"blue.100"}>Kaiser Permanente</Link> as a Product Management Intern and helping grow the 
            <Link href="https://www.blockchainatucsb.com/" isExternal bg={"red.100"}> Blockchain @ UCSB </Link>
             club as the incoming Vice President.
            
        </Text>  
        
        <Text mb={2} fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        <span style={{fontWeight: 'bold'}}>before:   </span> During the spring, I worked at <Link bg="gray.200"href="https://www.berkeleypharmatech.com/"> Berkeley Pharma Tech</Link> as a Software Engineer Intern. I worked on 
            a collection of tokens to fund research into fast-growing redwood trees. 
            
        
        </Text>  
        <Text mb={4} fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        Prior to BPT I worked as a Web Developer at <Link bg={"gray.200"}>Gladiators of Communication</Link>, where I created website to teach public speaking to kids through a collaborative game.
        </Text>  

        <Text mb={4}fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        <span style={{fontWeight: 'bold'}}>interests: </span> I'm interested in learning more about Distributed Systems and Blockchain technologies, 
        Autonomous Driving and Security! 
        </Text>

        <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
        <span style={{fontWeight: 'bold'}}>courses: </span> I have taken courses ranging from Obj. Oriented Design in C++, Discrete Structures to 
        Differential Equations and History of Philosophy.
        </Text>
        
    </Box>
  );
}