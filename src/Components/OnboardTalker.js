import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function OnboardTalker() {
  const [gender, setGender] = useState("Female");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("20-24");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const updateTalker = async () => {
    try {
      await Axios.patch(
        "http://localhost:8000/talkers/me",
        {
          gender: gender,
          phone_number: phone,
          age: age,
        },
        {
          withCredentials: true,
        },
      ).then((response) => {
        setRedirect(true);
      });
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <Box h="calc(94vh)" w="100%">
      <Center w="50%" h="100%">
        <Box w="70%">
          <Heading
            fontSize="5xl"
            style={{ lineHeight: "110%" }}
            color="gray.600"
          >
            Tell us more about you
          </Heading>
          <Text style={{ lineHeight: "110%" }} mt={3}>
            Tell us about yourself so we can match you with the best person to
            talk to.
          </Text>
          <br />
          <Text style={{ lineHeight: "110%", fontWeight: "bolder" }} mt={3}>
            Phone Number
          </Text>
          <InputGroup mt={3}>
            <InputLeftAddon children="+1" />
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <Text style={{ lineHeight: "110%", fontWeight: "bolder" }} mt={3}>
            Gender
          </Text>
          <Select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            mt={3}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Select>
          <Text style={{ lineHeight: "110%", fontWeight: "bolder" }} mt={3}>
            Age
          </Text>
          <Select
            mt={3}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <option value="<20">Below 20</option>
            <option value="20-24">20-24</option>
            <option value="25-30">25-30</option>
            <option value="31-35">31-35</option>
            <option value="34-40">34-40</option>
            <option value="41-45">41-45</option>
            <option value="46-50">46-50</option>
            <option value=">50">Above 50</option>
          </Select>
          {error && (
            <Text mt={7} color="red" className="font-semibold" ml={1}>
              Server error, please try again!
            </Text>
          )}
          <Button
            mt={7}
            w="100%"
            colorScheme="brandRed"
            onClick={() => updateTalker()}
          >
            Create Account
          </Button>
          <br />
        </Box>
      </Center>
      {redirect && <Navigate to={"/dashboardtalker"} replace={true} />}
    </Box>
  );
}
