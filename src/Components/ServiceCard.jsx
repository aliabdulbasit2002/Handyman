import React from "react";
import {
  Text,
  Box,
  Image,
  Flex,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { MdLocationOn, MdStar, MdVerified } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";

function ServiceCard({
  id,
  businessName,
  img,
  location,
  star,
  isVerified,
  isVerifiedIcon,
  serviceProfile,
}) {
  return (
    <ChakraLink
      key={id}
      as={ReactLink}
      to={serviceProfile}
      shadow={"md"}
      textDecoration={"none"}
      position={"relative"}
      overflow={"hidden"}
      rounded={10}
      style={{ textDecoration: "none" }}
    >
      <Box
        // w={{ base: "150px", md: "250px" }}
        h={{ base: "150px", md: "250px" }}
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={`https://handyhelp.onrender.com/images/${img}`}
          fallbackSrc="https://via.placeholder.com/150"
          w="100%"
          h="100%"
          // h={{ base: "250px", md: "300px" }}
          objectFit="contain"
        />
      </Box>

      <Box bg={"white"} p={{ base: 2 }} w={"100%"}>
        <Flex alignItems={"center"} flexWrap={"wrap"}>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: 14, md: 19 }}
            color="blue.400"
            textTransform={"capitalize"}
          >
            {businessName.length > 30
              ? businessName.slice(0, 20)
              : businessName}
            {businessName.length > 30 && "..."}
          </Text>
          <Spacer />

          <small>View Profile</small>
        </Flex>

        <Box p={"0px"} color={"gray.800"}>
          <Flex justify="space-between">
            <Text
              fontSize={{ base: 13, md: 15 }}
              display={"inline-flex"}
              alignItems={"center"}
              textTransform={"capitalize"}
            >
              <MdLocationOn />
              <i>{location}</i>
            </Text>
            <Text
              fontSize={{ base: 13, md: 15 }}
              display={"inline-flex"}
              alignItems={"center"}
              gap={1}
            >
              {isVerifiedIcon && (
                <MdVerified color={isVerifiedIcon && "green"} />
              )}
              <i>{isVerified}</i>
            </Text>
          </Flex>
          <Box p={"2px"} display={"flex"} color={"orange.400"}>
            {star}
          </Box>
        </Box>
      </Box>
    </ChakraLink>
  );
}

export default ServiceCard;
