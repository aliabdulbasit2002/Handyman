import React from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import cleanerImg from "../assets/Images/cleaner.png";

function Active() {
  return (
    <Box bg="white" p="5" borderRadius={10} my="5" shadow="md">
      <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
        <Box borderRadius="10">
          <Image src={cleanerImg} w={{ base: "100%", md: "50%" }} />
        </Box>

        <Box>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
            Ruth Plumbing Service
          </Text>
          <Text>Ruth Sandras</Text>
          {/* STARS */}
          <Box p={"2px"} display={"flex"} color={"orange.400"} my={1}>
            <Box
              display={"inline-flex"}
              alignItems="center"
              bg={"orange"}
              px={2}
              color="white"
              borderRadius="4"
              mr="3"
            >
              <MdStar /> 4.5
            </Box>
            <Box
              display={"inline-flex"}
              alignItems={"center"}
              color="green.500"
            >
              <MdVerifiedUser />
              <Text>Verified</Text>
            </Box>
          </Box>
          <Box
            mt={"7px"}
            display={"flex"}
            gap={{ base: 2, md: 5 }}
            alignItems="center"
            flexWrap={"wrap"}
          >
            <Box display={"inline-flex"} alignItems="center">
              <MdCategory />
              <small>Plumber</small>
            </Box>
            <Box display={"inline-flex"} alignItems="center">
              <MdLocationOn />
              <small>Spintex comm18</small>
            </Box>
            <Box display={"inline-flex"} alignItems="center">
              <MdPerson2 />
              <small>Plumber</small>
            </Box>
          </Box>
        </Box>

        <Box>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
            Booking Details
          </Text>
          <Box>
            <Text as={"span"} fontWeight="bold" color={"gray"}>
              Service :
            </Text>{" "}
            Plumbing
          </Box>
          <Box>
            <Text as={"span"} fontWeight="bold" color={"gray"}>
              Date & Time :
            </Text>{" "}
            2023-05-12 12:15
          </Box>
          <Box>
            <Text as={"span"} fontWeight="bold" color={"gray"}>
              Description :
            </Text>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam!
          </Box>
        </Box>
      </SimpleGrid>
      <Box pt="5" textAlign={{ base: "none", md: "right" }}>
        <Button colorScheme="yellow" color={"white"}>
          {"Awaiting Confirmation"}
        </Button>
        <Button colorScheme="red" color={"white"} ml="2">
          {"Cancel"}
        </Button>
      </Box>
    </Box>
  );
}

export default Active;
