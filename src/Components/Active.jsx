import React from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Spacer,
  Image
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/Md";
import cleanerImg from '../assets/Images/cleaner.png'

function Active() {
  return (
    <Box bg="white" p="5" borderRadius={10} my="5" shadow="md">
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <Box w={'50%'}>
          <Image src={cleanerImg} w={'100%'}/>
        </Box>
        <Box>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
            Ruth Plumbing Service
          </Text>
          <Text>Ruth Sandras</Text>
          {/* STARS */}
          <Box p={"2px"} display={"flex"} color={"orange.400"}>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <Spacer />
            <Box
              display={"inline-flex"}
              alignItems={"center"}
              color="green.500"
            >
              <MdVerifiedUser />
              <small>Verified steve</small>
            </Box>
          </Box>

          <Box
            mt={"7px"}
            display={"flex"}
            gap={{ base: 2, md: 5 }}
            alignItems="center" 
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
          
        </Box>
      </SimpleGrid>
      <Box pt="5">
        <Button colorScheme="yellow" color={"white"}>
          {"Pending"}
        </Button>
      </Box>
    </Box>
  );
}

export default Active;
