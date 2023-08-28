import React, { useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Spacer,
  Image,
  Tag,
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import cleanerImg from "../assets/Images/cleaner.png";

function Active({
  businessName,
  name,
  category,
  rating,
  employees,
  date,
  location,
  description,
  isVerified,
}) {
  return (
    <Box bg="white" p="5" borderRadius={10} my="5" shadow="md">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <Box borderRadius="10">
          <Image
            src={cleanerImg}
            fallbackSrc="https://via.placeholder.com/150"
            // w={{ base: "100%", md: "50%" }}
            h={{ base: "150px", md: "200px" }}
            objectFit="cover"
            mx={{ md: "auto" }}
          />
        </Box>

        <Box>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
            {businessName}
          </Text>
          <Text>{name}</Text>
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
              <MdStar /> {rating}
            </Box>
            <Box
              display={"inline-flex"}
              alignItems={"center"}
              color={isVerified ? "green" : "red"}
            >
              {isVerified && <MdVerifiedUser />}
              <Text>{isVerified ? "verified" : "Not verified"}</Text>
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
              <small>{category}</small>
            </Box>
            <Box display={"inline-flex"} alignItems="center">
              <MdLocationOn />
              <small>{location}</small>
            </Box>
            <Box display={"inline-flex"} alignItems="center">
              <MdPerson2 />
              <small>{employees}</small>
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
            {category}
          </Box>
          <Box>
            <Text as={"span"} fontWeight="bold" color={"gray"}>
              Date & Time :
            </Text>{" "}
            {date}
          </Box>
          <Box>
            <Text as={"span"} fontWeight="bold" color={"gray"}>
              Description :
            </Text>{" "}
            {description}
          </Box>
        </Box>
      </SimpleGrid>
      <Box pt="5" textAlign={{ base: "none", md: "right" }}>
        <Tag bg="yellow" fontWeight="semibold" py={3}>
          {"Awaiting Confirmation"}
        </Tag>
        <Button colorScheme="red" color={"white"} ml="2">
          {"Cancel"}
        </Button>
      </Box>
    </Box>
  );
}

export default Active;
