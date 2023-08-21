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

const Userprofile = () => {
  return (
    <Box p={4}>
      <Box height="200px" bg="gray.400" pos="relative">
        <Avatar
          src={lady}
          boxSize="100px"
          objectFit="cover"
          pos="absolute"
          bottom={-50}
          left={50}
        />
      </Box>
      <Stack mt={70} direction={{ base: "column", md: "row" }}>
        <DetailsCard
          fullname="Mary Roland"
          email="maryroland@email.com"
          address="mary street 24"
          tel="023864728"
        />
        <Deposit balance="400" />
      </Stack>
    </Box>
  );
};

const Deposit = ({ balance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={7} shadow="md" flex={1} maxW="500px" textAlign="center">
      <Text fontWeight="bold" color="gray.700">
        Balance
      </Text>
      <Text fontSize="3xl" fontWeight="extrabold" color="gray.400">
        GH {balance}
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
          <form>
            <ModalBody as={VStack}>
              <Input variant="filled" placeholder="phone number" />
              <Input variant="filled" placeholder="amount" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="twitter" w="full" onClick={onClose}>
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
