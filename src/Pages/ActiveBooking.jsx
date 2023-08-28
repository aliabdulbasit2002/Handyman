import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Active from "../Components/Active";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";

function ActiveBooking() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const { data } = await axios.get("http://localhost:3001/request");

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

      {/* LIST OF ACTIVE BOOKINGS */}
      {requests.map((request) => {
        const { business, client, description, address, updatedAt } = request;
        return (
          <Active
            businessName={business?.businessName}
            name={client?.fullname}
            category={business?.category}
            rating={business?.rating}
            employees={business?.workers}
            date={updatedAt}
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
