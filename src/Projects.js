import Project from './Project';
import { ReactElement } from 'react';
import {  Image, useColorModeValue, Code,  Link, Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
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
import Emoji from './emoji';
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Feature = ({ url, title, text, icon, lnk, linkcolor, l1, l2, l3}: FeatureProps) => {
  return (
    <Stack //bg={"blue.100"}
    >
    <Link href={lnk}>
    
    {<Image
            height={'10vh'}
            mb={'2'}
            maxW={"90%"}
            alt={'Login Image'}
            objectFit={'contain'}
            src={
                url
             }
      /> } 
      </Link>
      
      <Text fontWeight={600}><Link isExternal bg={linkcolor} href={lnk}> {title} <ExternalLinkIcon mx='1px' /> </Link></Text>
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
    <Box id="Projects" margin={{base: 0, md: 10}}
    //borderRadius={10} bg={"gray.100"} 
    pr={20}
    pl={20} >
        
        <Heading mb={9}>my projects. <Emoji symbol="🛠"/> </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          
            <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'cryptaid'}
            text={
                'Web 3.0 Website that allows users to donate with anonymity and safety  to organizations using the concept of decentralized apps.'
            }
            lnk={"https://cryptaid-theta.vercel.app/"}
            //linkcolor={"red.200"}
            l1={"Solidity"}
            l2={"React"}
            l3={"Moralis SDK"}
            url={"https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/284296807_1043202276608598_5288984272005013496_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wWtySuf-hCwAX8_Yqc7&_nc_ht=scontent-lax3-2.xx&oh=03_AdQRyKjYDY2Z6SD3XP2ZDNw3V6HKEEcYqUmNV4WcliuXFA&oe=63B3C271"}
          />
          
       
          
        <Feature
          icon={<Icon as={FcOk} w={10} h={10} />}
          title={'30Seconds'}
          text={
            'Website that offers Behavioral Interview Practice. Uses a speech-to-text API to offer feedback of self-recorded interviews. '
          }
          lnk={"https://seconds-ef259.web.app/"}
          //linkcolor={"green.200"}
          l1={"HTML/CSS"}
          l2={"React"}
          l3={"AssemblyAI API"}
          url={"https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/293035957_725125318599966_5078447619404852796_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mlBHVnqyrQAAX8IF756&_nc_ht=scontent-lax3-2.xx&oh=03_AdTT6xL-0K4VZG-lxKqzqM-6ZZOiN9nd7hfOvxk6mJqPmw&oe=63B3BFFA"}
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
          l3={"Google Maps API"}
          url={"https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/292851052_5177457908955876_1138628819411982008_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JixfyDXQe08AX8-_Tob&_nc_ht=scontent-lax3-2.xx&oh=03_AdTA6pMN5Lse7B2blft77BNPf1tleqqhU9z6-4yEfDoFaw&oe=63B3B3BC"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'InstAid'}
          text={
            'Health app that connects people with friends/family, if they are in need of an epipen/inhaler in the case of an emergency'
          }
          lnk={"https://devpost.com/software/instaaid-3rmdzf"}
          //linkcolor={"yellow.200"}
          l2={"Node.js"}
          l1={"Swift/Xcode"}
          l3={"Sketch"}
          url={"https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/292781171_794643835235270_4631492321257971741_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Z6IkGEcXHo8AX9Dc3vx&_nc_ht=scontent-lax3-1.xx&oh=03_AdS9V_dzunsCF5HpJVKa10zkuDccAstnkA3jPKTispnJzw&oe=63B3BF4A"}
        />
      </SimpleGrid>
    </Box>
  );
}