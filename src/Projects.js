import Project from './Project';
import { ReactElement } from 'react';
import { Image, useColorModeValue, Code,  Link, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit, FcOk } from 'react-icons/fc';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
 

const Feature = ({ title, text, icon, lnk, linkcolor, l1, l2, l3}: FeatureProps) => {
  return (
    <Stack //bg={"blue.100"}
    >
    
      {/* <Flex 
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex> } */}
      {/* {<Image
            height={'50vh'}
            rounded={15}
            maxW={"80%"}

            alt={'Login Image'}
            objectFit={'cover'}
            src={
                'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/291390144_602015891351321_3818869550158185555_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uYIoWUdGhqAAX_B-ReS&_nc_ht=scontent-lax3-2.xx&oh=03_AVI8vDIQahAbISDwbGWifu2VUgQ8ye8PxpOToUEbgQ_DAw&oe=62F210F4'
             }
          /> } */}
      
      <Text fontWeight={600}><Link bg={linkcolor} href={lnk}>{title}</Link></Text>
      <Text color={'gray.600'}>{text}</Text>
      <Stack direction='row'>
      <Text fontSize={14}>STACK: </Text> 
      <Code children={l1} />
      <Code children={l2}/>
      <Code children={l3} />
    </Stack>
    </Stack>
  );
};

export default function Projects() {
  return (
    <Box margin={10} 
    //borderRadius={10} bg={"gray.100"} 
    pr={20}
    pl={20} >
        <Heading  mb={5}>my projects. </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          
            <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'cryptaid'}
            text={
                'Web 3.0 Website that allows users to donate with anonymity and safety for donating to organizations using the concept of decentralized apps.'
            }
            lnk={"https://cryptaid-theta.vercel.app/"}
            //linkcolor={"red.200"}
            l1={"Solidity"}
            l2={"React"}
          />
          
       
          
        <Feature
          icon={<Icon as={FcOk} w={10} h={10} />}
          title={'30Seconds'}
          text={
            'Website that offer Behavioral Interview Practice. Uses a speech-to-text API to offer feedback of self-recorded interviews. '
          }
          lnk={"https://seconds-ef259.web.app/"}
          //linkcolor={"green.200"}
          l1={"HTML/CSS"}
          l2={"React"}
        />
       
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Fiesta'}
          text={
            'Social platform that enables users to find & add parties to a map, rate parties, add reviews and more!'
          }
          lnk={"https://fiesta-5caa1.web.app/"}
          //linkcolor={"blue.200"}
          l1={"Firebase"}
          l2={"React"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'InstAid'}
          text={
            'Health app that connects people with friends/family, if they are in need of an epipen/inhaler in the case of an emergency'
          }
          lnk={"https://devpost.com/software/instaaid-3rmdzf"}
          //linkcolor={"yellow.200"}
          l1={"Node.js"}
          l2={"Swift/Xcode"}
          l3={"Sketch"}
        />
      </SimpleGrid>
    </Box>
  );
}