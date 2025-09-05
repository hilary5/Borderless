import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeroImage from "../assets/Hero1.png";
import HeroImage2 from "../assets/Hero2.png";

const Hero = () => {
  return (
    <>
      <Box
        padding={3}
        marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
        marginX={{ lg: 8 }}
      >
        <Card
          padding={2}
          align={"center"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading marginBottom={2} fontFamily="helvetica">
            Bridging
            {
              <Heading
                display="inline-flex"
                paddingLeft="6px"
                mr="6px"
                fontStyle="italic"
                fontFamily="Helvatica"
              >
                Traditional
              </Heading>
            }
            Science with Modern Intelligence
          </Heading>
          <Text>
            Turn local herbal knowlegde into data-backed pharma compatible
            insights powered by AI and Secured on SEI
          </Text>
          <Stack direction="row" spacing={4} marginY={5}>
            <Button
              // leftIcon={<EmailIcon />}
              colorScheme="green"
              variant="solid"
            >
              Try it now
            </Button>
            <Button
              // rightIcon={<ArrowForwardIcon />}
              colorScheme="green"
              variant="outline"
            >
              How it works
            </Button>
          </Stack>
        </Card>
        <Card
          align={"center"}
          padding={{ sm: 5 }}
          paddingTop={{ base: 10, lg: 0, xl: 0 }}
        >
          <Image
            src={HeroImage}
            alt="HeroImage"
            // maxWidth={{ sm: "300px", xl: "350px" }}
            objectFit="cover"
            borderRadius={10}
            boxShadow="xl"
            margin={0.5}
          />
          <Image
            src={HeroImage2}
            alt="HeroImage2"
            // maxWidth={{ sm: "300px", xl: "350px" }}
            objectFit="cover"
            borderRadius={10}
            boxShadow="xl"
          />
        </Card>
      </Box>
    </>
  );
};

export default Hero;
