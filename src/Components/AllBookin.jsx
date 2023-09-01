import React, { useEffect, useState } from "react";
import { customAlphabet } from "nanoid";
import {
  Box,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Spacer,
  Image,
  Tag,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import cleanerImg from "../assets/Images/cleaner.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../api/api";

function AllBookin() {

  return (
    <Box bg="white" p="5" borderRadius={10} my="5" shadow="md">
      <Grid templateColumns="repeat(12,1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Box
            borderRadius="10"
            textAlign={{ base: "center" }}
            w={{ base: "150px", md: "200px" }}
            // h="100%"
            overflow="hidden"
            mx="auto"
            bg="red"
          >
            <Image
              src={`${BaseUrl}/images/${allBooking.business.image}`}
              fallbackSrc="https://via.placeholder.com/150"
              // w={{ base: "50%" }}
              // h={{ base: "250px", md: "200px" }}
              objectFit="cover"
              mx={{ base: "auto" }}
            />
          </Box>
        </GridItem>
        {/* BUSINESS INFO */}
        <GridItem colSpan={{ base: 6, md: 4 }}>
          <Box>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              mb={{ base: 3, md: 10 }}
              fontWeight={"bold"}
              textTransform="capitalize"
            >
              {allBooking.business.businessName}
            </Text>
            <Text noOfLines={[1, 2, 3]} mb={{ base: 3, md: 5 }}>
              {allBooking.business.bio}
            </Text>
            {/* STARS */}
            <Box
              p={"2px"}
              display={"flex"}
              color={"orange.400"}
              mb={{ base: 3, md: 5 }}
            >
              <Box
                display={"inline-flex"}
                alignItems="center"
                bg={"orange"}
                px={2}
                color="white"
                borderRadius="4"
                mr="3"
              >
                <MdStar /> {allBooking.business.ratings}
              </Box>
              <Box
                display={"inline-flex"}
                alignItems={"center"}
                color={allBooking.business.isVerified ? "green" : "red"}
              >
                {allBooking.business.isVerified && <MdVerifiedUser />}
                <Text>
                  {allBooking.business.isVerified
                    ? "verified"
                    : "Not verified"}
                </Text>
              </Box>
            </Box>
            <Text overflow={"hidden"}>
              Experience : {allBooking.business.yearsOfExpr}yrs
            </Text>
            <Box
              mt={"7px"}
              display={"flex"}
              gap={{ base: 2, md: 5 }}
              alignItems="center"
              flexWrap={"wrap"}
              fontSize={"xl"}
            >
              <Box display={"inline-flex"} alignItems="center">
                <MdCategory />
                <small>{allBooking.business.category}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdLocationOn />
                <small>{"---"}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdPerson2 />
                <small>{allBooking.business.workers}</small>
              </Box>
            </Box>
          </Box>
        </GridItem>
        {/* BOOKING DETAILS */}
        <GridItem colSpan={{ base: 6, md: 4 }}>
          <Box>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight={"bold"}
              mb={{ base: 0, md: 5 }}
            >
              Booking Details
            </Text>
            <Box fontSize={{ base: "15px", md: "20px" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Service :
              </Text>{" "}
              {allBooking.business.category}
            </Box>
            <Box fontSize={{ base: "15px", md: "20px" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Date & Time :
              </Text>{" "}
              {new Date(allBooking.requestDate).toDateString()}
            </Box>
            <Box fontSize={{ base: "15px", md: "20px" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Location
              </Text>{" "}
              {allBooking.address}
            </Box>
            <Box fontSize={{ base: "15px", md: "20px" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Description :
              </Text>{" "}
              {allBooking.description}
            </Box>
            {/* BUTTONS */}
            <Box pt="5" textAlign={{ base: "15px", md: "20px" }}>
              <Tag
                size="lg"
                bg={
                  allBooking.status === "done"
                    ? "green"
                    : "yellow"
                }
                color={
                  allBooking.status === "done"
                    ? "white"
                    : "black"
                }
                fontWeight="semibold"
                py={3}
                textTransform={"capitalize"}
              >
                {allBooking.status}
              </Tag>
              
            </Box>
            {/* END OF BUTTONS */}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default AllBookin;
