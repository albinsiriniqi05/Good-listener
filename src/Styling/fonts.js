import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'brandHeading';
        src: url('./Resources/casual.tff') format('truetype');
      }
      `}
  />
);

export default Fonts;
