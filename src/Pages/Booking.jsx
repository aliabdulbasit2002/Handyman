import {
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import plumber2 from "../assets/Images/plumber2.jpg";
import {
  MdVerifiedUser,
  MdStar,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/Md";

function Booking() {
  return (
    <Box p={{ base: 2, md: 5 }}>
      <Box
        bg="white"
        p={{ base: 3, md: 5 }}
        my={5}
        shadow="lg"
        borderRadius="10px"
        position={"relative"}
      >
        <Flex gap={{ base: 2, md: 5 }}>
          <Box
            bg="gray.500"
            w={{ base: "80px" }}
            borderRadius="5px"
            overflow="hidden"
          >
            <Image src={plumber2} alt="image here" w={"100%"} />
          </Box>
          <Box flexGrow={2}>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
              Ruth Plumbing Service
            </Text>
            <small>Ruth Sandras</small>
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
                <small>Verified</small>
              </Box>
            </Box>
            {/* END OF STARS */}
            <Box
              mt={"7px"}
              display={"flex"}
              gap={{ base: 2, md: 5 }}
              alignItems="center"
            >
              <Box display={"inline-flex"}>
                <MdCategory />
                <small>Plumber</small>
              </Box>
              <Box display={"inline-flex"}>
                <MdLocationOn />
                <small>Spintex comm18</small>
              </Box>
              <Box display={"inline-flex"}>
                <MdPerson2 />
                <small>Plumber</small>
              </Box>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            p={3}
            textAlign="center"
            right={0}
            top={-5}
            bg={"green.500"}
            rounded={"full"}
            color="white"
          >
            <Text>30gh</Text>
          </Box>
        </Flex>
      </Box>

      <Box bg="white" p={5} my={5} shadow="lg" borderRadius="10px">
        <Text> Enter Details</Text>
        <form>
          <SimpleGrid columns={{ base: 2 }} gap={5} my={3}>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="date" min={new Date()} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="address" />
            </FormControl>
          </SimpleGrid>
          <Textarea placeholder="Description" />
          <Button colorScheme="twitter" mt={6} w="50">
            Send Request
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Booking;
