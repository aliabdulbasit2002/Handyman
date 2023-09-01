import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

function CategoryListCard({ item }) {
  return (
    <Link to={`/business/serviceProfile/${item._id}`}>
      <Box bg="white" p="5" borderRadius={10} my="5" shadow="md">
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
          <Box borderRadius="10" w={"150px"} h={"150px"} overflow={"hidden"}>
            <Image
              src={`https://handyhelp.onrender.com/images/${item.image}`}
              w={{ base: "100%" }}
              fallbackSrc="https://via.placeholder.com/150"
              objectFit={"cover"}
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
              gap={{ base: 2, md: 5 }}
              alignItems="center"
              flexWrap={"wrap"}
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
        </SimpleGrid>
      </Box>
    </Link>
  );
}

export default CategoryListCard;
