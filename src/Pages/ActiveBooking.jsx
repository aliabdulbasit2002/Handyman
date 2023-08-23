import React from 'react'
import {Box,Heading} from '@chakra-ui/react'
import Active from '../Components/Active'
import {Link,useNavigate} from 'react-router-dom' 
import {MdArrowBackIos} from 'react-icons/Md'

function ActiveBooking() {
    const navigate = useNavigate()
  return (
    <Box p={{ base: 2, md: 5 }}>
        <Heading color="gray.400" display={'inline-flex'} alignItems='center'><span><MdArrowBackIos onClick={()=>navigate(-1)}/></span>Active Booking</Heading>

        {/* LIST OF ACTIVE BOOKINGS */}
        <Active/>
    </Box>
  )
}

export default ActiveBooking