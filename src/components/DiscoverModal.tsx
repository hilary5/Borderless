import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import discoverImage from "../assets/discoverImage.png";

const DiscoverModal = () => {
  return (
    <>
      <Box
        padding={3}
        marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
        marginX={{ lg: 8 }}
      >
        <Center textAlign="center">
          <Heading marginBottom={2} fontFamily="helvetica" as="h3" size="md">
            Discover
            {
              <Text
                display="inline-flex"
                paddingLeft="6px"
                mr="6px"
                fontFamily="Helvatica"
              >
                Compounds
              </Text>
            }
            , Compare result and Make better calls
          </Heading>
        </Center>
        <Center mt="4">
          <Box
            p={{ base: 3, lg: 7 }}
            bgGradient="linear(to-br, #AEECBD, #FEE0AF,#AEECBD)"
          >
            <Image
              src={discoverImage}
              alt="DiscoverImage"
              // maxWidth={{ sm: "300px", xl: "350px" }}
              objectFit="cover"
              borderRadius={10}
              boxShadow="xl"
            />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default DiscoverModal;
