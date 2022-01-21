import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Goals() {
  return (
    <Box p={20} mt={32}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        m={"0 auto"}
        spacing={{ base: 20, lg: 40 }}
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={"5xl"}>
            Your Goals Matter To Us
          </Text>
          <Text mt={8} fontSize={"2xl"}>
            Learn as you earn
          </Text>
          <Text mt={4} fontSize={"2xl"}>
            We provide the best training for Market & Analysis to grow your
            income.
          </Text>
        </Box>
        <Box>
          <Box
            boxSize={{ base: "400px", lg: "500px" }}
            h={{ base: "30vh", lg: "none" }}
          >
            <Image src="/assest/computer.png" alt="computer" />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Goals;
