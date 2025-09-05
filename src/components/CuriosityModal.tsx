import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import React from "react";

const CuriosityModal = () => {
  return (
    <>
      <Box
        p={{ base: 3, lg: 7 }}
        bgGradient="linear(to-tr, #003319,, #95b6a5ff,#003319,#003319)"
        borderRadius="xl"
      >
        <Stack alignItems="center" textColor="#FFF">
          <Heading fontSize={{ base: "xl", md: "3xl" }} mt="25px">
            Turn Curiosity in Clarity
          </Heading>
          <Text maxW="550px" textAlign="center" mb="8">
            Got a plant on your mind? Run your first Analysis, explore
            compounds, and get research backed insights, instantly.
          </Text>
          <Button
            border="5px solid #E9E9E9"
            borderRadius="xl"
            textColor="#0E7B5D"
            boxShadow="md"
            mb="25px"
          >
            Try it Now
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CuriosityModal;
