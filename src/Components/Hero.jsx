import React from "react";
import { Container, Box, SimpleGrid, Heading,Image } from "@chakra-ui/react";


function Hero({img}) {
  return (
    <Box shadow={'sm'} borderRadius={10} overflow={'hidden'} >
      <Image src={img} />
    </Box>
  );
}

export default Hero;
