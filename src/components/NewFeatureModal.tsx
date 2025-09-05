import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import greenImage from "../assets/greenImage.png";
import backgroundImage from "../assets/rectangle-31.png";

const NewFeatureModal = () => {
  return (
    <Box
      bgImage={backgroundImage}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      my={6}
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
              src={greenImage}
              alt="specimen chat image"
              objectFit="cover"
              mb="2.5"
            />
          </Box>
        </Center>
        <Center padding={2} flexDirection="column">
          <Box maxW="400px" textAlign={{ base: "center", md: "left" }}>
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
            <Box textAlign="center">
              <Box
                outline="0.1px solid grey"
                mt="5"
                mb={5}
                borderRadius="13px"
                py="30px"
              >
                Upload a local recipe or healing method
              </Box>
              <Box
                outline="0.1px solid grey"
                mb={5}
                borderRadius="13px"
                py="30px"
              >
                Choose to monitize, public or keep private
              </Box>
              <Box outline="0.1px solid grey" borderRadius="13px" py="30px">
                Ip protected, blockchain secured, science verified.
              </Box>
            </Box>
          </Box>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default NewFeatureModal;
