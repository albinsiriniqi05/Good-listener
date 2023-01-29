import { Box, Center, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import HomeListener from "./HomeListener";
import SessionListener from "./SessionListener";
import SidebarListener from "./SidebarListener";
import SettingsListener from "./SettingsListener";
import ReviewTalkerPage from "../DashboardTalker/ReviewTalkerPage";

export default function DashboardListener() {
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
        <SidebarListener currentActive={active} activeChanger={changeActive} />

        <Divider
          orientation="vertical"
          ml={-980}
          style={{ backgroundColor: "grey" }}
          height= "100%"
        />
        {active === "Home" && <HomeListener activeChanger={changeActive}/>}
        { active === "Session" && <SessionListener activeChanger={changeActive}/> }
        {active === "Review" && <ReviewTalkerPage activeChanger={changeActive}/>}
        { active === "Settings" && <SettingsListener activeChanger={changeActive}/> }
      </Center>
    </Box>
  );
}
