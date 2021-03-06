import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { HashLink as Link } from 'react-router-hash-link';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  //Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HashLink } from 'react-router-hash-link';
import Me from './Me';
import skills from './skills';
import Projects from './Projects';
import { blue } from '@mui/material/colors';

const Links = ['About', 'Projects', 'Skills'];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
    >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
      <Box 
      
      position="fixed" 
      // as="nav"
       w="100%"
      // padding={0}
      // margin={0}
       zIndex={1}
      bg={useColorModeValue('gray.100', 'gray.900')} 
      px={4}>

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'} >
            <Box fontWeight={650}> Jacey Buchner</Box>

            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

              {Links.map((link) => (
                <NavLink key={link}
                
                > 
                 <a href={`#${link}`}  >{link}</a> 
                </NavLink>
              ))}
            
            </HStack>
      
          </HStack>

          
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
                
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>

            <Stack as={'nav'} spacing={4}>

              {Links.map((link) => (
                <NavLink key={link}> 
                 <a href={`#${link}`}  >{link}</a> 
                </NavLink>
              ))}

            </Stack>
          </Box>
        ) : null}

      </Box>

    </>
  );
}