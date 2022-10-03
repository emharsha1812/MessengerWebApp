const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      const { username } = args;
      console.log("HEY AT THE API!! 🔥 🔥 🔥", username);
    },
  },
};

export default resolvers;
