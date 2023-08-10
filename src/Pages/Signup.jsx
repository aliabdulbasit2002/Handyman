import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <Center minH="calc(100vh - 56px)" px={{ base: 2, md: 0 }}>
      <Box
        w={{ base: "90%", md: "600px" }}
        my={{ base: "20px", md: 0 }}
        p={{ base: "30px", md: 12 }}
        shadow="lg"
        borderRadius="lg"
        bg="white"
      >
        <Heading textAlign="center" mb={4}>
          Register
        </Heading>
        <form>
          <Stack mt={4} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" variant="filled" name="firstName" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" variant="filled" name="lastName" />
            </FormControl>
          </Stack>
          <FormControl mt={3}>
            <FormLabel>Email</FormLabel>
            <Input type="email" variant="filled" name="email" />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Password</FormLabel>
            <Input type="password" variant="filled" name="password" />
          </FormControl>
          <Button type="submit" colorScheme="twitter" mt={6} w="full">
            Register
          </Button>
        </form>
        <HStack mt={2} align="center">
          <Text as="span" fontSize="sm">
            Don't have an Account ?
          </Text>
          <Link
            as={RouterLink}
            to="/login"
            color="gray.500"
            fontWeight="semibold"
          >
            <Text>Log In</Text>
          </Link>
        </HStack>
        <Box position="relative" my={10}>
          <Divider bg="gray.500" py="0.3" />
          <AbsoluteCenter bg="white" px="3">
            <Text fontWeight="bold" color="gray.400">
              OR
            </Text>
          </AbsoluteCenter>
        </Box>
        {/* Log-in with Google */}
        <Button leftIcon={<FcGoogle />} variant="solid" w="full">
          GOOGLE
        </Button>
      </Box>
    </Center>
  );
};

export default Signup;
