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
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

export default function Signin() {
  const [listener, setListener] = useState(0);
  const [incorrect, setIncorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const login = async () => {
    const formData = new FormData();
    formData.set("username", email);
    formData.set("password", password);
    Axios.post(
      listener
        ? "http://localhost:8000/auth/listeners/login"
        : "http://localhost:8000/auth/talkers/login",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    )
      .then(async (response) => {
        await Axios.get(
          listener
            ? "http://localhost:8000/listeners/me"
            : "http://localhost:8000/talkers/me",
          {
            withCredentials: true,
          },
        ).then((response, err) => {
          if (err) {
            setIncorrect(true);
          } else if (response.data.gender == null) {
            setRedirect(listener ? "/onboardlistener" : "/onboardtalker");
            setUser({ listener: listener });
          } else {
            setRedirect(listener ? "/dashboardlistener" : "/dashboardtalker");
            setUser({ listener: listener });
          }
        });
      })
      .catch((error) => setIncorrect(true));
  };

  const googleLogin = async () => {
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
            Start feeling connected again
          </Heading>
          <Text mt={3}>
            Sign in to be heard, or listen to connect with people
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
            mt={5}
            mb={5}
            onClick={googleLogin}
          >
            Continue with Google
          </Button>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Text mt={5}>Email</Text>
          <Input
            mt={3}
            mb={3}
            placeholder="Enter your email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-between">
            <Text>Password</Text>
            <Link to="/forgotpassword">
              <Text color="brandRed.500" className="font-semibold">
                Forgot password?
              </Text>
            </Link>
          </div>
          <Input
            mt={3}
            placeholder="Enter your password"
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          {incorrect && (
            <Text mt={7} color="red" className="font-semibold" ml={1}>
              Incorrect credentials
            </Text>
          )}
          <Button
            mt={incorrect ? 0 : 7}
            w="100%"
            colorScheme="red"
            onClick={login}
          >
            Log in
          </Button>
          <Flex mt={2}>
            <Text>Not a member?</Text>
            <Link to="/signup">
              <Text color="brandRed.500" className="font-semibold" ml={1}>
                Sign up
              </Text>
            </Link>
          </Flex>
        </Box>
      </Center>
      {redirect && <Navigate to={redirect} replace={true} />}
    </Box>
  );
}
