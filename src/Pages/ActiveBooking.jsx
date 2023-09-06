import React, { useEffect, useState } from "react";
import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import Active from "../Components/Active";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";
import BaseUrl from "../api/api";

function ActiveBooking() {
  // GET USER ID FROM LOCALSTORAGE
  let userId = localStorage.getItem("user");
  let userData = JSON.parse(userId);

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    // let userId = localStorage.getItem("user");
    // let userData = JSON.parse(userId);
    const requestData = async () => {
      const data = await axios.get(
        `${BaseUrl}/request/requestById/${userData._id}`
      );
      setRequests(data.data);
    };
    requestData();
  }, [requests]);

  return (
    <Box p={{ base: 2, md: 5 }}>
      <Heading color="gray.400" display={"inline-flex"} alignItems="center">
        <span>
          <MdArrowBackIos onClick={() => navigate(-1)} />
        </span>
        Active Booking
      </Heading>
      {}

      {/* LIST OF ACTIVE BOOKINGS */}
      {requests.map((request, index) => {
        return <Active key={index} requestData={request} />;
      })}
      {requests.length <= 0 && <Box h={'50vh'} display={'flex'} justifyContent='center' alignItems='center'><Heading>No Active Booking</Heading></Box>}
    </Box>
  );
}

export default ActiveBooking;
