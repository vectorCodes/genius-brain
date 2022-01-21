import React from "react";
import { Box, Center, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
function Othercontent() {
  return (
    <Box>
      <Center>
        <Text fontSize={{ base: "3xl", lg: "5xl" }}>Overwhelmed by the</Text>
      </Center>
      <Center>
        <Text fontSize={{ base: "3xl", lg: "5xl" }}>Stock Market?</Text>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        maxW={"7xl"}
        m={"0 auto"}
        spacing={4}
        mt={{ base: 12, lg: 24 }}
      >
        <VStack spacing={8}>
          <Box mt={8}>
            <Image
              w={{ base: "240px", lg: "300px" }}
              src="/assest/book.png"
              alt="book"
              cursor={"pointer"}
            />
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"2xl"}
              textAlign={"center"}
              maxW={{ base: 56, lg: "md" }}
            >
              LEARN TO TRADE CORRECTLY
            </Text>
            <Text
              textAlign={"center"}
              maxW={{ base: 56, lg: "xl" }}
              px={{ base: "none", lg: 24 }}
            >
              you&apos;re able to open a demo account, before you&apos;re ready
              to start trading
            </Text>
          </Box>
        </VStack>
        <VStack spacing={10} mt={{ base: 6, lg: "none" }}>
          <Box>
            <Image
              w={{ base: "250px", lg: "300px" }}
              src="/assest/right.png"
              alt="right"
              cursor={"pointer"}
            />
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"2xl"}
              textAlign={"center"}
              maxW={{ base: "xl", lg: "md" }}
              px={{ base: 28, lg: 0 }}
            >
              RISK MANAGEMENT
            </Text>
            <Text
              textAlign={"center"}
              maxW={{ base: "xl", lg: "xl" }}
              px={{ base: 20, lg: "100px" }}
            >
              proper money management to enter the market confidently
            </Text>
          </Box>
        </VStack>
        <VStack mt={{ base: 6, lg: "none" }} spacing={8}>
          <Box>
            <Image
              w={{ base: "280px", lg: "300px" }}
              src="/assest/star.png"
              alt="star"
              cursor={"pointer"}
            />
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"2xl"}
              textAlign={"center"}
              maxW={{ base: 64, lg: "md" }}
            >
              GUARANTEED
            </Text>

            <Text textAlign={"center"} maxW={{ base: 64, lg: 64 }}>
              Nobody can predict the stock market.However when you trade with
              us, you are guaranteed to win 80%
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default Othercontent;
