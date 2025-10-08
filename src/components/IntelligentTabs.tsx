import {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  useColorModeValue,
  Card,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";

import toxicity from "../assets/image-3.png";
import toxicity2 from "../assets/image-2.png";
import { useState } from "react";

const IntelligentTabs = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "yellow.50"],
    ["red.900", "teal.900", "blue.900", "yellow.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <>
      <Box my="50px">
        <Card padding={2} justify={"center"} align={"center"}>
          <Heading
            marginBottom={2}
            fontFamily="helvetica"
            maxW={"450px"}
            textAlign="center"
            mb="15px"
          >
            Core Features Built for
            {
              <Heading
                display="inline-flex"
                paddingLeft="6px"
                mr="6px"
                fontStyle="italic"
                fontFamily="Helvatica"
              >
                Plant
              </Heading>
            }
            Intelligence
          </Heading>
          <Text mb={"40px"} textAlign="center" opacity={0.8}>
            See whats inside your herb, how it works and how to use it step by
            step.
          </Text>
        </Card>
        <Tabs
          onChange={(index) => setTabIndex(index)}
          bg={bg}
          isFitted
          variant="enclosed"
          size={"sm"}
          boxShadow="xl"
          overflow="hidden"
        >
          <TabList>
            <Tab>Toxicity and deficiency check</Tab>
            <Tab>Compound Analysis</Tab>
            <Tab>Pharma Comparison</Tab>
            <Tab>On-Chain Logging</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                spacing={1}
                padding={3}
                // marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
                marginX={{ lg: 8 }}
              >
                <Box padding={2} justifyContent="center" width="1fr">
                  <Heading
                    marginBottom={2}
                    fontFamily="helvetica"
                    fontSize={"md"}
                  >
                    Toxicity and Deficiency Checks
                  </Heading>
                  <Text>
                    Spot the Red flags before anyone takes a dose. AI models
                    detect harmful levels and missing nutrients, giving your
                    remedies a safety check in seconds
                  </Text>
                </Box>
                <Box
                  width="1fr"
                  padding={{ sm: 5 }}
                  paddingTop={{ base: 10, lg: 0, xl: 0 }}
                >
                  <Center>
                    <Image
                      src={toxicity}
                      alt="deficiency_check images"
                      maxWidth={{ sm: "300px", xl: "350px" }}
                      objectFit="contain"
                      borderRadius={10}
                      boxShadow="xl"
                    />
                  </Center>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                spacing={1}
                padding={3}
                // marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
                marginX={{ lg: 8 }}
              >
                <Box padding={2} justifyContent="center" width="1fr">
                  <Heading
                    marginBottom={2}
                    fontFamily="helvetica"
                    fontSize={"md"}
                  >
                    Compound Analysis
                  </Heading>
                  <Text>
                    Get a clear picture of what is in your herbs. Borderless
                    breaks down each plant active compounds by type and
                    percentage, no lab needed.
                  </Text>
                </Box>
                <Box
                  width="1fr"
                  padding={{ sm: 5 }}
                  paddingTop={{ base: 10, lg: 0, xl: 0 }}
                >
                  <Center>
                    <Image
                      src={toxicity2}
                      alt="deficiency_check images"
                      maxWidth={{ sm: "300px", xl: "350px" }}
                      objectFit="contain"
                      borderRadius={10}
                      boxShadow="xl"
                    />
                  </Center>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                spacing={1}
                padding={3}
                // marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
                marginX={{ lg: 8 }}
              >
                <Box padding={2} justifyContent="center" width="1fr">
                  <Heading
                    marginBottom={2}
                    fontFamily="helvetica"
                    fontSize={"md"}
                  >
                    Pharma Comparison
                  </Heading>
                  <Text>
                    See how your plant stack up to pharmaceuticals. Match
                    natural ingredients to lab-made drugs to unlock new
                    possibilities or to prove ancient ones
                  </Text>
                </Box>
                <Box
                  width="1fr"
                  padding={{ sm: 5 }}
                  paddingTop={{ base: 10, lg: 0, xl: 0 }}
                >
                  <Center>
                    <Image
                      src={toxicity}
                      alt="deficiency_check images"
                      maxWidth={{ sm: "300px", xl: "350px" }}
                      objectFit="contain"
                      borderRadius={10}
                      boxShadow="xl"
                    />
                  </Center>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                spacing={1}
                padding={3}
                // marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
                marginX={{ lg: 8 }}
              >
                <Box padding={2} justifyContent="center" width="1fr">
                  <Heading
                    marginBottom={2}
                    fontFamily="helvetica"
                    fontSize={"md"}
                  >
                    OnChain Logging (SEI Blockchain)
                  </Heading>
                  <Text>
                    Science you can't fake. Every analysis is logged on SEI for
                    transparency , proof of originality, and future IP claims
                  </Text>
                </Box>
                <Box
                  width="1fr"
                  padding={{ sm: 5 }}
                  paddingTop={{ base: 10, lg: 0, xl: 0 }}
                >
                  <Center>
                    <Image
                      src={toxicity}
                      alt="deficiency_check images"
                      maxWidth={{ sm: "300px", xl: "350px" }}
                      objectFit="contain"
                      borderRadius={10}
                      boxShadow="xl"
                    />
                  </Center>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default IntelligentTabs;
