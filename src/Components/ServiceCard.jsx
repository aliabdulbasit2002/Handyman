import React from 'react'
import {Text,Box,Image,Flex,Spacer} from '@chakra-ui/react'
import {MdLocationOn,MdStar} from 'react-icons/Md'

function ServiceCard({title,location,img}) {
  return (
    <Box shadow={'md'}  position={'relative'} overflow={'hidden'} rounded={10} >
      <Box w="100%" >
        <Image src={img} w="100%" h={{base:"250px",md:"300px"}}   objectFit={{base:'cover'}}/>
      </Box>

      <Box bg={'white'} p={{base:2}} w={'100%'} >
        <Flex alignItems={'center'} flexWrap={'wrap'}>
          <Text fontWeight={'semibold'} fontSize={{base:14,md:19}} color='blue.400'>{title}</Text>
          <Spacer/>
          
          <small>View Profile</small>
          
        </Flex>

        <Box p={'0px'} color={'gray.800'}>
          <Text fontSize={{base:13,md:15}} display={'inline-flex'} alignItems={'center'} ><MdLocationOn/><i>{location}</i></Text>
          <Box p={'2px'} display={'flex'} color={'orange.400'}>
            <MdStar/>
            <MdStar/>
            <MdStar/>
            <MdStar/>
            <MdStar/>
          </Box>

        </Box>

      </Box>
      
    </Box>
  )
}

export default ServiceCard