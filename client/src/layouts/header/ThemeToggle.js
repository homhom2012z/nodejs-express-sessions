import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
