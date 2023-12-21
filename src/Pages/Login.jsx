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
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import BaseUrl from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(`${BaseUrl}/client/login`, data);

      if (res.data.status == 404) {
        toast({
          description: res.data.msg,
          status: "error",
          colorScheme: "red",
          duration: 2500,
          isClosable: true,
        });
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data.loginUser));
        navigate(-1);
      }
    } catch (error) {
      toast({
        description: "Failed, Please try again!",
        status: "error",
        colorScheme: "red",
        duration: 2500,
        isClosable: true,
      });
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
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant="filled"
              name="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                  message: "Invalid email format",
                },
              })}
            />
            <Text color="red">{errors.email?.message}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              variant="filled"
              name="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            <Text color="red">{errors.password?.message}</Text>
          </FormControl>
          <Button
            type="submit"
            colorScheme="twitter"
            mt={6}
            w="full"
            isLoading={isSubmitting}
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
