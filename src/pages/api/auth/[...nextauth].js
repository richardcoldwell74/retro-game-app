import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

const CreateNextUserByEmail = gql`
  mutation CreateNextUserByEmail($email: String!, $password: String!) {
    newUser: createNextUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async ({ email, password }) => {
        const { user } = await client.request(GetUserByEmail, {
          email,
        });

        if (!user) {
          const { newUser } = await client.request(CreateNextUserByEmail, {
            email,
            password: await hash(password, 12),
          });

          return {
            id: newUser.id,
            username: email,
            email,
          };
        }

        const isValid = await compare(password, user.password);

        if (!isValid) {
          throw new Error("Wrong credentials. Try again.");
        }

        return {
          id: user.id,
          username: email,
          email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
