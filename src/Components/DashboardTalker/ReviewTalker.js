import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function ReviewTalker({ activeChanger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
      <Button w="25%" background="white" border="solid 2px gray" mt={4} ml={3}>
        <span style={{ color: "Black" }}> Back </span>
      </Button>

      <br></br>
      <Heading fontSize="3xl" mt={5} ml={10}>
        {" "}
        Give a review on this session{" "}
      </Heading>

      <Box
        open
        w="75%"
        h="24%"
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
        <IconButton
          variant="unstyled"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          icon={
            !isOpen ? (
              <ChevronRightIcon ml={543} mt={-19} mb={50} />
            ) : (
              <ChevronDownIcon ml={543} mt={-19} mb={50} />
            )
          }
        />

        <Text className="font-semibold" ml={4} mt={-9}>
          {" "}
          Getting satisfaction on my day-to-day life.
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
          <span
            style={{ color: "red", lineHeight: "10px" }}
            className="font-semibold"
          >
            Jane Doe{" "}
          </span>
        </Text>
      </Box>

      <Text className="font-semibold" mt={5} ml={10}>
        {" "}
        My listener was patient with me.{" "}
      </Text>
      <Stack spacing={5} direction="row" align="left">
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={10}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={10}>
            {" "}
            Disagree{" "}
          </Text>
        </Flex>

        <Stack ml={50} spacing={3} direction="row" align="center">
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            1
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            2
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            3
          </Button>
          <Button
            colorScheme="red"
            border="solid 1px gray"
            style={{ color: "white" }}
            size="md"
          >
            4
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            5
          </Button>
        </Stack>
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={7}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={7}>
            {" "}
            Agree{" "}
          </Text>
        </Flex>
      </Stack>
      <Text className="font-semibold" mt={5} ml={10}>
        {" "}
        My listener made me feel comfortable.{" "}
      </Text>
      <Stack spacing={5} direction="row" align="left">
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={10}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={10}>
            {" "}
            Disagree{" "}
          </Text>
        </Flex>

        <Stack ml={50} spacing={3} direction="row" align="center">
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            1
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            2
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            3
          </Button>
          <Button
            colorScheme="red"
            border="solid 1px gray"
            style={{ color: "white" }}
            size="md"
          >
            4
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            5
          </Button>
        </Stack>
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={7}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={7}>
            {" "}
            Agree{" "}
          </Text>
        </Flex>
      </Stack>
      <Text className="font-semibold" mt={5} ml={10}>
        {" "}
        My listener had no mal intention during session.{" "}
      </Text>
      <Stack spacing={5} direction="row" align="left">
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={10}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={10}>
            {" "}
            Disagree{" "}
          </Text>
        </Flex>

        <Stack ml={50} spacing={3} direction="row" align="center">
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            1
          </Button>
          <Button
            colorScheme="red"
            border="solid 1px gray"
            style={{ color: "white" }}
            size="md"
          >
            2
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            3
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            4
          </Button>
          <Button
            colorScheme="white"
            border="solid 1px gray"
            style={{ color: "black" }}
            size="md"
          >
            5
          </Button>
        </Stack>
        <Flex direction={"column"}>
          <Text className="" mt={1} ml={7}>
            {" "}
            Stongly{" "}
          </Text>
          <Text className="" mt={0} ml={7}>
            {" "}
            Agree{" "}
          </Text>
        </Flex>
      </Stack>
      <Text className="font-semibold" mt={5} ml={10}>
        {" "}
        Any other feedback?{" "}
      </Text>
      <Textarea
        w="75%"
        h="24%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={27}
        ml={10}
        placeholder="eg. How did the listener make you feel? Did you feel better after the session?"
      />
      <Button
        mt={27}
        w="25%"
        background="brandRed.500"
        border="solid 2px gray"
        ml={3}
      >
        <span style={{ color: "white" }}> Submit </span>
      </Button>
    </Box>
  );
}
