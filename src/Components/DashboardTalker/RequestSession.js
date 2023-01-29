import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function RequestSession() {
  return (
      <Box h="calc(130vh)" w="50%">
        <Center w="100%" h="100%" color="brandGray.700">
          <Box w="70%">
            <Heading fontSize="4xl" style={{ lineHeight: "110%" }}>
              What do you want to talk about?
            </Heading>
            <Text mt={3}>
              In order to match with the most appropriate listener for you, we
              would like to know a little bit about what you want to talk about,
              and your reference on who to listen to you.
            </Text>
            <br />
            <br />
            <Text fontSize="2xl" mt={5}>
              What is it about?
            </Text>
            <br />

            <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
              <FormLabel htmlFor="isChecked">Work:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isDisabled">Life:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isFocusable">Daily Stress:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isInvalid">School:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isReadOnly">Family:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isRequired">Relationship:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isRequired">Finding Joy:</FormLabel>
              <Switch id="isRequired" isRequired />

              <FormLabel htmlFor="isRequired">
                Dealing With Uncertainty:
              </FormLabel>
              <Switch id="isRequired" isRequired />
            </FormControl>

            <br />
            <br />
            <Text mt={3} style={{ lineHeight: "110%", fontWeight: "bolder" }}>
              Describe what you want to talk about.
            </Text>
            <br />
            <Textarea placeholder="Feel free to describe more about what you want to talk about. We will only share this information to your confirmed listener." />

            <Stack
              direction="row"
              align="center"
              justifyContent={"space-between"}
              mt={1}
            >
              <Button mt={3} w="100%" colorScheme="brandRed">
                Submit Request
              </Button>
              <Button mt={6} w="100%">
                Cancel
              </Button>
            </Stack>
            <Text mt={1} color="brandGray.500" fontSize="sm">
              Some disclaimer when it comes to submitting a request to talk to
              on Good Listener
            </Text>
          </Box>
        </Center>
      </Box>
  );
}
