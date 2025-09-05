import {
  Card,
  Circle,
  Text,
  Image,
  Stack,
  SimpleGrid,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";
import comments from "../assets/comments.svg";
import contactsIcon from "../assets/contac.svg";

const WhatUsersSay = () => {
  return (
    <>
      <Box my="50px">
        <Center>
          <Heading size="lg" my={2}>
            What Users Say
          </Heading>
        </Center>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={5}
          mt={{ base: "30px" }}
        >
          <Card
            align={"center"}
            cursor="pointer"
            overflow="hidden"
            paddingTop="10px"
            bgColor="#DAECE3"
            borderRadius="2xl"
            boxShadow="lg"
            padding={{ base: "7%" }}
          >
            <Text fontSize="md" textAlign="left" opacity="0.8" as="i">
              "We colaborate with researchers, labs, and builders who believe in
              transparency and plant powered progress. see who is already
              building with us"
            </Text>
            <Stack direction="row" alignItems="center" mt="30px">
              <Circle bg="#FFFFFF" size="50px">
                <Image src={comments} />
              </Circle>
              <Stack textAlign="left" pl={1} spacing={0}>
                <Text size="md" as="b">
                  Onyeka A.
                </Text>
                <Text size="md" noOfLines={1} opacity={0.8}>
                  Ethnobotany Researcher
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Card
            align={"center"}
            cursor="pointer"
            overflow="hidden"
            paddingTop="10px"
            bgColor="#DAECE3"
            borderRadius="2xl"
            boxShadow="lg"
            padding={{ base: "7%" }}
          >
            <Text fontSize="md" textAlign="left" opacity="0.8" as="i">
              "I used Borderless to check which herbs could help my mum's
              artritis. it showed the compounds, flagged risks, and helped me
              choose the right combo. "
            </Text>
            <Stack direction="row" alignItems="center" mt="30px">
              <Circle bg="#FFFFFF" size="50px">
                <Image src={contactsIcon} />
              </Circle>
              <Stack textAlign="left" pl={1} spacing={0}>
                <Text size="md" as="b">
                  Amaka E.
                </Text>
                <Text size="md" noOfLines={1} opacity={0.8}>
                  Herbal Curious User
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Card
            align={"center"}
            cursor="pointer"
            overflow="hidden"
            paddingTop="10px"
            bgColor="#DAECE3"
            borderRadius="2xl"
            boxShadow="lg"
            padding={{ base: "7%" }}
          >
            <Text fontSize="md" textAlign="left" opacity="0.8" as="i">
              "This tool bridges traditional and pharmacology like never before,
              it's a perfect research assistant for the next generation of plant
              scientist."
            </Text>
            <Stack direction="row" alignItems="center" mt="30px">
              <Circle bg="#FFFFFF" size="50px">
                <Image src={comments} />
              </Circle>
              <Stack textAlign="left" pl={1} spacing={0}>
                <Text size="md" as="b">
                  Dr. Tega O.
                </Text>
                <Text size="md" noOfLines={1} opacity={0.8}>
                  Pharmacognosy Lecturer
                </Text>
              </Stack>
            </Stack>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default WhatUsersSay;
