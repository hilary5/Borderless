import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

const LoginForm = () => {
  const [input, setInput] = useState(" ");
  const [password, setPassword] = useState("");
  const isError = input === "";
  const isErrorPassword = input === "";

  return (
    <Box>
      <Box padding={{ base: "10px", sm: "20px" }}>
        <Card
          maxWidth="450px"
          margin="auto"
          padding={2}
          maxH="auto"
          marginTop={{ base: "50px" }}
        >
          <form>
            <Text as="b" fontSize="2xl" ml="8px">
              Sign In
            </Text>
            <FormControl isInvalid={isError} isRequired my={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Joe@email.com"
              />
              {!isError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isErrorPassword} isRequired my={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {!isErrorPassword ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button colorScheme="green" m={2}>
              Sign in
            </Button>
            <Text
              color="green.700"
              cursor="pointer"
              as={ReactRouterLink}
              to="/Sign-Up"
              textDecoration="underline"
            >
              Sign up
            </Text>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginForm;
