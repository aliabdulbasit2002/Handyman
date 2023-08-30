import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import lady from "../assets/Images/cleaner.png";

const Reviews = ({ customers }) => {
  return (
    <>
      {customers?.map((customer, index) => (
        <Flex key={index} mt={6} align="center" gap={3}>
          <Avatar />
          <Box>
            <Heading as="h4">User</Heading>
            <Text>{customer.comment}</Text>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Reviews;
