import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Active from "../Components/ActiveBooingCard";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";
import BaseUrl from "../api/api";
import Loading from "../Components/Loading";
import AllBookingCard from "../Components/AllBookingCard";

function ActiveBooking() {
  // GET USER ID FROM LOCALSTORAGE
  let userId = localStorage.getItem("user");
  let userData = JSON.parse(userId);
  const [loader, setLoder] = useState(true);

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    // let userId = localStorage.getItem("user");
    // let userData = JSON.parse(userId);
    const requestData = async () => {
      const data = await axios.get(
        `${BaseUrl}/request/requestByIdDone/${userData._id}`
      );
      if (data.data) {
        setLoder(false);
        setRequests(data.data);
      }
    };
    requestData();
  }, [requests]);

  return (
    <Box p={{ base: 2, md: 5 }}>
      <Heading color="gray.400" display={"inline-flex"} alignItems="center">
        <span>
          <MdArrowBackIos onClick={() => navigate(-1)} />
        </span>
        All Booking
      </Heading>
      {}

      {/* LIST OF ACTIVE BOOKINGS */}
      {loader ? <Loading /> : ""}
      {requests.map((request, index) => {
        return loader ? (
          <Loading />
        ) : (
          <AllBookingCard key={index} requestData={request} />
        );
      })}
      {loader == false && requests.length <= 0 && (
        <Box
          h={"50vh"}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
        >
          <Heading>No Booking</Heading>
        </Box>
      )}
    </Box>
  );
}

export default ActiveBooking;
