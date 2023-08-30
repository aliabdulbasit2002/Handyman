import { Box, Heading,Text } from "@chakra-ui/react";
import React,{useEffect,useState} from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";
import plumber2 from "../assets/Images/plumber2.jpg";
import CategoryListCard from "../Components/CategoryListCard";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function SingleCategory() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { singlecategory } = useParams();
  console.log(singlecategory)
  const navigate = useNavigate();

  useEffect(() => {
    const serviceDetailsData = async () => {
      const  data  = await axios.get(`http://localhost:3001/business/getcatgory/${singlecategory}`);
      setServiceDetails(data.data);
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
      <Box p={{ base: 2 }}>
        {
          serviceDetails && serviceDetails.length >= 1 ? (
            serviceDetails.map((item,index)=>(
              <CategoryListCard item={item} key={index}/>
            ))

          ):(
            <Text>No Category</Text>
          )
        }
        
      </Box>
    </Box>
  );
}

export default SingleCategory;
