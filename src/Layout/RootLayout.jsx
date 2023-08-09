import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <Container maxW="container.xl" px={0}>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
