import { Box, Center, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import HomeTalker from "./HomeTalker";
import RequestSession from "./RequestSession";
import SidebarTalker from "./SidebarTalker";
import SessionTalker from "./SessionTalker";
import SettingsTalker from "./SettingsTalker";


export default function DashboardTalker() {
  const [active, changeActive] = useState("Home"); // can only be Home, Session, or Settings

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
        <SidebarTalker currentActive={active} activeChanger={changeActive} />

        <Divider
          orientation="vertical"
          ml={-980}
          style={{ backgroundColor: "grey" }}
          height="155%"
        />
        {active === "Home" && <HomeTalker activeChanger={changeActive} />}
        {active === "Session" && (
          <SessionTalker activeChanger={changeActive} />
        )}
        {active === "Request" && (
          <RequestSession activeChanger={changeActive} />
        )}
        { active === "Settings" && <SettingsTalker activeChanger={changeActive}/> }
      </Center>
    </Box>
  );
}
