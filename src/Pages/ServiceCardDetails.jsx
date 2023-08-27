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
import { MdOutlineCleaningServices, MdVerified } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import cleanerImg from "../assets/Images/cleaner.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";
import { useEffect, useState } from "react";
import axios from "axios";

const ServiceCardDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const serviceDetailsData = async () => {
      const { data } = await axios.get("http://localhost:3001/business/" + id);
      // console.log(data.data);
      setServiceDetails(data.data.singleBusiness);
    };
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
  } = serviceDetails;

  console.log(comments);
  return (
    <Box mb={6}>
      {/* ServiceCardDetails details */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify={{ md: "space-evenly" }}
        p={5}
        fontSize={{ base: "18px", md: "unset" }}
        ps={{ base: 4, md: 0 }}
      >
        <Box w={{ base: "100%", md: "50%" }}>
          <Image
            boxSize="md"
            borderRadius="3xl"
            src={`http://localhost:3001/images/${image}`}
            fallbackSrc="https://via.placeholder.com/150"
            h={{ base: "400px", md: "550px" }}
            mx={{ md: "auto" }}
            objectFit="contain"
          />
        </Box>
        <Flex
          as={Box}
          flexDir="column"
          justify={{ md: "space-evenly" }}
          //   gap={5}
          w={{ md: "50%" }}
          mt={4}
          pb={5}
        >
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>
            {businessName}
          </Heading>
          <Box>
            <Text
              color="gray.500"
              fontWeight="bold"
              fontSize={{ base: "x-large" }}
              textTransform="capitalize"
            >
              {freelancer?.firstname} {freelancer?.lastname}
            </Text>
            <HStack>
              <Icon
                as={AiTwotoneStar}
                boxSize={{ md: "28px" }}
                color="yellow.600"
              />
              <Icon
                as={AiTwotoneStar}
                boxSize={{ md: "28px" }}
                color="yellow.600"
              />
              <Icon
                as={AiTwotoneStar}
                boxSize={{ md: "28px" }}
                color="yellow.600"
              />
              <Icon
                as={AiTwotoneStar}
                boxSize={{ md: "28px" }}
                color="yellow.600"
              />
            </HStack>
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
            mt={{ base: 3, md: 4 }}
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
            <Reviews customers={comments} />
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
