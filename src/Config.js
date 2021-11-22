import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const theme = extendTheme({ config, fonts });

export default theme;
