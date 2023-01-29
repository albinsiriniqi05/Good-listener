import { SettingsIcon, TimeIcon } from "@chakra-ui/icons";
import { Avatar, Badge, Box, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaHouseUser } from "react-icons/fa";

export default function SidebarListener({ currentActive, activeChanger }) {
  console.log(currentActive);
  return (
    <Box
      w="80%"
      h="85%"
      ml={-220}
      mt={-20}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Box w="100%" h="20%">
        <Avatar mt={8}> </Avatar>
        <Text
          style={{
            display: "inline-block",
            lineHeight: "170%",
            fontWeight: "bolder",
          }}
          mt={8}
          ml={5}
          bg="white"
        >
          {" "}
          Mary Jane
        </Text>
        <Badge
          variant={"solid"}
          style={{ display: "inline-block", lineHeight: "95%" }}
          colorScheme={"green"}
          mt={12}
          ml={-20}
          padding={0.5}
        >
          Listener
        </Badge>
      </Box>
      <Box h="100%" w="40%">
        <IconButton
          variant="unstyled"
          onClick={() => activeChanger("Home")}
          icon={
            <Icon
              as={FaHouseUser}
              mt={8}
              ml={2}
              color={currentActive === "Home" ? "brandRed.500" : "black"}
              className="font-semibold"
              w={6}
              h={6}
            />
          }
        />
        <Text
          style={{ lineHeight: "20%" }}
          mt={1}
          ml={73}
          color={currentActive === "Home" ? "brandRed.500" : "black"}
          className="font-semibold"
        >
          {" "}
          Home{" "}
        </Text>
      </Box>
      <Box h="100%" w="40%">
        <IconButton
          variant="unstyled"
          onClick={() => activeChanger("Session")}
          icon={
            <TimeIcon
              w={6}
              h={6}
              mt={-180}
              ml={2}
              color={currentActive === "Session" ? "brandRed.500" : "black"}
            />
          }
        />
        <Text
          ml={67}
          mt={-170}
          className="font-semibold"
          style={{ lineHeight: "760%" }}
          color={currentActive === "Session" ? "brandRed.500" : "black"}
        >
          {" "}
          Session{" "}
        </Text>
      </Box>
      <Box h="100%" w="40%">
        <IconButton
          variant="unstyled"
          onClick={() => activeChanger("Settings")}
          icon={
            <SettingsIcon
              w={5}
              h={5}
              mt={-400}
              ml={2}
              color={currentActive === "Settings" ? "brandRed.500" : "black"}
            />
          }
        />
        <Text
          className="font-semibold"
          mt={-247}
          ml={67}
          style={{ lineHeight: "350%" }}
          color={currentActive === "Settings" ? "brandRed.500" : "black"}
        >
          {" "}
          Settings{" "}
        </Text>
      </Box>
    </Box>
  );
}
