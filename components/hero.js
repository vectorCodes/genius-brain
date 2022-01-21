import {
  Box,
  Center,
  chakra,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        <Box px={{ base: 32, lg: "none" }}>
          <Box boxSize={{ base: "300px", lg: "400px" }}>
            <Image src="/assest/cross.png" alt="cross" />
          </Box>
        </Box>
        <Box>
          <Box px={{ base: 32, lg: 40 }}>
            <Text fontWeight={"bold"} fontSize={{ base: "3xl", lg: "4xl" }}>
              Who Are We ?
            </Text>
          </Box>
          <Text
            mt={{ base: 10, lg: 20 }}
            px={{ base: 14, lg: 20 }}
            fontSize={{ base: "2xl", lg: "3xl" }}
          >
            We are a Top Tier Trading Group
          </Text>

          <Box>
            <Text
              mt={6}
              fontSize={{ base: "xl", lg: "3xl" }}
              px={{ base: 12, lg: 2 }}
            >
              We invite new traders to the $2.4 qua-Trillion Forex Market & show
              them the ways to{" "}
              <chakra.span
                fontSize={{ base: "xl", lg: "none" }}
                d={{ base: "column", lg: "none" }}
              >
                access endless possibilities.
              </chakra.span>
            </Text>
          </Box>
          <Box fontSize={"3xl"} px={20} d={{ base: "none", lg: "flex" }}>
            <Text>access endless possibilities</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Hero;
