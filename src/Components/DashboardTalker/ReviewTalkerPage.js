import { Box, Center, Divider } from "@chakra-ui/react";
import React from "react";
import ReviewTalker from "./ReviewTalker";
import SidebarTalker from "./SidebarTalker";
import SessionTalker from "./SessionTalker";

export default function ReviewTalkerPage() {
  return (
    <Box
      h="calc(100vh)"
      w="100%"
      style={{
        minWidth: "1548px",
        maxWidth: "1548px",
        maxHeight: "750px",
        minHeight: "750px",
        position: "relative",
        margin: "0px auto",
      }}
      borderTopWidth="thin"
      borderTopColor="gray.200"
    >
      <Center w="100%" h="100%">
        <SidebarTalker />
        <Divider
          orientation="vertical"
          ml={-980}
          style={{ backgroundColor: "grey" }}
          height="155%"
        />
        <ReviewTalker />
      </Center>
    </Box>
  );
}