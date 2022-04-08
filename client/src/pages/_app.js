import { ChakraProvider } from "@chakra-ui/provider";
import Head from "next/head";
import theme from "../styles/theme";
import Layout from "../layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>Node.js Auth Sessions</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
