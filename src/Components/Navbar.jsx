import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from '../assets/Images/hh.png'

const Navbar = () => {
  const activeUser = localStorage.getItem("user");
  const currentUser = JSON.parse(activeUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Flex h="56px" align="center" justify="space-between">
      <Link as={RouterLink} _hover={{ textDecor: "none" }} to="/">
        {/* <Heading size={{ base: "md", md: "lg" }}>HandyHelp</Heading> */}
        <Image src={logo} w={20}/>
      </Link>
      {currentUser ? (
        <HStack>
          <Text>{currentUser?.email}</Text>

          <Menu>
            <MenuButton as={Avatar} size="sm" cursor="pointer" />
            <MenuList zIndex={100}>
              <MenuItem
                as={RouterLink}
                to="/userprofile"
                _hover={{ textDecor: "none" }}
              >
                <Text as="span" ms={4}>
                  Profile
                </Text>
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/ActiveBooking"
                _hover={{ textDecor: "none" }}
              >
                <Text as="span" ms={4}>
                  Active Bookings
                </Text>
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/allbookings"
                _hover={{ textDecor: "none" }}
              >
                <Text as="span" ms={4}>
                  All Bookings
                </Text>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <Text ms={4} color="red" size={{ base: "sm", md: "md" }}>
                  Log out
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
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
