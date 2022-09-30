import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { Box } from "@chakra-ui/react";
import Chat from "../components/Chat/Chat";
import Auth from "../components/Auth/Auth";

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log("HERE IS SESSION", session);

  const reloadSession = () => {};

  return (
    <Box>
      {session?.user.username ? (
        <Chat />
      ) : (
        <Auth reloadSession={reloadSession} session={session} />
      )}
    </Box>
  );
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
