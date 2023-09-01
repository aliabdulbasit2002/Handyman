import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineCleaningServices, MdVerified, MdStar } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import cleanerImg from "../assets/Images/cleaner.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../api/api";

const ServiceCardDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const serviceDetailsData = async () => {
      const { data } = await axios.get(`${BaseUrl}/business/` + id);
      setServiceDetails(data.data.singleBusiness);
    };

    // FEETCH COMMENTS FOR THIS BUSINESS
    const serviceComments = async () => {
      const { data } = await axios.get(`${BaseUrl}/comments/` + id);
      setComment(data);
      // console.log(data)
    };
    serviceComments();

    serviceDetailsData();
  }, []);

  const {
    businessName,
    isVerified,
    workers,
    category,
    freelancer,
    image,
    comments,
    bio,
    ratings,
  } = serviceDetails;

  return (
    <Box my={10}>
      {/* ServiceCardDetails details */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        // justify={{ md: "space-evenly" }}
        p={5}
        gap={10}
        fontSize={{ base: "18px", md: "unset" }}
        ps={{ base: 4, md: 0 }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "300px", md: "550px" }}
          overflow={"hidden"}
          borderRadius="3xl"
        >
          <Image
            // boxSize="md"

            src={`${BaseUrl}/images/${image}`}
            fallbackSrc="https://via.placeholder.com/700"
            // h={{ base: "400px", md: "550px" }}
            // w={{base:'300px',md:'550px'}}
            // mx={{ md: "auto" }}
            objectFit="cover"
          />
        </Box>
        <Flex
          as={Box}
          flexDir="column"
          justify={{ md: "space-between" }}
          //   gap={5}
          w={{ md: "50%" }}
          // mt={4}
          // pb={5}
        >
          <Heading
            fontSize={{ base: "3xl", md: "6xl" }}
            textTransform={"capitalize"}
          >
            {businessName}
          </Heading>

          <Text
            color="gray.500"
            fontWeight="semibold"
            fontSize={{ base: "3xl" }}
            textTransform="capitalize"
          >
            {freelancer?.firstname} {freelancer?.lastname}
          </Text>
          <Box>
            <Box
              display={"inline-flex"}
              alignItems="center"
              bg={"orange"}
              px={2}
              color="white"
              borderRadius="4"
              mr="3"
            >
              <MdStar /> {ratings}
            </Box>
            <Box textAlign="start" mt={{ base: 0, md: 4 }}>
              <Flex as={Text} align="center" fontSize={{ md: "24px" }} gap={2}>
                <MdOutlineCleaningServices /> {category}
              </Flex>
              <Flex
                as={Text}
                align="center"
                textTransform="capitalize"
                fontSize={{ md: "24px" }}
                gap={2}
              >
                <ImLocation />
                {freelancer?.address?.city}
              </Flex>
              <Flex
                as={Text}
                align="center"
                textTransform="capitalize"
                fontSize={{ md: "24px" }}
                gap={2}
              >
                {isVerified ? <MdVerified color="green" /> : <Icon />}
                {isVerified ? "verified" : "Not Verified"}
              </Flex>
              <Flex as={Text} align="center" fontSize={{ md: "24px" }} gap={2}>
                <BsPerson />
                {workers}
              </Flex>
            </Box>
          </Box>
          {/* ${encodeURIComponent(data)} */}
          <Button
            onClick={() => navigate("/Booking", { state: { serviceDetails } })}
            colorScheme="twitter"
            // mt={{ base: 3, md: 4 }}
            w="200px"
          >
            Book Now
          </Button>
        </Flex>
      </Flex>
      {/* Reviews */}
      <Tabs
        variant="enclosed-colored"
        colorScheme="twitter"
        px={4}
        mt={{ md: 10 }}
      >
        <TabList>
          <Tab _selected={{ color: "white", bg: "twitter.400" }}>
            Customer Reviews
          </Tab>
          <Tab _selected={{ color: "white", bg: "twitter.400" }}>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Reviews customers={comment} />
          </TabPanel>
          <TabPanel>
            <Text>{bio}</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ServiceCardDetails;
