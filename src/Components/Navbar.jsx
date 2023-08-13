import { Button, Flex, HStack, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      h="56px"
      align="center"
      justify="space-between"

    >
      <Link as={RouterLink} to="/">
        <Heading size={{ base: "md", md: "lg" }}>HandyHelp</Heading>
      </Link>
      <HStack>
        <Button
          colorScheme="twitter"
          as={RouterLink}
          to="/login"
          size={{ base: "sm", md: "md" }}
        >
          Log In
        </Button>
        <Button
          colorScheme="twitter"
          as={RouterLink}
          to="/signup"
          size={{ base: "sm", md: "md" }}
        >
          Sign Up
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
