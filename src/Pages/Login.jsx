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
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorCredentials, setIsErrorCredentials] = useState("");
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // If there is no values in the input
    if (!loginUser.email || !loginUser.password) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    }
    try {
      setIsLoading(true);
      const data = await axios.post(
        "http://localhost:3001/client/login",
        loginUser
      );
      // console.log(data.data.msg);
      if (data.data.status == 404) {
        // console.log(data.data.msg);
        setIsErrorCredentials(data.data.msg);
      } else {
        localStorage.setItem("user", JSON.stringify(data.data.loginUser));
        console.log();

        setTimeout(() => {
          setIsErrorCredentials(false);
        }, 3000);
      }

      setIsLoading(false);
      navigate(-1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Center minH="calc(100vh - 56px)">
      <Box
        w={{ base: "90%", md: "500px" }}
        my={{ base: "20px", md: 0 }}
        p={{ base: "30px", md: 10 }}
        shadow="lg"
        borderRadius="lg"
        bg="white"
      >
        <Heading textAlign="center" mb={4}>
          Log In
        </Heading>
        <form onSubmit={handleLogin}>
          {isError && (
            <Text color="red.400" fontWeight="bold">
              Enter email and password
            </Text>
          )}
          {isErrorCredentials && (
            <Text color="red.400" fontWeight="bold">
              Wrong email or password
            </Text>
          )}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant="filled"
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
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
            disabled={!loginUser.email || !loginUser.password}
          >
            Log In
          </Button>
        </form>
        <HStack mt={2} align="center">
          <Text as="span" fontSize="sm">
            Don't have an Account ?
          </Text>
          <Link
            as={RouterLink}
            to="/signup"
            color="gray.500"
            fontWeight="semibold"
          >
            <Text>Register</Text>
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

export default Login;
