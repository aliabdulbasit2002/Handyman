import {Box,Container,Text,SimpleGrid} from '@chakra-ui/react'
import Hero from '../Components/Hero';
import Categories from '../Components/Categories';
import ServiceCard from '../Components/ServiceCard';


const Home = () => {
  return(
    <div>

      {/* HERO SECTION */}
      <Container maxW='container.xl'>
        <Hero/>
      </Container>

      {/* CATERGORIES SECTION */}
      <Box w={'100%'} bg={'gray.200'} px={{base:5,md:10}} py={{base:2,md:5}}>
        <Categories/>
      </Box>


      {/* SERVICES */}
      <Box w={'100%'} py={5} px={{base:2,md:0}}>
        <Text fontWeight={"semibold"} fontSize={{ base: 15, md: "30" }}>Browse Services</Text>
        <SimpleGrid columns={{base:2,md:3,lg:4}} gap={5}>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </SimpleGrid>


      </Box>
    </div>
  )
};

export default Home;
