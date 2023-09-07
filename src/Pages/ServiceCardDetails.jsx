import {
  AspectRatio,
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
import { MdOutlineCleaningServices, MdVerified, MdStar,MdCategory ,MdVerifiedUser} from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import cleanerImg from "../assets/Images/cleaner.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../api/api";
import Loading from "../Components/Loading";

const ServiceCardDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [comment, setComment] = useState([]);
  const [loader,setLoder] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const serviceDetailsData = async () => {
      const { data } = await axios.get(`${BaseUrl}/business/` + id);
      if(data){
        setLoder(false)
        setServiceDetails(data.data.singleBusiness);
      }
    };

    // FEETCH COMMENTS FOR THIS BUSINESS
    const serviceComments = async () => {
      const { data } = await axios.get(`${BaseUrl}/comments/` + id);
      if(data){
        setLoder(false)
        setComment(data);
      }
      // console.log(data)
    };
    serviceComments();

    serviceDetailsData();
  }, [serviceDetails]);

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
    <Box my={{base:5,md:10}}>
      {/* ServiceCardDetails details */}
      {loader? <Loading /> :
      <Suspense fallback={<Loading />}>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          p={{base:3,md:5}}
          gap={{base:1,md:5}}
          fontSize={{ base: "18px", md: "unset" }}
        >
          <Box
            overflow="hidden"
            borderRadius="xl"
            bg="red"
            w={{ base: "auto", md: "400px" }}
          >
            <Image
              src={`${BaseUrl}/images/${image}`}
              fallbackSrc="https://via.placeholder.com/400"
              h="100%"
              w="100%"
              objectFit="cover"
            />
          </Box>
          <Flex as={Box} flexDir="column">
            <Heading fontSize={{base:'3xl',md:"4xl"}} textTransform={"capitalize"}>
              {businessName}
            </Heading>

            <Text
              color="gray.500"
              fontWeight="normal"
              fontSize={{ base: "xl" }}
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
                my="3"
              >
                <MdStar /> {ratings}
              </Box>


              <Box display={{base:'flex',md:'block'}} gap={{base:5,md:'none'}} textAlign="start" mb={{ base: 3, md: 4 }}>
                <Flex
                  as={Text}
                  align="center"
                  fontSize={{ md: "24px" }}
                  gap={{base:0,md:2}}
                >
                  <MdCategory /> {category}
                </Flex>
                <Flex
                  as={Text}
                  align="center"
                  textTransform="capitalize"
                  fontSize={{base:'18px', md: "24px" }}
                  gap={{base:0,md:2}}
                >
                  <ImLocation />
                  {freelancer?.address?.city}
                </Flex>
                <Flex
                  as={Text}
                  align="center"
                  textTransform="capitalize"
                  fontSize={{ md: "24px" }}
                  gap={{base:0,md:2}}
                >
                  {isVerified ? <MdVerifiedUser color="green" /> : <Icon />}
                  {isVerified ? "verified" : "Not Verified"}
                </Flex>
                <Flex
                  as={Text}
                  align="center"
                  fontSize={{ md: "24px" }}
                  gap={{base:0,md:2}}
                >
                  <BsPerson />
                  {workers}
                </Flex>
              </Box>
            </Box>
            {/* ${encodeURIComponent(data)} */}
            <Button
              onClick={() =>
                navigate("/Booking", { state: { serviceDetails } })
              }
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
          px={3}
          mt={{ md: 10 }}
        >
          <TabList>
            <Tab _selected={{ color: "black", bg: "twitter.100" }}>
              Customer Reviews
            </Tab>
            <Tab _selected={{ color: "black", bg: "twitter.100" }}>Profile</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {comment.length <=0 ? 'No Comments': <Reviews customers={comment} />}
            </TabPanel>
            <TabPanel>
              <Text>{bio}</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Suspense>
    }
    </Box>
  );
};

export default ServiceCardDetails;
