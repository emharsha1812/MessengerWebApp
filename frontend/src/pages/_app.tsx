import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
