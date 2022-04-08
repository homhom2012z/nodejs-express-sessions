import { Box, Button, Image, Link, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Stack spacing={4} align="center">
        <Box mt={8} mb={4}>
          <motion.div
            animate={{ y: 20, scale: 0.97 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <Box mb={4}>
              <Image
                src="/Invoice-amico.svg"
                width={400}
                height={400}
                alt="Launching Illustration"
              />
            </Box>
          </motion.div>

          <Text textAlign="center" fontSize="xs">
            <Link
              href="https://www.freepik.com/stories"
              isExternal
              rel="noopener noreferrer"
            >
              Illustration by Freepik Stories
            </Link>
          </Text>
        </Box>

        <Box
          textAlign={{ base: "center", md: "center" }}
          alignItems="center"
          minHeight="20vh"
          gap={8}
          mb={8}
          w="full"
          marginTop={8}
        >
          <Stack marginY={2} direction={{ base: "column" }} align={"center"}>
            <Button
              marginTop={2}
              as="a"
              href="/login"
              size="sm"
              w={"-webkit-fit-content"}
            >
              Login
            </Button>
            <Button
              marginTop={2}
              as="a"
              href="/register"
              size="sm"
              w={"-webkit-fit-content"}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
