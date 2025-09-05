import { Center, Text, Heading, Box } from "@chakra-ui/react";

const CommunityModal = () => {
  return (
    <>
      <Center p={3} my="50px">
        <Box maxW={{ md: "50%" }} textAlign="center">
          <Center>
            <Heading>Community and Open Science</Heading>
          </Center>
          <Center mt={4}>
            <Text>
              We're are building an open science ecosystem where herbal
              researchers,traditional medicine practitioners, and citizen
              scientists unite. As a part of the borderless Science DAO, you can
              contribute findings, validate data, and shape the future of
              botanical research
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default CommunityModal;
