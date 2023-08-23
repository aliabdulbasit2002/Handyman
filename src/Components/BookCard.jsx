import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import {
  MdVerifiedUser,
  MdStar,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/Md";
import { Link } from "react-router-dom";

function BookCard({ img }) {
  return (
    <Link to={'/profile/plumber'}>
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
            <Image src={img} alt="image here" w={"100%"} />
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
                <small>Verified steve</small>
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
            p={{ base: 1, md: 3 }}
            textAlign="center"
            right={0}
            top={0}
            bg={"green.500"}
            color="white"
          >
            <Text>30gh</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default BookCard;
