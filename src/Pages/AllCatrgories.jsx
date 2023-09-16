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
import security from "../assets/Images/guard.png";
import pest_control from "../assets/Images/pest-control.png";
import homecare from "../assets/Images/assisted-living.png";
import mechanic from "../assets/Images/mechanic.png";
import acrepair from "../assets/Images/acreapir.png";
import driver from "../assets/Images/driver.png";



import { Link,useParams,useNavigate } from "react-router-dom";

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
        templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(5, 1fr)" }}
        gap={6}
        bg="gray.50"
        my={{ base: 10, md: 15 }}
        py={{ base: 5, md: 10 }}
      >
        <CategItem img={plumber} title={"Plumber"} />
        <CategItem img={cleaner} title={"Cleaner"} />
        <CategItem img={mechanic} title={"Mechanic"} />
        <CategItem img={hairsalon} title={"Salon"} />
        <CategItem img={painter} title={"Painter"} />
        <CategItem img={cleaner} title={"Waste Manag..."} />
        <CategItem img={driver} title={"Driver"} />
        <CategItem img={homecare} title={"Home Care"} />
        <CategItem img={electrician} title={"Electrician"} />
        <CategItem img={pest_control} title={"Pest Control"} />
        <CategItem img={security} title={"Security"} />
        <CategItem img={acrepair} title={"AC Repair"} />
        <CategItem img={carpenter} title={"Carpenter"} />
      </SimpleGrid>
    </Box>
  );
}

export default AllCatrgories;
