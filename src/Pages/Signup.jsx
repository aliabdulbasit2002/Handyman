import { useState } from "react";
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signup = () => {
  const [registerUser, setRegisterUser] = useState({
    fullname: "",
    phone: "",
    occupation: "",
    email: "",
    address: {
      city: "accra",
      town: "madina",
    },
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await axios.post(
        "http://localhost:3001/client/newClient",
        registerUser
      );
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
      navigate("/");
      // console.log(registerUser);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <form onSubmit={handleRegister}>
          <FormControl mt={3}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              variant="filled"
              name="fullname"
              onChange={handleChange}
            />
          </FormControl>
          <Stack mt={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Phone No.</FormLabel>
              <Input
                type="number"
                variant="filled"
                name="phone"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Occupation</FormLabel>
              <Input
                type="text"
                variant="filled"
                name="occupation"
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <Stack mt={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="test"
                variant="filled"
                name="registerUser.address.city"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Town</FormLabel>
              <Input
                type="text"
                variant="filled"
                name="registerUser.address.town"
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <FormControl mt={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant="filled"
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              variant="filled"
              name="password"
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="twitter"
            mt={6}
            w="full"
            isLoading={isLoading}
          >
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
