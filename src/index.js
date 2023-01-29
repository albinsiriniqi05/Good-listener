import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./Styling/fonts";
import "@fontsource/playfair-display/400.css";
import "@fontsource/inter/400.css";
import theme from "./Styling/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
);
