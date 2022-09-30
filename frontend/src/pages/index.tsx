import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data } = useSession();

  console.log("HERE IS DATA", data);

  return <Box border="1px solid red">Here is a box</Box>;
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
