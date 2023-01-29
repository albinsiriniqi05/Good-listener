import React from "react";
import { Image } from "@chakra-ui/react";
import logo from "../Resources/logo.png";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box w="calc(100vw)" h="calc(6vh)" className="flex items-center">
      <Image ml={6} boxSize="7" src={logo} alt="Logo" />
      <Heading ml={1} fontSize="xl" color="brandGray.700">
        <Link to="/">Good Listeners</Link>
      </Heading>
    </Box>
  );
}
