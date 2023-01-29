import { CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeTalker({ activeChanger }) {
  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
      <Box
        w="75%"
        h="30%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={11}
        ml={10}
        bg="lightgray"
      >
        <Button
          colorScheme="lightgrey"
          mt="12%"
          ml={197}
          style={{ border: "2px solid black", borderRadius: "7px" }}
          onClick={() => activeChanger("Request")}
        >
          <span style={{ color: "black" }}>Request a session</span>
        </Button>
      </Box>
      <br></br>
      <Text mt={5} ml={12} className="font-semibold">
        {" "}
        Your upcoming session{" "}
      </Text>
      <Text
        className="font-semibold"
        ml={550}
        mt={-5}
        color="brandRed.500"
        fontSize="small"
      >
        {" "}
        See all
      </Text>

      <Box
        w="75%"
        h="30%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={27}
        ml={10}
      >
        <Text ml={4} mt={4} color="grey" fontSize="small">
          I want to talk about...
        </Text>
        <Text ml={483} mt={-5} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-9}>
          {" "}
          I can't get a job after graduation
        </Text>
        <CalendarIcon ml={4} mt={2} color="lightgray"></CalendarIcon>
        <Text color="gray" ml={10} mt={-4} fontSize="small">
          {" "}
          Fri, Oct 14 12:00pm
        </Text>
        <Avatar h={4} w={4} ml={185} mt={-4}></Avatar>
        <Text fontSize="small" ml={208} mt={-41}>
          {" "}
          with{" "}
          <span style={{ color: "red" }} className="font-semibold">
            Jane Doe{" "}
          </span>
        </Text>
        <Button w="30%" colorScheme="red" mt={4} ml={4}>
          Join session now
        </Button>
      </Box>
      <Text className="font-semibold" mt={8} ml={12}>
        {" "}
        Your requests
      </Text>
      <Text
        className="font-semibold"
        ml={550}
        mt={-5}
        color="brandRed.500"
        fontSize="small"
      >
        {" "}
        See all
      </Text>

      <Box
        w="75%"
        h="22%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={25}
        ml={10}
      >
        <Text ml={4} mt={4} fontSize="small" color="grey">
          I want to talk about...
        </Text>
        <Text ml={483} mt={-5} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-39}>
          {" "}
          What can I do to make myself happy
        </Text>

        <Button
          w="22%"
          backgroundColor="gray.400"
          mt={4}
          ml={4}
          h="6"
          style={{ border: "2px" }}
        >
          <span style={{ color: "white", fontSize: "small" }}>
            {" "}
            Matching Listener{" "}
          </span>
        </Button>
      </Box>

      <Text mt={5} ml={12} className="font-semibold">
          {" "}
          Past sessions
          {" "}
      </Text>

      <Box
        w="75%"
        h="27%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={25}
        ml={10}
      >
        <Text ml={4} mt={4} fontSize="small" color="grey">
          I want to talk about...
        </Text>
        <Text ml={483} mt={-5} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-39}>
          {" "}
          Getting Satisfaction in my day-to-day life
        </Text>

        <CalendarIcon ml={4} mt={2} color="lightgray"></CalendarIcon>
        <Text color="gray" ml={10} mt={-4} fontSize="small">
          {" "}
          Fri, Oct 14 12:00pm
        </Text>
        <Avatar h={4} w={4} ml={185} mt={-4}></Avatar>
        <Text fontSize="small" ml={208} mt={-41}>
          {" "}
          with{" "}
          <span style={{ color: "red" }} className="font-semibold">
            Jane Doe{" "}
          </span>
        </Text>

        <Button
          w="22%"
          backgroundColor="gray"
          mt={4}
          ml={4}
          h="6"
          style={{ border: "2px" }}
        >
          <span style={{ color: "white", fontSize: "small" }}>
            {" "}
            Give a Review{" "}
          </span>
        </Button>
      </Box>
    </Box>
  );
}
