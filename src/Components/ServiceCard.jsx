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
import BaseUrl from "../api/api";

function ServiceCard({
  id,
  businessName,
  img,
  location,
  isVerified,
  isVerifiedIcon,
  serviceProfile,
  ratings,
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
      <Box h={{ base: "200px", md: "250px" }} maxW="100%" overflow={"hidden"}>
        <Image
          src={`${BaseUrl}/images/${img}`}
          fallbackSrc="https://via.placeholder.com/600"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      <Box bg={"white"} p={2} w={"100%"}>
        <Flex alignItems={"center"} flexWrap={"wrap"}>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: 14, md: 16 }}
            color="blue.400"
            textTransform={"capitalize"}
          >
            {businessName.length > 30
              ? businessName.slice(0, 20)
              : businessName}
            {businessName.length > 30 && "..."}
          </Text>
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
          <Box
            display={"inline-flex"}
            alignItems="center"
            bg={"orange"}
            px={2}
            color="white"
            borderRadius="4"
            mr="3"
            gap={2}
          >
            <MdStar /> {ratings}
          </Box>
        </Box>
      </Box>
    </ChakraLink>
  );
}

export default ServiceCard;
