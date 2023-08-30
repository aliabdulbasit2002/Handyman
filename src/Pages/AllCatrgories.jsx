import { Box, Heading, Grid, SimpleGrid } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import CategItem from "../Components/CategItem";
import { MdArrowBackIos } from "react-icons/md";

import plumber from "../assets/Images/plumber.png";
import cleaner from "../assets/Images/cleaning.png";
import electrician from "../assets/Images/electrician.png";
import hairsalon from "../assets/Images/hairsalon.png";
import painter from "../assets/Images/painter.png";
import carpenter from "../assets/Images/carpenter.png";
import { Link,useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function AllCatrgories() {

  return (
    <Box p={{ base: 5, md: 10 }} borderRadius="10px">
      <Heading color="gray.400" display={"inline-flex"} alignItems="center">
        <Link to={"/"}>
          <MdArrowBackIos />
        </Link>
        All Categories
      </Heading>

      <SimpleGrid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
        gap={6}
        bg="gray.50"
        my={{ base: 10, md: 15 }}
        py={{ base: 5, md: 10 }}
      >
        <CategItem img={plumber} title={"Plumber"} />
        <CategItem img={cleaner} title={"Cleaner"} />
        <CategItem img={electrician} title={"Mechanic"} />
        <CategItem img={hairsalon} title={"Salon"} />
        <CategItem img={painter} title={"Painter"} />
        <CategItem img={carpenter} title={"Waste Manag..."} />
        <CategItem img={plumber} title={"Driver"} />
        <CategItem img={cleaner} title={"Home Care"} />
        <CategItem img={electrician} title={"Electrician"} />
        <CategItem img={hairsalon} title={"Gardener"} />
        <CategItem img={painter} title={"Security"} />
        <CategItem img={carpenter} title={"AC Repair"} />
      </SimpleGrid>
    </Box>
  );
}

export default AllCatrgories;
