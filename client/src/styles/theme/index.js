import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  ...chakraTheme,
  config,
};

const customTheme = extendTheme(overrides);

export default customTheme;
