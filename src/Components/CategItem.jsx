import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function CategItem({ title, img }) {
  return (
    <Box alignItems={'center'} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
      <Box
        w={{ base: 12, md: 20 }}
        h={{ base: 12, md: 20 }}
        bg={"white"}
        borderRadius={"5px"}
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={'center'}
      >
        <Image src={img} w={{base:'25px',md:50}} />
      </Box>

      <Text
        fontSize={{ base: 11, md: 17 }}
        fontWeight={'normal'}
      >
        {title}
      </Text>
    </Box>
  );
}

export default CategItem;
