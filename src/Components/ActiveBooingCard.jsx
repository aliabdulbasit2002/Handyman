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
  Badge,
} from "@chakra-ui/react";
import {
  MdStar,
  MdVerifiedUser,
  MdCategory,
  MdLocationOn,
  MdPerson2,
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../api/api";

function ActiveBookingCard({ requestData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let fetchLocalStorage = localStorage.getItem("user");
  const nanoid = customAlphabet("1234567890ABCEDF", 6);
  let userId = JSON.parse(fetchLocalStorage);
  let reqId = requestData._id;
  const [payment, setPayment] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // INSERT NEW TRASACTION
    let data = {
      client: userId._id,
      request: reqId,
      date: new Date(),
      transactionRef: nanoid(),
      ...payment,
    };
    // FUNCTION TO HANGLE TRANSFER OF FUNDS TO FREELANCER
    const newTrasaction = async () => {
      await axios
        .post(`${BaseUrl}/transaction`, data)
        .then((response) => {
          comment();
          updateBusinessBalance();
          updateClientBalance();
          updateBusinessBalance();
          updateReq();
          console.log("paid");
          toast({
            description: "Payment successful",
            status: "success",
            duration: 5000,
            colorScheme: "green",
            isClosable: true,
            position: "bottom",
          });
          navigate("/");
        })
        .catch((err) => {
          // console.log(err.message)
          toast({
            description: err.message,
            status: "error",
            duration: 5000,
            colorScheme: "red",
            isClosable: true,
            position: "top",
          });
        });
    };

    setTimeout(() => {
      newTrasaction();
      setIsLoading(false);
    }, 5000);

    // UPDATE BUSINESS BALANCE
    const updateBusinessBalance = async () => {
      const databody = { amount: payment.amount };
      await axios
        .patch(
          `${BaseUrl}/business/addBalance/${requestData.business._id}`,
          databody
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    // DEDUCT FROM USER BALANCE
    const updateClientBalance = async () => {
      const databody = { amount: payment.amount };
      await axios
        .patch(`${BaseUrl}/client/deductBalance/${userId._id}`, databody)
        .then((_response) => {
          console.log("client balance deducted");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    // UPDATE REQUEST STATUS (DONE)
    const updateReq = async () => {
      const databody = { status: "done" };
      await axios
        .patch(`${BaseUrl}/request/editRequest/${reqId}`, databody)
        .then((_response) => {
          console.log("request completed");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    // updateReq()

    // INSERT NEW COMMENT
    const comment = async () => {
      const databody = {
        business: requestData.business._id,
        client: userId._id,
        comment: payment.review,
      };
      await axios
        .post(`${BaseUrl}/comments`, databody)
        .then((response) => {
          console.log("new comment");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  }; //submit ends here

  const cancelRequest = async () => {
    await axios
      .delete(`${BaseUrl}/request/deleteRequest/${reqId}`)
      .then((response) => {
        console.log("Request Deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Box bg="white" borderRadius={10} my="5" shadow="md">
      <Grid templateColumns="repeat(12,1fr)" gap={{ base: 1, md: 4 }}>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Box
            borderRadius="10"
            w={{ base: "100%", md: "auto" }}
            h={{ base: "200px", md: "100%" }}
            overflow="hidden"
          >
            <Image
              src={`${BaseUrl}/images/${requestData.business.image}`}
              fallbackSrc="https://via.placeholder.com/150"
              w={{ base: "100%", md: "auto" }}
              h="100%"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        {/* BUSINESS INFO */}
        <GridItem colSpan={{ base: 6, md: 4 }} p={2}>
          <Box>
            <Text
              fontSize={{ base: "md", md: "2xl" }}
              mb={{ base: 0, md: 2 }}
              fontWeight={"bold"}
              textTransform="capitalize"
            >
              {requestData.business.businessName}
            </Text>
            <Text
              display={{ base: "none" }}
              noOfLines={[1, 2, 3]}
              mb={{ base: 0, md: 2 }}
            >
              {requestData.business.bio}
            </Text>
            {/* STARS */}
            <Box
              p={"2px"}
              display={"flex"}
              color={"orange.400"}
              mb={{ base: 1, md: 2 }}
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
                <MdStar /> {requestData.business.ratings}
              </Box>
              <Box
                display={"inline-flex"}
                alignItems={"center"}
                color={requestData.business.isVerified ? "green" : "red"}
              >
                {requestData.business.isVerified && <MdVerifiedUser />}
                <Text>
                  {requestData.business.isVerified
                    ? "verified"
                    : "Not verified"}
                </Text>
              </Box>
            </Box>
            <Text overflow={"hidden"}>
              Experience : {requestData.business.yearsOfExpr}yrs
            </Text>
            <Box
              mt={"7px"}
              display={"flex"}
              gap={{ base: 2, md: 5 }}
              alignItems="center"
              flexWrap={"wrap"}
              fontSize={"md"}
            >
              <Box display={"inline-flex"} alignItems="center">
                <MdCategory />
                <small>{requestData.business.category}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdLocationOn />
                <small>{"---"}</small>
              </Box>
              <Box display={"inline-flex"} alignItems="center">
                <MdPerson2 />
                <small>{requestData.business.workers}</small>
              </Box>
            </Box>
          </Box>
        </GridItem>
        {/* BOOKING DETAILS */}
        <GridItem colSpan={{ base: 6, md: 4 }} p={2}>
          <Box>
            <Text
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"bold"}
              mb={{ base: 0, md: 3 }}
            >
              Booking Details
            </Text>
            <Box fontSize={{ base: "0.75rem", md: "1rem" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Service :
              </Text>{" "}
              {requestData.business.category}
            </Box>
            <Box fontSize={{ base: "0.75rem", md: "1rem" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Date & Time :
              </Text>{" "}
              {new Date(requestData.requestDate).toDateString()}
            </Box>
            <Box fontSize={{ base: "0.75rem", md: "1rem" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Location
              </Text>{" "}
              {requestData.address}
            </Box>
            <Box fontSize={{ base: "0.75rem", md: "1rem" }}>
              <Text as={"span"} fontWeight="bold" color={"gray"}>
                Description :
              </Text>{" "}
              {requestData.description}
            </Box>
            {/* BUTTONS */}
            <Box pt="2" fontSize={{ base: "0.75rem", md: "1rem" }}>
              {/* <Badge variant="outline" colorScheme="green">
                Default
              </Badge> */}
              <Badge
                borderRadius={3}
                py={2}
                variant={
                  requestData.requestStatus === "accepted" ||
                  requestData.requestStatus === "completed"
                    ? "subtle"
                    : "solid"
                }
                colorScheme={
                  requestData.requestStatus === "accepted" ||
                  requestData.requestStatus === "completed"
                    ? "green"
                    : "yellow"
                }
                fontWeight="semibold"
                textTransform={"capitalize"}
              >
                {requestData.requestStatus}
              </Badge>
              {
                //checking and showing button
                requestData.requestStatus === "completed" &&
                requestData.status != "done" ? (
                  <Button
                    onClick={onOpen}
                    size="md"
                    colorScheme={
                      requestData.requestStatus === "completed"
                        ? "green"
                        : "yellow"
                    }
                    color={"white"}
                    ml="2"
                  >
                    {"Send Pay"}
                  </Button>
                ) : (
                  ""
                )
              }
              {requestData.requestStatus == "pending" ? (
                <Button
                  colorScheme={
                    requestData.requestStatus == "pending" ? "red" : "red"
                  }
                  color={"white"}
                  ml="2"
                  size="sm"
                  onClick={cancelRequest}
                >
                  {"Cancel"}
                </Button>
              ) : (
                ""
              )}
            </Box>
            {/* END OF BUTTONS */}
          </Box>
        </GridItem>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalHeader textAlign="center">
            Send To : {requestData.business.businessName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form mt={5} onSubmit={handleSubmit}>
              <FormLabel>Amount to Pay</FormLabel>
              <Input
                placeholder="e.g 200"
                type="number"
                mb={4}
                onChange={(e) =>
                  setPayment({ ...payment, amount: e.target.value })
                }
              />
              <Textarea
                placeholder="Review"
                mb={4}
                onChange={(e) =>
                  setPayment({ ...payment, review: e.target.value })
                }
              />
              <Button
                type="submit"
                w={"100%"}
                colorScheme="blue"
                isLoading={isLoading}
              >
                Pay
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ActiveBookingCard;
