import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { customAlphabet } from "nanoid";
import BookCard from "../Components/BookCard";
import { useForm } from "react-hook-form";
import axios from "axios";
import BaseUrl from "../api/api";

function Booking() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookingInfo, setBookingInfo] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state;
  const activeUser = localStorage.getItem("user");
  const currentUser = JSON.parse(activeUser);
  const nanoid = customAlphabet("1234567890ABCEDF", 6);
  const toast = useToast();
  // console.log(receivedData.serviceDetails._id);
  let id = receivedData.serviceDetails._id;
  let business = receivedData.serviceDetails;

  const onSubmit = async (data) => {
    if (!currentUser) {
      return navigate("/login");
    }
    let request = {
      business: business._id,
      client: currentUser._id,
      refNumber: nanoid(),
      ...data,
      ...bookingInfo,
    };

    // console.log(request);

    try {
      const res = await axios.post(`${BaseUrl}/request`, request);
      // navigate(-1);
    } catch (error) {
      console.log(error.message);
    }

    // console.log(bookingInfo);
    navigate("/ActiveBooking");
    // onOpen();
    // console.log(request);
  };
  //
  const dateToday = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // Hook form
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm();
  // function to get location
  const getUserLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      toast({
        description: "Location activated",
        status: "success",
        colorScheme: "green",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  };
  function showPosition(position) {
    setBookingInfo({
      ...bookingInfo,
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  return (
    <Box p={{ base: 2, md: 5 }}>
      <BookCard />

      {/* FORM */}
      <Box bg="white" p={5} my={5} shadow="lg" borderRadius="10px">
        <Text> Enter Details</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            gap={{ base: 2, md: 5 }}
            my={{ base: 5, md: 3 }}
          >
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="datetime-local"
                min={dateToday()}
                id="requestDate"
                {...register("requestDate", { required: "Date is required" })}
              />
              <Text color="red">{errors.date?.message}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="address"
                id="address"
                {...register("address", { required: "Address is required" })}
              />
              <Text color="red">{errors.address?.message}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="Number"
                id="phone"
                {...register("phone", { required: "Phone no. is required" })}
              />
              <Text color="red">{errors.phone?.message}</Text>
            </FormControl>
            <Button
              colorScheme="twitter"
              mt={{ base: 2, md: 8 }}
              w=""
              onClick={getUserLiveLocation}
            >
              Use Current Location
            </Button>
          </SimpleGrid>
          <Textarea
            placeholder="Description"
            {...register("description", {
              required: "Please provide a description",
            })}
          />
          <Text color="red">{errors.description?.message}</Text>

          <Button
            colorScheme="twitter"
            mt={{ base: 2, md: 6 }}
            w="50"
            type="submit"
            // onClick={onSubmit}
            isLoading={isSubmitting}
          >
            Send Request
          </Button>
        </form>
      </Box>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered mx="auto">
        <ModalOverlay />
        <ModalContent mx={5}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ratione.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Booking;
