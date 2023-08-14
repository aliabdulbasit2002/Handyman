import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import lady from "../assets/Images/cleaner.png";

const customers = [
  {
    name: "sam",
    message: "Good services, i like her work",
  },
  {
    name: "sam",
    message: "Good services, i like her work",
  },
  {
    name: "sam",
    message: "Good services, i like her work",
  },
];

const Reviews = () => {
  return (
    <>
      {customers.map((customer, index) => (
        <Flex key={index} mt={6}>
          <Image src={lady} boxSize="100px" objectFit="cover" />
          <Box>
            <Heading as="h4">{customer.name}</Heading>
            <Text>{customer.message}</Text>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Reviews;
