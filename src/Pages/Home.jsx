import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { MdVerified } from "react-icons/md";

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
import axios from "axios";
import BaseUrl from "../api/api";
import Loading from "../Components/Loading";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const businessesData = async () => {
      const { data } = await axios.get(`${BaseUrl}/business`);
      setBusinesses(data);
    };
    businessesData();
  }, []);

  // console.log(businesses);
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
        <Text
          fontWeight={"semibold"}
          fontSize={{ base: 15, md: "30" }}
          ms={6}
          mb={3}
        >
          Browse Services
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          gap={{ base: 2, md: 5 }}
          px={{ base: 2, md: 4 }}
        >
          <Suspense fallback={<Loading />}>
            {businesses.map((business, index) => {
              const { _id, businessName, freelancer, isVerified, image,ratings } =
                business;
              return (
                <ServiceCard
                  id={_id}
                  key={index}
                  img={image}
                  businessName={businessName}
                  location={freelancer.address.city}
                  star="star"
                  isVerified={isVerified ? "verified" : "not verified"}
                  isVerifiedIcon={isVerified}
                  serviceProfile={"business/serviceProfile/" + _id}
                  ratings={ratings}
                />
              );
            })}
          </Suspense>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Home;
