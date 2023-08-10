import React from "react";
import { Container, Box, SimpleGrid, Heading,Image } from "@chakra-ui/react";
import cleanerImg from '../assets/Images/cleaner.png'

function Hero() {
  return (
    <Box shadow={'sm'} borderRadius={10} >
      <SimpleGrid columns='2' alignItems={'center'}  my={{base:5}} bg={'gray.100'}  rounded={10}>
        <Box p={{base:2,md:10}}>
          <Heading fontSize={{base:'24',md:80}} textAlign={'start'} color={'orange.400'}>
            Your Trusted <br />Handy 
            Man <br /> Service 
          </Heading>
        </Box>
        <Box boxSize={{base:150,md:'md'}} w={'100%'}>
            <Image src={cleanerImg} fallbackSrc='https://via.placeholder.com/250' objectFit='contain' boxSize='100%'/>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Hero;
