import {
  Box,
  Center,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Deals() {
  return (
    <Box>
      <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "3xl", lg: "5xl" }}
      >
        Deals
      </Text>
      <SimpleGrid columns={{ base: 1, lg: 3 }} maxW={"6xl"} m={"0 auto"}>
        <VStack mt={{ base: 8, lg: 12 }}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              PREMIUM PROGRAM
            </Text>
          </Box>
          <Box mt={{ base: 4, lg: 10 }}>
            <Text>Starting ar $140 /mo</Text>
            <UnorderedList mt={{ base: 2, lg: 4 }}>
              <ListItem>Webinars</ListItem>
              <ListItem>Daily Tracking Signals</ListItem>
              <ListItem>Tips</ListItem>
              <ListItem>Analysis</ListItem>
              <ListItem>Chat With Our Team</ListItem>
              <ListItem>Start a Demo Account</ListItem>
              <ListItem>Lifetime Mentorship</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
        <VStack mt={{ base: 12, lg: 12 }}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              FREE PROGRAM
            </Text>
          </Box>
          <Box mt={{ base: 4, lg: 10 }}>
            <UnorderedList mt={{ base: 2, lg: 4 }}>
              <ListItem>Webinars</ListItem>
              <ListItem>Tracking Signals</ListItem>
              <ListItem>Tips + Learning</ListItem>
              <Text textAlign={"center"}>Experience</Text>
            </UnorderedList>
          </Box>
        </VStack>
        <VStack mt={{ base: 12, lg: 12 }}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              PREMIUM PROGRAM(2)
            </Text>
          </Box>
          <Box mt={{ base: 4, lg: 10 }}>
            <Text>Starting ar $160 /mo</Text>
            <UnorderedList mt={{ base: 2, lg: 4 }}>
              <ListItem>Risk Management</ListItem>
              <ListItem>30% Profit Split</ListItem>
              <ListItem>Bot Assistant</ListItem>
              <ListItem>Tradin Experts</ListItem>
              <ListItem>Channels</ListItem>
              <ListItem>Mentorships</ListItem>
              <ListItem>Analysis</ListItem>
              <ListItem>Signals</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </SimpleGrid>
      <Box mt={{ base: 10, lg: 32 }}>
        <Center>
          <Text fontWeight={"bold"} fontSize={{ base: "2xl", lg: "4xl" }}>
            BOTH PROGRAMS
          </Text>
        </Center>
        <Center mt={{ base: 2, lg: 5 }}>
          <Text>Starting at $130 /mo</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Deals;
