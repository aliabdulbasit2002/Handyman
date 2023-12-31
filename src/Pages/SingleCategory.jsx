import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";
import plumber2 from "../assets/Images/plumber2.jpg";
import CategoryListCard from "../Components/CategoryListCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../api/api";
import Loading from "../Components/Loading";

function SingleCategory() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { singlecategory } = useParams();
  const [loader,setLoder] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const serviceDetailsData = async () => {
      const data = await axios.get(
        `${BaseUrl}/business/getcatgory/${singlecategory}`
      );
      if(data){
        setLoder(false)
        setServiceDetails(data.data);
      }
    };
    serviceDetailsData();
  }, []);

  return (
    <Box p={{ base: 2, md: 10 }}>
      <Heading color="gray.400" display={"inline-flex"} alignItems="center">
        <Link to={"/"}>
          <MdArrowBackIos />
        </Link>
        {singlecategory}
      </Heading>
      {loader? <Loading /> : ''}
      <SimpleGrid columns={{base:1,md:2}} gap={{base:0,md:5}} p={{ base: 2 }}>
        {serviceDetails && serviceDetails.length >= 1 ? (
          serviceDetails.map((item, index) => (
            loader ? <Loading /> : <CategoryListCard item={item} key={index} />
          ))
        ) : (
          // <Text>No Services</Text>
          loader == false && serviceDetails.length <= 0 && <Box h={'60vh'} display={'flex'} justifyContent='center' alignItems='center'><Heading>Not Available</Heading></Box>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default SingleCategory;
