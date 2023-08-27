import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";
import plumber2 from "../assets/Images/plumber2.jpg";
import Active from "../Components/Active";

function MyBookings() {
  const { singlecategory } = useParams();
  return (
    <Box p={{ base: 2, md: 10 }}>
      <Heading color="gray.400" display={"inline-flex"} alignItems="center">
        <Link to={"/"}>
          <MdArrowBackIos />
        </Link>
        Plumbers
      </Heading>
      <Box p={{ base: 2 }}>
        <Active />
      </Box>
    </Box>
  );
}

export default MyBookings;
