import React from "react";
import { Text, Box, Flex, Spacer, SimpleGrid,Image } from "@chakra-ui/react";
import plumber from '../assets/Images/plumber.png'
import cleaner from '../assets/Images/cleaning.png'
import electrician from '../assets/Images/electrician.png'
import hairsalon from '../assets/Images/hairsalon.png'
import painter from '../assets/Images/painter.png'
import carpenter from '../assets/Images/carpenter.png'

import CategItem from "./CategItem";
import { Link } from "react-router-dom";


function Categories() {
  return (
    <div>
      <Flex alignItems={"center"} mb={3}>
        <Text fontWeight={"semibold"} fontSize={{ base: 15, md: 25 }}>
          Categories
        </Text>
        <Spacer />
        <Text fontWeight={"semibold"} fontSize={{ base: 13, md: 20 }}>
          <Link to={'/Categories'}>View All</Link>
          
        </Text>
      </Flex>

      <SimpleGrid columns={{base:6,md:6}} alignItems={"center"} gap={{ base: 4, md: 10 }} fontWeight={{base:'light',md:'semibold'}} color={'gray.500'}>
        <CategItem img={plumber} title={'Plumber'}/>
        <CategItem img={cleaner} title={'Cleaner'}/>
        <CategItem img={electrician} title={'Electrician'}/>
        <CategItem img={hairsalon} title={'Salon'}/>
        <CategItem img={painter} title={'Painter'}/>
        <CategItem img={carpenter} title={'Carpenter'}/>

      </SimpleGrid>
    </div>
  );
}

export default Categories;
