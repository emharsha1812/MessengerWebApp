// import * as React from "react";
import { signIn } from "next-auth/react";
import { Button, Center, Text, Stack, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useState } from "react";

interface AuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<AuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    try {
    } catch (error) {}
  };

  return (
    // <div>
    //   Auth
    //   <Button onClick={() => signIn("google")}>Login</Button>
    // </div>
    <Center height="100vh" border="3px solid red">
      <Stack align={"center"} spacing={6}>
        {session ? (
          <>
            <Text>Create a Username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button width="100%" onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">iMessage</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image
                  height="20px"
                  width="20px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="google"
                />
              }
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
