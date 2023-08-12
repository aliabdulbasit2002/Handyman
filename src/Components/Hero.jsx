import React from "react";
import { Container, Box, SimpleGrid, Heading,Image } from "@chakra-ui/react";
import cleanerImg from '../assets/Images/cleaner.png'
import banner1 from '../assets/Images/banner1.jpg'

function Hero({img}) {
  return (
    <Box shadow={'sm'} borderRadius={10} overflow={'hidden'} >
      <Image src={img} />
    </Box>
  );
}

export default Hero;
