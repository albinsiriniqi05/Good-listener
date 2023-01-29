import { CalendarIcon, CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function HomeListener() {
  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
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
        h="29%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={27}
        ml={10}
      >
        <Avatar h={8} w={10} mt={2} ml={2} mb={-0.5}></Avatar>
        <Text ml={14} mt={-6} color="gray" fontSize="small">
          <span style={{ color: "red" }} className="font-semibold">
            Jane Doe
          </span>{" "}
          wants to talk about...
        </Text>
        <Text ml={483} mt={-6} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-7}>
          {" "}
          I can't get a job after graduation
        </Text>
        <CalendarIcon ml={4} mt={2} color="lightgray"></CalendarIcon>
        <Text color="lightgray" ml={10} mt={-4} fontSize="small">
          {" "}
          Fri, Oct 14 12:00pm
        </Text>
        <Button w="30%" colorScheme="red" mt={2} ml={3}>
          Join session now
        </Button>
      </Box>
      <Text className="font-semibold" mt={6} ml={12}>
        {" "}
        Requests for you
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
        h="25%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={15}
        ml={10}
      >
        <Text ml={4} mt={4} color="gray" fontSize="small">
          <span style={{ color: "red" }} className="font-semibold">
            Someone
          </span>{" "}
          wants to talk about...
        </Text>
        <Text ml={483} mt={-6} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-10} mb={2}>
          {" "}
          I can't find happiness like I used to before
        </Text>

        <Button w="20%" colorScheme="white" mt={4} ml={200} mr={-7} mb={-3}>
          <span style={{ color: "red" }}> Reject request </span>
        </Button>

        <Button
          w="30%"
          colorScheme="brandGreen.500"
          mt={-3}
          ml={-275}
          mb={-10}
          style={{ border: "2px solid lightgreen" }}
        >
          <CheckIcon mr={4} ml={-3} color="#19C788"></CheckIcon>

          <span style={{ color: "#19C788" }}> Listen now </span>
        </Button>
      </Box>
      <br></br>
      <Box
        w="75%"
        h="25%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={15}
        ml={10}
      >
        <Text ml={4} mt={4} color="gray" fontSize="small">
          <span style={{ color: "red" }} className="font-semibold">
            Someone
          </span>{" "}
          wants to talk about...
        </Text>
        <Text ml={483} mt={-6} className="font-semibold">
          {" "}
          Details
        </Text>
        <ChevronRightIcon ml={543} mt={-19} mb={50}></ChevronRightIcon>
        <Text className="font-semibold" ml={4} mt={-10} mb={2}>
          {" "}
          I need to find someone who I care about...
        </Text>

        <Button w="20%" colorScheme="white" mt={4} ml={200} mr={-7} mb={-3}>
          <span style={{ color: "red" }}> Reject request </span>
        </Button>

        <Button
          w="30%"
          colorScheme="brandGreen.500"
          mt={-3}
          ml={-275}
          mb={-10}
          style={{ border: "2px solid lightgreen" }}
        >
          <CheckIcon mr={4} ml={-3} color="#19C788"></CheckIcon>

          <span style={{ color: "#19C788" }}> Listen now </span>
        </Button>
      </Box>
    </Box>
  );
}
