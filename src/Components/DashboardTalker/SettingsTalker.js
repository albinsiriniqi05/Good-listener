import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SettingsTalker.css";

export default function SettingsTalker({ activeChanger }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("20-24");
  const [error, setError] = useState(false);

  const updateTalker = async () => {
    try {
      await Axios.patch(
        "http://localhost:8000/talkers/me",
        {
          name: name,
          email: email,
          gender: gender,
          phone_number: phone,
          age: age,
        },
        {
          withCredentials: true,
        },
      ).then((response) => {
        activeChanger("Home");
      });
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
      <Text className="font-semibold" color="gray.700" ml={10} mt={4}></Text>

      <Text className="font-semibold" color="gray.700" ml={10} mt={4}>
        {" "}
        Settings{" "}
      </Text>

      <Text
        mt={8}
        ml={10}
        fontSize="medium"
        color="gray.700"
        className="font-semibold"
      >
        {" "}
        Profile photo{" "}
      </Text>

      <Box className="profilePic" ml={10} mt={2}>
        <Image
          className="profileImage"
          borderRadius="full"
          boxSize="80px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Box className="profilePic__content">
          <span className="profilePic__icon">
            {" "}
            <BsFillCameraFill />{" "}
          </span>
        </Box>
      </Box>
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        {" "}
        Name{" "}
      </Text>
      <Input
        mt={3}
        width="60%"
        ml={10}
        placeholder="John Doe"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        {" "}
        Email{" "}
      </Text>
      <Input
        mt={3}
        width="60%"
        ml={10}
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        {" "}
        Phone Number{" "}
      </Text>
      <InputGroup mt={3} width="60%" ml={10}>
        <InputLeftAddon children="+1" />
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputGroup>
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        {" "}
        Gender{" "}
      </Text>
      <Select
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
        mt={3}
        ml={10}
        width="60%"
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </Select>
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        {" "}
        Age{" "}
      </Text>
      <Select
        mt={3}
        ml={10}
        width="60%"
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
        <Text mt={7} color="red" className="font-semibold" ml={10}>
          Server error, please try again!
        </Text>
      )}
      <Button colorScheme="red" mt={8} ml={10} onClick={() => updateTalker()}>
        Save details
      </Button>
      <Link to="/resetpassword">
        <Text color="brandRed.500" ml={10} mt={3} className="font-semibold">
          Reset password
        </Text>
      </Link>

      <Box
        w="80%"
        h="20%"
        style={{ border: "1px solid black", borderRadius: "15px" }}
        mt={30}
        ml={10}
      >
        <Text className="font-semibold" mt={5} ml={5}>
          {" "}
          I want to switch role
        </Text>
        <Text
          className="font-semibold"
          fontSize="smaller"
          ml={5}
          mr={40}
          mt={2}
        >
          {" "}
          Once you switched roles, you will have to fill in additional
          information and do not have the same privileges as your current role.
        </Text>
        <Button
          ml={480}
          mt={-20}
          background="white"
          border="solid 1.6px lightgray"
        >
          {" "}
          Switch role{" "}
        </Button>
      </Box>
    </Box>
  );
}
