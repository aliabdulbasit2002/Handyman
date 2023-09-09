import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import lady from "../assets/Images/cleaner.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BaseUrl from "../api/api";

const Userprofile = () => {
  const activeUser = localStorage.getItem("user");
  const currentUser = JSON.parse(activeUser);
  const { fullname, email, balance, address, _id } = currentUser;

  return (
    <Box p={4}>
      <Box height="200px" bg="gray.400" pos="relative">
        <Avatar
          boxSize="100px"
          objectFit="cover"
          pos="absolute"
          bottom={-50}
          left={50}
        />
      </Box>
      <Stack mt={70} direction={{ base: "column", md: "row" }}>
        <DetailsCard
          fullname={fullname}
          email={email}
          address={address?.town}
          tel="023864728"
        />
        <Deposit balance={balance} />
      </Stack>
    </Box>
  );
};

const Deposit = () => {
  const activeUser = localStorage.getItem("user");
  const currentUser = JSON.parse(activeUser);
  const { _id } = currentUser;

  const [userBal, setUserBal] = useState(0);

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.patch(
        `${BaseUrl}/client/addBalance/${_id}`,
        data
      );
      // console.log(res.data);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    const fetctBal = async () => {
      const { data } = await axios.get(`${BaseUrl}/client/singleClient/${_id}`);
      setUserBal(data.balance);
    };

    fetctBal();
  }, [isSubmitSuccessful, reset, userBal]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={7} shadow="md" flex={1} maxW="500px" textAlign="center">
      <Text fontWeight="bold" color="gray.700">
        Balance
      </Text>
      <Text fontSize="3xl" fontWeight="extrabold" color="gray.400">
        GH {userBal}
      </Text>
      <Button onClick={onOpen} colorScheme="twitter" w="full" mt={3}>
        Deposit
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent mx={5}>
          <ModalHeader textAlign="center" fontWeight="bold" color="gray.600">
            Deposit Funds
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody as={VStack}>
              <Input
                variant="filled"
                placeholder="phone number"
                {...register("phone", { required: "Phone no. is required" })}
              />
              <Text color="red">{errors.phone?.message}</Text>
              <Input
                variant="filled"
                placeholder="amount"
                {...register("amount", { required: "Please enter an amount" })}
              />
              <Text color="red">{errors.amount?.message}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="twitter"
                w="full"
                type="submit"
                isLoading={isSubmitting}
              >
                Pay Now
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const DetailsCard = ({ fullname, email, address, tel }) => {
  return (
    <Box shadow="md" ps={4} p={2} flex={1} maxW="500px">
      <Text my={2}>{fullname}</Text>
      <Divider />
      <Text my={2}>{email}</Text>
      <Divider />
      <Text my={2}>{address}</Text>
      <Divider />
      <Text my={2}>{tel}</Text>
    </Box>
  );
};

export default Userprofile;
