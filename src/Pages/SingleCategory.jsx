import { Box ,Heading} from '@chakra-ui/react'
import React from 'react'
import {MdArrowBackIos} from 'react-icons/Md'
import { Link,useParams } from 'react-router-dom'
import BookCard from '../Components/BookCard'
import plumber2 from "../assets/Images/plumber2.jpg";


function SingleCategory() {
    const {singlecategory }= useParams()
  return (
    <Box p={{base:2,md:10}}>
        <Heading color="gray.400" display={'inline-flex'} alignItems='center'><Link to={'/'}><MdArrowBackIos/></Link>Plumbers</Heading>
        <Box p={{ base: 2 }}>
         <BookCard img={plumber2}/>
         <BookCard img={plumber2}/>
         <BookCard img={plumber2}/>
         <BookCard img={plumber2}/>
         <BookCard img={plumber2}/>

        </Box>
    </Box>
  )
}

export default SingleCategory