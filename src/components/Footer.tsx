import {
  SimpleGrid,
  HStack,
  VStack,
  Image,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import logo from "../assets/borderless_logo.png";
import socials from "../assets/socials.svg";

const Footer = () => {
  return (
    <Box bgColor="#B4D6CD" mt={{ base: "5px" }} py={{ base: "35px" }}>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={5}>
        <Stack alignItems={{ base: "center", md: "left" }}>
          <Box display="flex">
            <Image src={logo} w="70px" />
            <Stack textAlign="left" spacing={0}>
              <Text size="md" as="b">
                Borderless
              </Text>
              <Text size="md" noOfLines={1} opacity={0.8}>
                AI
              </Text>
            </Stack>
          </Box>
          <Stack ml={{ md: "20px" }} textAlign={{ base: "center", md: "left" }}>
            <Text>6a Adebayo Close, Lekki Phase 1, Lagos Nigeria</Text>
            <Text>+234 809 123 4567</Text>
            <Text>hello.borderlessai@gmail.com</Text>
          </Stack>
        </Stack>
        <Stack justify="center">
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Text>Home</Text>
            <Text>About</Text>
            <Text>How it Works</Text>
            <Text>Community</Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text as="u" fontSize="10px">
              Terms and Privacy
            </Text>
            <Text fontSize="10px" pl="3px">
              | 2025 Borderless AI . All Rights Reserved
            </Text>
          </Box>
        </Stack>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src={socials} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
