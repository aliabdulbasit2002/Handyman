import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <Container maxW="1446px" px={0}>
      <Container maxW="container" px={0}>
        <Navbar />
      </Container>
      <Container maxW="container.xl" px={0}>
        <Outlet />
      </Container>
    </Container>
  );
};

export default RootLayout;
