import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const { user } = useContext(UserContext);

  const resetPassword = async () => {
    if (password === confirmPassword) {
      const formData = new FormData();
      formData.set("token", "string");
      formData.set("password", password);
      await Axios.post(
        user.listener
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
        .catch((error) => console.log("error", error));
    } else {
      setIncorrect(true);
    }
  };

  return (
    <Box h="calc(60vh)" w="100%">
      <Center w="100%" h="100%" color="brandGray.700">
        <Box w="40%">
          <Heading fontSize="5xl" style={{ lineHeight: "110%" }}>
            Reset Your Password?
          </Heading>
          <Text mt={3}>
            Reset your password here and log into Good listener with your new
            password.
          </Text>
          <br />
          <Text>Password*</Text>
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
          <br />
          <Text>Confirm Password*</Text>
          <Input
            mt={3}
            placeholder="Enter your password"
            type="password"
            value={confirmPassword}
            onInput={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            mt={6}
            w="100%"
            colorScheme="brandRed"
            onClick={() => resetPassword()}
          >
            Reset Password
          </Button>
          {incorrect && (
            <Text mt={7} color="red" className="font-semibold" ml={1}>
              Passwords don't match
            </Text>
          )}
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
      {redirect && (
        <Navigate
          to={user.listener ? "dashboardlistener" : "dashboardtalker"}
          replace={true}
        />
      )}
    </Box>
  );
}
