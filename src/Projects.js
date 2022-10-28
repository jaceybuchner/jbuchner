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
            url={"https://scontent.xx.fbcdn.net/v/t1.15752-9/284296807_1043202276608598_5288984272005013496_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=wnhk18TLwe8AX92F-QS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT7lcUXG8eOePTv7hBWw1SnfeHiA93Tv4JTnXbLGWG_Pg&oe=63836B71"}
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
          url={"https://scontent.xx.fbcdn.net/v/t1.15752-9/293035957_725125318599966_5078447619404852796_n.png?stp=dst-png_s350x350&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4I0RYRf_0qEAX-wUnOx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSSZh6s66IGgbLdRfCaTeozi5xE7c_4PfOMuZh8h7TFyw&oe=6381367A"}
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
          url={"https://scontent.xx.fbcdn.net/v/t1.15752-9/292851052_5177457908955876_1138628819411982008_n.png?stp=dst-png_s526x296&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qIGvoO8sa68AX_ltgyz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTbpQnbghfRqmZJfU8Sg2vbo8t6mNg5kDXbdKS-HOH0-g&oe=6383247C"}
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
          url={"https://scontent.xx.fbcdn.net/v/t1.15752-9/292781171_794643835235270_4631492321257971741_n.png?stp=dst-png_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=t4zj1-wGO8cAX-h6JOV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR_8oR4YwV1gaTkiCPXGb_-6XshamMH9irQ4r_4Pda7ew&oe=6381DE8A"}
        />
      </SimpleGrid>
    </Box>
  );
}