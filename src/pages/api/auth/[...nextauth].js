import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      Credentials({
        async authorize(credentials) {
          try {
            const response = await fetch(
              process.env.NEXT_PUBLIC_API_AUTH_LOGIN,
              {
                method: "POST",
                body: JSON.stringify({
                  name: credentials.username,
                  password: credentials.password,
                }),
                headers: {
                  "content-type": "application/json",
                },
              }
            );

            const cookies = response.headers["set-cookie"];

            res.setHeader("Set-Cookie", cookies);

            return response.data;
          } catch (error) {
            console.log(error);
            throw Error(error.response);
          }
        },
      }),
    ],
  };
};

export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
