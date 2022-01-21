import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Circle() {
  return (
    <Box
      m={"0 auto"}
      position={"relative"}
      mt={32}
      d={{ base: "none", lg: "block" }}
    >
      <Box
        w={"250px"}
        rounded={"full"}
        bg="gray.300"
        py={28}
        px={12}
        position={"absolute"}
        left={"40%"}
      >
        <Text>New Trading Training</Text>
      </Box>
      <Box
        w={"230px"}
        rounded={"full"}
        bg="gray.300"
        py={"100px"}
        px={12}
        position={"absolute"}
        left={"28%"}
        bottom={"-40%"}
      >
        <Text>Passive Programs</Text>
      </Box>
      <Box
        w={"230px"}
        rounded={"full"}
        bg="gray.300"
        py={"101px"}
        px={10}
        position={"absolute"}
        left={"55%"}
        bottom={"30%"}
      >
        <Text>Inter Trading Center</Text>
      </Box>
    </Box>
  );
}

export default Circle;
