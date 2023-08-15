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
} from "@chakra-ui/react";
import React, { useState } from "react";
import plumber2 from "../assets/Images/plumber2.jpg";

import BookCard from "../Components/BookCard";

function Booking() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookingInfo, setBookingInfo] = useState({});

  const handleSubmit = ()=>{
    console.log(bookingInfo);
    onOpen()
  }

  const dateToday = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const getUserLiveLocation = () => {
    navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
      if (permissionStatus.state === 'granted') {
        navigator.geolocation.getCurrentPosition(
          position => {
            setBookingInfo({...bookingInfo,cordinates : {lat:position.coords.latitude,long:position.coords.longitude}})
          },
          error => {
            console.log('Error', error);
          }
        );
      } else if (permissionStatus.state === 'prompt') {
        console.log('Location permission is pending. Prompting user...');
        alert("Your location is off, Kindly turn on device location")
        // You can show a UI element or message to guide the user to grant permission.
      } else {
        console.log('Location permission denied or unavailable.');
        alert("Permission denied, Kindly turn on device location")
      }
    });
  };

  return (
    <Box p={{ base: 2, md: 5 }}>
      <BookCard img={plumber2} />

      {/* FORM */}
      <Box bg="white" p={5} my={5} shadow="lg" borderRadius="10px">
        <Text> Enter Details</Text>
        <form>
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
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, datetime: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="address"
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, address: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="Number"
                onChange={(e) =>
                  setBookingInfo({ ...bookingInfo, phone: e.target.value })
                }
              />
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
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, description: e.target.value })
            }
          />

          <Button
            colorScheme="twitter"
            mt={{ base: 2, md: 6 }}
            w="50"
            onClick={handleSubmit}
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
