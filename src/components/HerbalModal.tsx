import {
  Box,
  SimpleGrid,
  Text,
  Center,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import backgroundImage from "../assets/rectangle-31.png";
import HerbalImage from "../assets/HerbalImage.png";

const HerbalModal = () => {
  return (
    <>
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
          <Center padding={2} flexDirection="column">
            <Box maxW="400px" textAlign={{ base: "center", md: "left" }}>
              <Heading marginBottom={2} fontFamily="helvetica">
                Meet the AI Revolutionalizing
                {
                  <Heading
                    display="inline-flex"
                    paddingLeft="6px"
                    mr="6px"
                    fontStyle="italic"
                    fontFamily="Helvatica"
                  >
                    Herbal
                  </Heading>
                }
                Research
              </Heading>
              <Text>
                Borderless Science AI is a smart agent built to decode the
                science behind herbal medicine. it identfies a plant's active
                compounds, evaluates toxicity, and makes ingredients to
                scientificallt backed treatments, all in seconds. Powered by
                Advanced AI and secured with blockchain. It bridges ancient
                knowledge with cutting-edge science. In a world full of
                guesswords, Borderless brings clarity, safety, and proof to
                natural medicine.
              </Text>
              <Box></Box>
            </Box>
          </Center>
          <Center flexDirection="column">
            <Box>
              <Image
                src={HerbalImage}
                alt="specimen chat image"
                objectFit="cover"
                mb="2.5"
              />
            </Box>
            <Button
              colorScheme="green"
              variant="solid"
              border={"3px solid #052b21"}
              borderRadius="20px"
            >
              Get Started
            </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default HerbalModal;
