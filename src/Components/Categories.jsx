import React from "react";
import { Text, Box, Flex, Spacer, SimpleGrid } from "@chakra-ui/react";

function Categories() {
  return (
    <div>
      <Flex alignItems={"center"} mb={5}>
        <Text fontWeight={"semibold"} fontSize={{ base: 15, md: "30" }}>
          Categories
        </Text>
        <Spacer />
        <Text fontWeight={"semibold"} fontSize={{ base: 13, md: "30" }}>
          View All
        </Text>
      </Flex>

      <SimpleGrid columns={{base:4,md:6}} alignItems={"center"} gap={{ base: 5, md: 10 }} fontWeight={'semibold'} color={'gray.500'}>
        <Box align={"center"} >
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <small fontSize={{ base: 14, md: 17 }} align="center">
            Plumber
          </small>
        </Box>
        <Box align={"center"} >
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <small fontSize={{ base: 14, md: 17 }} align="center">
            Hair
          </small>
        </Box>
        <Box align={"center"} >
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <Text fontSize={{ base: 14, md: 17 }} align="center">
            AC Repair
          </Text>
        </Box>
        <Box align={"center"} >
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <small fontSize={{ base: 14, md: 17 }} align="center">
            Mechanic
          </small>
        </Box>
        <Box align={"center"} display={{base:'none',md:'block'}}>
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <small fontSize={{ base: 14, md: 17 }} align="center">
            Carpenter
          </small>
        </Box>
        <Box align={"center"} display={{base:'none',md:'block'}}>
          <Box
            w={{ base: 10, md: 20 }}
            h={{ base: 10, md: 20 }}
            bg={"white"}
            borderRadius={"full"}
          ></Box>
          <small fontSize={{ base: 14, md: 17 }} align="center">
            Painter
          </small>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Categories;
