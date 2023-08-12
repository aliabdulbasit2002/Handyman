import React, { useRef, useState } from "react";
import { Box, Container, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import ServiceCard from "../Components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/Images/banner1.jpg";
import banner2 from "../assets/Images/banner2.jpg";
import banner3 from "../assets/Images/banner3.jpg";

// FREELANCER IMAGES
import cleanerImg from "../assets/Images/cleaner.png";
import mechanicman from "../assets/Images/mechanicman.jpg";
import plumber2 from "../assets/Images/plumber2.jpg";
import hairwoman from "../assets/Images/hairwoman.jpg";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <Box overflow={"hidden"} p={{ base: 2, md: 10 }} rounded={"xl"}>
        <Swiper
          className="mySwiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Hero img={banner1} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero img={banner2} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero img={banner3} />
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* CATERGORIES SECTION */}
      <Box
        w={"100%"}
        bg={"gray.100"}
        px={{ base: 5, md: 10 }}
        py={{ base: 2, md: 4 }}
      >
        <Categories />
      </Box>

      {/* SERVICES */}
      <Box w={"100%"} py={5} px={{ base: 2, md: 0 }}>
        <Text fontWeight={"semibold"} fontSize={{ base: 15, md: "30" }}>
          Browse Services
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          gap={{ base: 2, md: 5 }}
        >
          <ServiceCard
            title={"Cleaner"}
            location={"Spintex comm18"}
            img={cleanerImg}
          />
          <ServiceCard
            title={"Mechanic"}
            location={"Spintex comm18"}
            img={mechanicman}
          />
          <ServiceCard
            title={"Plumber"}
            location={"Spintex comm18"}
            img={plumber2}
          />
          <ServiceCard
            title={"Hairdresser"}
            location={"Spintex comm18"}
            img={hairwoman}
          />
          <ServiceCard
            title={"Hairdresser"}
            location={"Spintex comm18"}
            img={hairwoman}
          />
          <ServiceCard
            title={"Plumber"}
            location={"Spintex comm18"}
            img={plumber2}
          />
          <ServiceCard
            title={"Cleaner"}
            location={"Spintex comm18"}
            img={cleanerImg}
          />
          <ServiceCard
            title={"Mechanic"}
            location={"Spintex comm18"}
            img={mechanicman}
          />
          
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Home;
