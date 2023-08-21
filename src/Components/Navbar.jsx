import { Button, Flex, HStack, Heading, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const activeUser = localStorage.getItem("user");
  const currentUser = JSON.parse(activeUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("user", null);
    navigate("/");
  };

  return (
    <Flex h="56px" align="center" justify="space-between">
      <Link as={RouterLink} to="/">
        <Heading size={{ base: "md", md: "lg" }}>HandyHelp</Heading>
      </Link>
      {currentUser ? (
        <Button
          colorScheme="twitter"
          size={{ base: "sm", md: "md" }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      ) : (
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
      )}
    </Flex>
  );
};

export default Navbar;
