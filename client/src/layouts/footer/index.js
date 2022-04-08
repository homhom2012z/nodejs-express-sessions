import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        &copy; {new Date().getFullYear()} -{" "}
        <Link
          href="https://github.com/homhom2012z"
          isExternal
          rel="noopener noreferrer"
        >
          homhom2012z
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
