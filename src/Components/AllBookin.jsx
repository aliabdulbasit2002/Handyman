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
//   const { isOpen, onOpen, onClose } = useDisclosure();
  let fetchLocalStorage = localStorage.getItem("user");
  let userId = JSON.parse(fetchLocalStorage);
  const [allBooking,setAllBooking] =useState([])

  useEffect(()=>{
    const getAllBooking = async () => {
        const data = await axios.get(
          `${BaseUrl}/request/requestByIdDone/${userId._id}`
        );
        console.log(data.data)
        // setAllBooking(data.data);
      };

    getAllBooking()
  })



  return (
    <></>
  );
}

export default AllBookin;
