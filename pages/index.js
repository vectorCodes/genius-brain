import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Body from "../components/body";
import Circle from "../components/circle";
import Deals from "../components/deals";
import Getstart from "../components/getstart";
import Goals from "../components/goals";
import Hero from "../components/hero";
import Othercontent from "../components/othercontent";

export default function Home() {
  return (
    <Box>
      <Box p={{ base: 10, lg: 20 }} h={"100vh"}>
        <HStack spacing={{ base: 8, lg: 4 }}>
          <Box boxSize={{ base: "40px", lg: "80px" }} cursor={"pointer"}>
            <Image src="/assest/brain.png" alt="head" />
          </Box>
          <Box cursor={"pointer"}>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              GeniusBrain
            </Text>
          </Box>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          mt={{ base: 4, lg: 12 }}
          spacing={{ base: 8, lg: 16 }}
          h={{ base: "75vh", lg: "60vh", xl: "50vh" }}
        >
          <Box>
            <Text
              fontSize={{ base: "5xl", md: "5xl", lg: "7xl" }}
              fontWeight={"thin"}
            >
              Market Signals
            </Text>
            <Text
              fontSize={{ base: "5xl", md: "7xl", lg: "7xl" }}
              fontWeight={"bold"}
            >
              Leads to Positive returns
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Box boxSize={{ base: "400px", md: "500px", lg: "600px" }}>
              <Image src="/assest/meeting.png" alt="meeting" />
            </Box>
          </Box>
        </SimpleGrid>
        <HStack spacing={8}>
          <Box bg="#E0E2E0" rounded={"full"} py={4} px={8} cursor={"pointer"}>
            <Text fontWeight={"bold"}>Join Us!</Text>
          </Box>
          <Box bg="#EEEFEE" rounded={"full"} py={4} px={8} cursor={"pointer"}>
            <Text fontWeight={"thin"}>Learn More</Text>
          </Box>
        </HStack>
      </Box>
      <Box pb={{ base: 44, lg: 56 }} mt={{ base: 12, lg: "none" }}>
        <Hero />
      </Box>
      <Box pb={{ base: 10, lg: 64 }}>
        <Circle />
      </Box>
      <Box pb={{ base: 10, lg: 52 }}>
        <Goals />
      </Box>
      <Box pb={{ base: 16, lg: 52 }}>
        <Othercontent />
      </Box>
      <Box pb={{ base: 16, lg: 52 }}>
        <Body />
      </Box>
      <Box pb={{ base: 16, lg: 52 }}>
        <Deals />
      </Box>
      <Box>
        <Getstart />
      </Box>
    </Box>
  );
}
