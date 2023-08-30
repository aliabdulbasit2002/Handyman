import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Active from "../Components/Active";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";

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
        "http://localhost:3001/request/requestById",
      );
      setRequests(data);
    };
    requestData();
  }, []);

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
      {requests &&
        requests.map((request, index) => {
          const { business, client, description, address, requestDate } =
            request;
          return (
            <Active
              key={index}
              businessName={business?.businessName}
              name={client?.fullname}
              category={business?.category}
              rating={business?.ratings}
              employees={business?.workers}
              date={new Date(requestDate).toDateString()}
              location={address}
              description={description}
              isVerified={business?.isVerified}
            />
          );
        })}
    </Box>
  );
}

export default ActiveBooking;
