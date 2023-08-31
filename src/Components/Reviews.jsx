import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import lady from "../assets/Images/cleaner.png";

const Reviews = ({ customers }) => {
  return (
    <>
      {customers?.map((customer, index) => (
        <Flex key={index} mt={6} align="center" gap={3}>
          <Avatar />
          <Box>
            <Text as="h2" color={'gray.700'} fontWeight='bold' fontSize={{base:'lg'}}>{customer.client.fullname}</Text> 
            <Text>{customer.comment}</Text>
            <i>{new Date(customer.date).toDateString()}</i>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Reviews;
