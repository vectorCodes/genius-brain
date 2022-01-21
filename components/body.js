import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

function Body() {
  return (
    <Box>
      <Center>
        <Text fontSize={{ base: "3xl", lg: "6xl" }} fontWeight={"thin"}>
          Did We Mention...
        </Text>
      </Center>
      <Box px={{ base: 10, lg: "625px" }} mt={7}>
        <Text fontSize={{ base: "xl", lg: "3xl" }}>
          You can join our free program to learn how to
        </Text>
      </Box>
      <Box px={{ base: 10, lg: "625px" }}>
        <Text fontSize={{ base: "xl", lg: "3xl" }}>
          trade and make money in the FOREX Market
        </Text>
      </Box>
      <Box mt={8} px={{ base: 10, lg: "625px" }}>
        <Text fontSize={{ base: "xl", lg: "3xl" }}>
          Our team hosts bi-weekly webinars and send
        </Text>
      </Box>
      <Box px={{ base: 36, lg: "770px" }}>
        <Text fontSize={{ base: "xl", lg: "3xl" }}>trading signals chat!</Text>
      </Box>
      <Box
        mt={{ base: 16, lg: 28 }}
        px={{ base: 44, lg: "865px" }}
        cursor={"pointer"}
      >
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          JOIN US
        </Text>
      </Box>
    </Box>
  );
}

export default Body;
