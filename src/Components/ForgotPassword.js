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
import { Navigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [listener, setListener] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const forgetPassword = async () => {
    const formData = new FormData();
    formData.set("email", email);
    await Axios.post(
      listener
        ? "http://localhost:8000/auth/listeners/forgot-password"
        : "http://localhost:8000/auth/talkers/forgot-password",
      formData,
    )
      .then(function (response, err) {
        if (err) {
          console.log("error", err);
        } else {
          console.log("success");
          setRedirect(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box h="calc(60vh)" w="100%">
      <Center w="100%" h="100%" color="brandGray.700">
        <Box w="40%">
          <Heading fontSize="5xl" style={{ lineHeight: "110%" }}>
            Forgot Your Password?
          </Heading>
          <Text mt={3}>
            Enter the email you used to register with Good listeners. If the
            account exists, we will send you a link to reset you password.
          </Text>
          <br />
          <Stack
            direction="row"
            align="left"
            justifyContent={"space-between"}
            mb={5}
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
          <Text>Email</Text>
          <Input
            mt={3}
            placeholder="Enter your email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <Button
            mt={6}
            w="100%"
            colorScheme="brandRed"
            onClick={forgetPassword}
          >
            Reset My Password
          </Button>
          <Flex mt={3}>
            <Text>Already have an account?</Text>
            <Text color="brandRed.500" className="font-semibold" ml={1}>
              Sign in
            </Text>
          </Flex>
        </Box>
      </Center>
      {redirect && <Navigate to={"/signin"} replace={true} />}
    </Box>
  );
}
