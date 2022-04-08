import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="md" mr={2}>
          <Link href="/">Node.js-Auth-Sessions</Link>
        </Heading>
        <ChakraLink
          href={"https://github.com/homhom2012z/nodejs-express-sessions"}
          target={"_blank"}
        >
          source
        </ChakraLink>

        <Box marginLeft="auto">
          <Stack direction={{ base: "row" }} spacing={4}>
            <ThemeToggle />
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
