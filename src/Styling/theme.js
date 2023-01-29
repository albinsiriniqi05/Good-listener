import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brandRed: {
      500: "#F5553D",
    },
    brandGreen: {
      500: "#19C788",
    },
    brandBlue: {
      500: "#72A5E4",
    },
    brandGray: {
      700: "#2D3748",
      500: "#718096",
    },
  },
  fonts: {
    heading: `'brandHeading'`,
    body: `'inter'`,
  },
  components: {
    Heading: {
      variants: {
        normal: {
          fontWeight: "thin",
        },
      },
      defaultProps: {
        variant: "normal",
      },
    },
  },
});

export default theme;
