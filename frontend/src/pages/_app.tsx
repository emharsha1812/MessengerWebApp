import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo-client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
