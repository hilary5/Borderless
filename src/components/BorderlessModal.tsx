import {
  Center,
  Box,
  Text,
  Heading,
  Card,
  Icon,
  SimpleGrid,
  Square,
  Image,
} from "@chakra-ui/react";
import contact from "../assets/contacts.svg";
import message from "../assets/message.svg";
import data from "../assets/data.svg";
const BorderlessModal = () => {
  return (
    <Box p="10px" w="100%" my="50px">
      <Center p={3}>
        <Box maxW={{ md: "50%" }} textAlign="center">
          <Center>
            <Heading size="lg">
              Borderless i'snt just a tool, it's a movement
            </Heading>
          </Center>
          <Center mt={4}>
            <Text fontSize="sm" opacity="0.8">
              Let's Make Science transparent, inclusive and truly borderless
            </Text>
          </Center>
        </Box>
      </Center>
      <Center>
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
            <Square
              bg="#FFFFFF"
              size="50px"
              borderRadius="xl"
              marginBottom="20px"
            >
              <Image src={message} boxSize="30px" />
            </Square>
            <Text size="md" as="b" textAlign="center" marginBottom="10px">
              Explore our partners and contributors powering the mission
            </Text>
            <Text fontSize="sm" textAlign="center" opacity="0.8">
              We colaborate with researchers, labs, and builders who believe in
              transparency and plant powered progress. see who is already
              building with us
            </Text>
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
            <Square
              bg="#FFFFFF"
              size="50px"
              borderRadius="xl"
              marginBottom="20px"
            >
              <Image src={data} boxSize="30px" />
            </Square>
            <Text size="md" as="b" textAlign="center" marginBottom="10px">
              Explore our partners and contributors powering the mission
            </Text>
            <Text fontSize="sm" textAlign="center" opacity="0.8">
              We colaborate with researchers, labs, and builders who believe in
              transparency and plant powered progress. see who is already
              building with us
            </Text>
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
            <Square
              bg="#FFFFFF"
              size="50px"
              borderRadius="xl"
              marginBottom="20px"
            >
              <Image src={contact} boxSize="30px" />
            </Square>
            <Text size="md" as="b" textAlign="center" marginBottom="10px">
              Explore our partners and contributors powering the mission
            </Text>
            <Text fontSize="sm" textAlign="center" opacity="0.8">
              We colaborate with researchers, labs, and builders who believe in
              transparency and plant powered progress. see who is already
              building with us
            </Text>
          </Card>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default BorderlessModal;
