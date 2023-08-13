import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <>
      
      <Container  maxW="xxl"   shadow="md" px={0}>

        <Container maxW="container.xl">
          <Navbar />
        </Container>
      </Container>
  
        <Container maxW="container.xl" px={0}>
          <Outlet />
        </Container>
    </>
  );
};

export default RootLayout;
