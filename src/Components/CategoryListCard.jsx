import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Spacer,
  Image,
  Flex
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import cleanerImg from "../assets/Images/cleaner.png";
import { Link } from "react-router-dom";
import BaseUrl from "../api/api";

function CategoryListCard({ item }) {
  return (
    <Link to={`/business/serviceProfile/${item._id}`}>
      <Box bg="white" p="2" borderRadius={10} my="5" shadow="md" >
        <Flex columns={{ base: 2, md: 3 }} gap={4}>
          <Box w={{ base: "40%", md: "150px" }}
            maxH={"100%"}
            borderRadius="5px"
            overflow="hidden"
            bg={'red'}
            >
            <Image
              src={`${BaseUrl}/images/${item.image}`}
              fallbackSrc="https://via.placeholder.com/150"
              w="100%"
              h="100%"
              objectFit={{ base: "cover"}}
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight={"bold"}
              maxWidth={{ base: "200px", md: "none" }}
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              textTransform={"capitalize"}
            >
              {item.businessName}
            </Text>
            <Text>
              {item.freelancer.firstname} {item.freelancer.lastname}
            </Text>
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
                <MdStar /> {item.ratings}
              </Box>
              <Box
                display={"inline-flex"}
                alignItems={"center"}
                color={item.isVerified ? "green" : "red"}
              >
                {item.isVerified && <MdVerifiedUser />}
                <small>{item.isVerified ? "verified" : "Not verified"}</small>
              </Box>
            </Box>
            <Box
              mt={"7px"}
              display={"flex"}
              gap={{ base: 1 }}
              alignItems="center"
              flexWrap={"wrap"}
              w='100%'
            >
              <Box display={"inline-flex"} alignItems="center" gap={2}>
                <MdCategory />
                <small>{item.category}</small>
              </Box>
              <Box
                display={"inline-flex"}
                alignItems="center"
                textTransform={"capitalize"}
              >
                <MdLocationOn />
                <small>
                  {item.freelancer.address.city} -{" "}
                  {item.freelancer.address.town}
                </small>
              </Box>
              <Box display={"inline-flex"} alignItems="center" gap={2}>
                <MdPerson2 />
                <small>{item.workers}</small>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default CategoryListCard;
