import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SettingsListener.css";

export default function SettingsListener({ activeChanger }) {
  const [isWork, setIsWork] = useState(false);
  const [isLife, setIsLife] = useState(false);
  const [isStress, setIsStress] = useState(false);
  const [isSchool, setIsSchool] = useState(false);
  const [isFamily, setIsFamily] = useState(false);
  const [isRelationship, setIsRelationship] = useState(false);
  const [isJoy, setIsJoy] = useState(false);
  const [isUncertain, setIsUncertain] = useState(false);

  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
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
      <Input mt={3} width="60%" ml={10} placeholder="John Doe" />
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
      <Input mt={3} width="60%" ml={10} placeholder="johndoe@gmail.com" />
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
        <Input type="tel" placeholder="123-456-7890" />
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
      <Select placeholder="" mt={3} ml={10} width="60%">
        <option value="option1"></option>
        <option value="option2">Male</option>
        <option value="option3">Female</option>
        <option value="option4">Other</option>
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
      <Select placeholder="" mt={3} ml={10} width="60%">
        <option value="option0"></option>
        <option value="option1">Below 20</option>
        <option value="option2">20-24</option>
        <option value="option3">25-30</option>
        <option value="option4">31-35</option>
        <option value="option5">36-40</option>
        <option value="option6">41-45</option>
        <option value="option7">46-50</option>
        <option value="option8">Above 50</option>
      </Select>
      <Text
        className="font-semibold"
        color="gray.700"
        fontSize="medium"
        mt={5}
        ml={10}
      >
        What do you want to listen to?
      </Text>
      <Button
        mt={-85}
        ml={10}
        background={!isWork ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsWork(!isWork)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsWork(!isWork)}
          aria-expanded={isWork}
          icon={
            !isWork ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Work</Text>
      </Button>
      <Button
        mt={-85}
        ml={2}
        background={!isLife ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsLife(!isLife)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsLife(!isLife)}
          aria-expanded={isLife}
          icon={
            !isLife ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Life</Text>
      </Button>

      <Button
        mt={-85}
        ml={2}
        background={!isStress ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsStress(!isStress)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsStress(!isStress)}
          aria-expanded={isStress}
          icon={
            !isStress ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Daily Stress</Text>
      </Button>

      <Button
        mt={2}
        ml={-350}
        background={!isSchool ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsSchool(!isSchool)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsSchool(!isSchool)}
          aria-expanded={isSchool}
          icon={
            !isSchool ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> School</Text>
      </Button>

      <Button
        mt={2}
        ml={2}
        background={!isFamily ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsFamily(!isFamily)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsFamily(!isFamily)}
          aria-expanded={isFamily}
          icon={
            !isFamily ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Family</Text>
      </Button>

      <Button
        mt={2}
        ml={2}
        background={!isRelationship ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsRelationship(!isRelationship)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsRelationship(!isRelationship)}
          aria-expanded={isRelationship}
          icon={
            !isRelationship ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Relationship</Text>
      </Button>

      <Button
        mt={100}
        ml={-385}
        background={!isJoy ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsJoy(!isJoy)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsJoy(!isJoy)}
          aria-expanded={isJoy}
          icon={
            !isJoy ? <AddIcon ml={-7} mt={-1} /> : <MinusIcon ml={-7} mt={-1} />
          }
        />
        <Text ml={-4}> Finding joy</Text>
      </Button>

      <Button
        mt={100}
        ml={2}
        background={!isUncertain ? "white" : "green.600"}
        border="solid 1.6px lightgray"
        onClick={() => setIsUncertain(!isUncertain)}
      >
        <IconButton
          variant="unstyled"
          onClick={() => setIsUncertain(!isUncertain)}
          aria-expanded={isUncertain}
          icon={
            !isUncertain ? (
              <AddIcon ml={-7} mt={-1} />
            ) : (
              <MinusIcon ml={-7} mt={-1} />
            )
          }
        />
        <Text ml={-4}> Dealing with uncertainty</Text>
      </Button>

      <Text mt={23} ml={10} className="font-semibold" color="gray.700">
        {" "}
        Introduce yourself to our talkers
      </Text>
      <Textarea
        width="60%"
        height="25%"
        style={{ flexWrap: "wrap", maxWidth: "500px" }}
        border="1px solid lightgray"
        borderRadius="20px"
        ml={10}
        mt={2}
      ></Textarea>
      <Button colorScheme="red" mt={180} ml={-457} position="absolute">
        {" "}
        Save details
      </Button>
      <Link to="/resetpassword">
        <Text color="brandRed.500" ml={12} mt={20} className="font-semibold">
          Reset password
        </Text>
      </Link>

      <Box
        w="80%"
        h="20%"
        style={{ border: "1px solid black", borderRadius: "15px" }}
        mt={95}
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
          border="solid 1.6px lightgray"
          background="white"
        >
          Switch role
        </Button>
      </Box>
    </Box>
  );
}
