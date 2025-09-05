import {
  Box,
  Button,
  Text,
  Card,
  Heading,
  Stack,
  SimpleGrid,
  Circle,
  Image,
  Center,
} from "@chakra-ui/react";
import specimenPng from "../assets/specimen_image.png";
import backgroundImage from "../assets/rectangle-31.png";
import { ArrowDownIcon } from "@chakra-ui/icons";

const Borderless = () => {
  return (
    <Box
      bgImage={backgroundImage}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
        spacing={1}
        padding={3}
        marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
        marginX={{ lg: 8 }}
      >
        <Center>
          <Box maxW={"320px"}>
            <Image
              src={specimenPng}
              alt="specimen chat image"
              objectFit="cover"
              mb="2.5"
            />
            <Card
              direction="row"
              align="center"
              bg="#052b21"
              p="4"
              borderRadius="10px"
              mb="2"
            >
              <Circle bg={"white"} mr="3">
                <ArrowDownIcon boxSize={6} color={"#052b21"} />
              </Circle>
              <Text as="b" color="white">
                AI analyzes the profile
              </Text>
            </Card>
            <Card
              direction="row"
              align="center"
              bg="#052b21"
              p="4"
              borderRadius="10px"
              mb="2"
            >
              <Circle bg={"white"} mr="3">
                <ArrowDownIcon boxSize={6} color={"#052b21"} />
              </Circle>
              <Text as="b" color="white">
                Review Your Compound breakdown
              </Text>
            </Card>
            <Card
              direction="row"
              align="center"
              bg="#052b21"
              p="4"
              borderRadius="10px"
              mb="2"
            >
              <Circle bg={"white"} mr="3">
                <ArrowDownIcon boxSize={6} color={"#052b21"} />
              </Circle>
              <Text as="b" color="white">
                Get Treatment Comparisms
              </Text>
            </Card>
            <Card
              direction="row"
              align="center"
              bg="#052b21"
              p="4"
              borderRadius="10px"
              mb="2"
            >
              <Circle bg={"white"} mr="3">
                <ArrowDownIcon boxSize={6} color={"#052b21"} />
              </Circle>
              <Text as="b" color="white">
                Log Results On-Chain
              </Text>
            </Card>
          </Box>
        </Center>
        <Center
          padding={2}
          flexDirection="column"
          textAlign={{ base: "center", md: "left" }}
          marginY={{ base: "50px" }}
        >
          <Heading marginBottom={2} fontFamily="helvetica">
            How the Borderless
            {
              <Heading
                display="inline-flex"
                paddingLeft="6px"
                mr="6px"
                fontStyle="italic"
                fontFamily="Helvatica"
              >
                AI
              </Heading>
            }
            Works
          </Heading>
          <Text>
            See whats inside your herb, how it works and how to use it step by
            step.
          </Text>
          <Stack direction="row" spacing={4} marginY={5} mt="30px">
            <Button
              colorScheme="green"
              variant="solid"
              border={"3px solid #052b21"}
              borderRadius="20px"
            >
              Run a sample test
            </Button>
          </Stack>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Borderless;
