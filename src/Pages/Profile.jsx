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
import { MdOutlineCleaningServices, MdVerified } from "react-icons/Md";
import { ImLocation } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import cleanerImg from "../assets/Images/cleaner.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";

const Profile = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
      {/* Profile details */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify={{ md: "space-evenly" }}
        p={5}
        fontSize={{ base: "18px", md: "unset" }}
        ps={{ base: 10, md: 0 }}
      >
        <Box w={{ base: "100%", md: "50%" }}>
          <Image
            src={cleanerImg}
            h={{ base: "400px", md: "550px" }}
            mx={{ md: "auto" }}
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
            Ruth cleaning services
          </Heading>
          <Box>
            <Text
              color="gray.500"
              fontWeight="bold"
              fontSize={{ base: "x-large" }}
            >
              Ruth Andrea
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
                <MdOutlineCleaningServices /> Cleaning
              </Flex>
              <Flex as={Text} align="center" fontSize={{ md: "24px" }} gap={2}>
                <ImLocation />
                Dansoman Banana Inn
              </Flex>
              <Flex as={Text} align="center" fontSize={{ md: "24px" }} gap={2}>
                <MdVerified color="green" />
                Verified
              </Flex>
              <Flex as={Text} align="center" fontSize={{ md: "24px" }} gap={2}>
                <BsPerson />5
              </Flex>
            </Box>
          </Box>
          <Button
            onClick={() => navigate("/Booking")}
            colorScheme="green"
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
        colorScheme="green"
        px={10}
        mt={{ md: 10 }}
      >
        <TabList>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Customer Reviews
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Reviews />
          </TabPanel>
          <TabPanel>{/* PRofile Here */}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;
