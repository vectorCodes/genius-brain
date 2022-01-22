import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Circle() {
  return (
    <Box pb={24}>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        d={{ base: "block", md: "none", lg: "none" }}
        maxW={"6xl"}
        position={"relative"}
        mt={24}
      >
        <Box
          w={"200px"}
          p={16}
          bg={"gray.300"}
          rounded={"full"}
          position={"absolute"}
          left={"3%"}
        >
          <Text textAlign={"center"} fontSize={"sm"}>
            New trading training
          </Text>
        </Box>
        <Box
          w={"182px"}
          p={16}
          bg={"gray.300"}
          rounded={"full"}
          position={"absolute"}
          left={"33%"}
          bottom={"-10%"}
        >
          <Text textAlign={"center"} fontSize={"sm"}>
            Passive Program
          </Text>
        </Box>
        <Box
          w={"220px"}
          p={20}
          bg={"gray.300"}
          rounded={"full"}
          position={"absolute"}
          left={"50%"}
        >
          <Text textAlign={"center"} fontSize={"sm"}>
            Intern trading Friendly
          </Text>
        </Box>
      </SimpleGrid>
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
    </Box>
  );
}

export default Circle;
