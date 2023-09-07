import { useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useForm } from "react-hook-form";
import BaseUrl from "../api/api";

const Signup = () => {
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

  const handleRegister = async (data) => {
    try {
      const res = await axios.post(`${BaseUrl}/client/newClient`, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate(-2);
    } catch (error) {
      toast({
        description: "Account not created",
        status: "error",
        colorScheme: "red",
        duration: 4000,
      });
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
        <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl mt={3}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              variant="filled"
              id="fullname"
              {...register("fullname", { required: "Fullname is required" })}
            />
            <Text color="red">{errors.fullname?.message}</Text>
          </FormControl>
          <Stack mt={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Phone No.</FormLabel>
              <Input
                type="number"
                variant="filled"
                id="phone"
                {...register("phone", {
                  required: "Phone No. is required",
                  pattern: {
                    value:
                      "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im",
                    message: "Invalid format",
                  },
                })}
              />
              <Text color="red">{errors.phone?.message}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Occupation</FormLabel>
              <Input type="text" variant="filled" {...register("occupation")} />
            </FormControl>
          </Stack>
          <Stack mt={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="test"
                variant="filled"
                id="city"
                {...register("address.city", { required: "City is required" })}
              />
              <Text color="red">{errors.address?.city?.message}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Town</FormLabel>
              <Input
                type="text"
                variant="filled"
                id="town"
                {...register("address.town", { required: "Town is required" })}
              />
              <Text color="red">{errors.address?.town?.message}</Text>
            </FormControl>
          </Stack>
          <FormControl mt={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant="filled"
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
          <FormControl mt={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              variant="filled"
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
