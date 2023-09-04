import React from "react";
import { AspectRatio, Box, Image } from "@chakra-ui/react";

function Hero({ img }) {
  return (
    <Box shadow="sm" borderRadius={10} overflow="hidden">
      <AspectRatio ratio={14 / 5}>
        <Image src={img} />
      </AspectRatio>
    </Box>
  );
}

export default Hero;
