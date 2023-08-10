import React from 'react'
import {Text,Box,Image,Flex,Spacer} from '@chakra-ui/react'
import cleanerImg from '../assets/Images/cleaner.png'

function ServiceCard() {
  return (
    <Box shadow={'md'}  position={'relative'} overflow={'hidden'} rounded={10}>
      <Image src={cleanerImg}/>
      <Box position={'absolute'} bottom={0} p={4} w={'100%'} backdropFilter='auto' backdropBlur='80px' color={'gray.800'}>
        <Flex alignItems={'center'}>
          <Text fontWeight={'semibold'} fontSize={19}>Cleaner</Text>
          <Spacer/>
          <small>View Profile</small>
        </Flex>

        <Box>
          <small>Spintex comm18</small>

        </Box>

      </Box>
      
    </Box>
  )
}

export default ServiceCard