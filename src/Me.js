import Project from './Project';
import { ReactElement } from 'react';
import { Link, useBreakpointValue, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Spacer } from '@chakra-ui/react';
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
    <Box 
    
    id="About" margin={{base: 0, md: 10}} pr={20} pl={20}>

        <Heading mb={6}>about me. <Emoji symbol="😀"/></Heading>
        
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Box minWidth={"150"}pr={'5'}><Text fontWeight={'bold'}>now: </Text></Box>
          
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
                Currently, I am working at <Link href="https://healthy.kaiserpermanente.org/northern-california/front-door" color={"blue.600"}>Kaiser Permanente</Link> as a Product Management Intern and helping grow the 
                <Link href="https://www.blockchainatucsb.com/" isExternal color={"blue.600"}> Blockchain @ UCSB </Link>
                club as the incoming Vice President.
            </Text>  
          </Flex>
          <br></br>

          <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box minWidth={"150"}pr={'5'}><Text fontWeight={'bold'}>before: </Text></Box>

            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
            During the spring, I worked at <Link color={"blue.600"} href="https://www.berkeleypharmatech.com/"> Berkeley Pharma Tech</Link> as a Software Engineer Intern, where my team and I
                used a javascript art engine to create a collection of 10,000 Non-fungible-tokens to fund research into fast-growing redwood trees.
                <br></br><br></br>
                Prior to BPT I worked as a Web Developer at <Link color={"blue.600"}>Gladiators of Communication</Link>, where I helped create a website to teach public speaking to kids through a collaborative game.
            </Text>  
          </Flex>

          <br></br>
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Box minWidth={"150"}pr={'5'}><Text pr={'5'}fontWeight={'bold'}>interests: </Text></Box>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
             I'm interested in learning more about Distributed Systems and Blockchain technologies, 
            Autonomous Driving and Security in the future! 
            </Text>
          </Flex>

          <br></br>

          <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box minWidth={"150"}pr={'5'}><Text pr={'5'}fontWeight={'bold'}>courses: </Text> </Box>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.700'}>
            Obj. Oriented Design in C++, Discrete Structures, Differential Equations and Linear Algebra, Computer Architecture.
            </Text>
          </Flex>
        
    </Box>
  );
}