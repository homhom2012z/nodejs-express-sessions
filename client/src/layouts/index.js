import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Box margin={"0 auto"} maxWidth={"xl"} transition={"0.5s ease-out"}>
        <Box margin={8}>
          <Header />
          <Box as="main" marginY={22}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
