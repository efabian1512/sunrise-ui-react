import { HStack, Text, Box, Button, Spacer, Flex} from '@chakra-ui/react';
import NAVBARTABS from '../constants/navbartabs';
import logo from '../assets/SmallSquareLogoJpgCropped.jpg';
import React from 'react';

const NavBar = () => {
 return (
    <Flex as="nav" backgroundColor='black' wrap="wrap">
       <Spacer />
        <HStack spacing={8} padding={3} justifyContent='center'>
          {NAVBARTABS.map((tab, index) => {
           if(tab.isHomeTab) return <Box>
               <HStack key={index} spacing={1}>
                  <img width='50px' height='50px' style={{cursor: 'pointer'}} src={logo} />
                  <Text color='gray' fontWeight='bold'>{tab?.title}</Text>
               </HStack>
            </Box>
            
            if (!tab.isHomeTab && !tab.isLoginTab) return <Text key={index} color='gray.500' fontWeight='bold'>{tab?.title}</Text>;
         })}
    </HStack>
    <Spacer/>
    <HStack marginEnd={6}>
        {NAVBARTABS.map(tab => {
           if (tab.isLoginTab) return  <Button _hover={{backgroundColor: "#d3d4d5"}} size="md" fontWeight="bold" bg="white"  color="black">{tab.title}</Button>
        })}
       </HStack>
    </Flex>
 )
}

export default NavBar;