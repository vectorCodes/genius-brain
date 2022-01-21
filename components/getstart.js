import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";

function Getstart() {
  return (
    <Box py={{ base: 24, lg: 40 }}>
      <Center>
        <Button colorScheme={"yellow"} w={{ base: 40, lg: 56 }}>
          Get Started
        </Button>
      </Center>
    </Box>
  );
}

export default Getstart;
