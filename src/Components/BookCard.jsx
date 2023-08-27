import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import {
  MdVerifiedUser,
  MdStar,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function BookCard() {
  const location = useLocation();
  const receivedData = location.state;
  // console.log(receivedData.serviceDetails);

  const {
    _id,
    businessName,
    isVerified,
    workers,
    ratings,
    freelancer,
    image,
    category,
    charge,
  } = receivedData.serviceDetails;

  return (
    <Link to={-1}>
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
            bg="white"
            w={{ base: "100px" }}
            borderRadius="5px"
            overflow="hidden"
          >
            <Image
              src={`http://localhost:3001/images/${image}`}
              alt="image here"
              w={"100%"}
              objectFit={"fill"}
            />
          </Box>
          <Box flexGrow={2}>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
              {businessName}
            </Text>
            <small>
              {" "}
              {freelancer?.firstname} {freelancer?.lastname}
            </small>
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
                <MdStar /> {ratings}
              </Box>
              <Box
                display={"inline-flex"}
                alignItems={"center"}
                color={isVerified ? "green" : "red"}
              >
                {isVerified && <MdVerifiedUser />}
                <small>{isVerified ? "verified" : "Not verified"}</small>
              </Box>
            </Box>
            {/* END OF STARS */}
            <hr />
            <Box
              mt={"7px"}
              display={"flex"}
              gap={{ base: 2, md: 5 }}
              alignItems="center"
              flexWrap="wrap"
            >
              <Box display={"inline-flex"} alignItems="center">
                <MdCategory />
                <small>{category}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdLocationOn />
                <small> {freelancer?.address?.city}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdPerson2 />
                <small>{workers}</small>
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
            <Text>GH {charge}</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default BookCard;
