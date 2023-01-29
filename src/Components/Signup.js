import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Signup() {
  const [listener, setListener] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const signup = async () => {
    try {
      await Axios.post(
        listener
          ? "http://localhost:8000/auth/listeners/register"
          : "http://localhost:8000/auth/talkers/register",
        {
          email: email,
          password: password,
          name: name,
        },
      ).then((response) => {
        setRedirect(true);
      });
    } catch (e) {
      if (e.response.data.detail === "REGISTER_USER_ALREADY_EXISTS") {
        setError("An account with this email already exists!");
      } else {
        setError("Server error, please try again");
      }
      console.log(e);
    }
  };

  const googleSignup = async () => {
    await Axios.get(
      listener
        ? "http://localhost:8000/auth/listeners/google/authorize"
        : "http://localhost:8000/auth/talkers/google/authorize",
    ).then((response) => {
      window.location.href = response.data.authorization_url;
    });
  };

  return (
    <Box h="calc(94vh)" w="100%">
      <Center w="50%" h="100%" color="brandGray.700">
        <Box w="70%">
          <Heading fontSize="5xl" style={{ lineHeight: "110%" }}>
            Create your account
          </Heading>
          <Text mt={3}>
            Sign up to be heard, or listen to connect with people
          </Text>
          <Stack
            direction="row"
            align="left"
            justifyContent={"space-between"}
            mt={3}
          >
            <Button
              colorScheme="brandBlue"
              variant={listener ? "outline" : "solid"}
              onClick={() => setListener(0)}
              size="lg"
              width={300}
            >
              Talker
            </Button>
            <Button
              colorScheme="brandGreen"
              variant={listener ? "solid" : "outline"}
              onClick={() => setListener(1)}
              size="lg"
              width={300}
            >
              Listener
            </Button>
          </Stack>
          <Button
            w="100%"
            variant="outline"
            mt={4}
            mb={4}
            onClick={googleSignup}
          >
            Sign up with Google
          </Button>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Text mt={3}>Name</Text>
          <Input
            mt={3}
            mb={3}
            placeholder="Enter your name"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
          <Text>Email</Text>
          <Input
            mt={3}
            mb={3}
            placeholder="Enter your email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <Text>Password</Text>
          <Input
            mt={3}
            placeholder="Enter your password"
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <Text mt={1} color="brandGray.500" fontSize="sm">
            Password must be at least 8 characters
          </Text>
          {error && (
            <Text mt={6} color="red" className="font-semibold" ml={1}>
              {error}
            </Text>
          )}
          <Button
            mt={error ? 0 : 6}
            w="100%"
            colorScheme="brandRed"
            onClick={signup}
          >
            Sign up
          </Button>
          <Center mt={1} color="brandGray.500" fontSize="sm">
            By signing up, you agree with the terms & conditions
          </Center>
          <Flex mt={3}>
            <Text>Already have an account?</Text>
            <Link to="/signin">
              <Text color="brandRed.500" className="font-semibold" ml={1}>
                Sign in
              </Text>
            </Link>
          </Flex>
        </Box>
      </Center>
      {redirect && <Navigate to="/signin" replace={true} />}
    </Box>
  );
}
