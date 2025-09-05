import {
  Box,
  Stack,
  Text,
  Heading,
  Button,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const FirstKnow = () => {
  const toast = useToast();
  return (
    <Box p={{ base: 3, lg: 7 }} bgColor="#B4D6CD" borderRadius="xl">
      <Stack alignItems="center">
        <Heading fontSize={{ base: "xl", md: "3xl" }} mt="25px">
          Be the First to Know
        </Heading>
        <Text maxW="550px" textAlign="center" mb="8" as="i">
          Got a plant on your mind? Run your first Analysis, explore compounds,
          and get research backed insights, instantly.
        </Text>

        <Button
          border="5px solid #094E3B"
          borderRadius="xl"
          color="#0E7B5D"
          boxShadow="md"
          mb="25px"
          p={2}
          onClick={() => {
            toast({
              title: "Joined SuccessFully.",
              description: "We've added your account to the waitlist.",
              status: "success",
              duration: 4500,
              isClosable: true,
            });
          }}
        >
          Join the waitlist
        </Button>
      </Stack>
    </Box>
  );
};

export default FirstKnow;
