import CognitoProvider from "next-auth/providers/cognito";
import process from "process";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID as string,
      clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
      issuer: process.env.COGNITO_DOMAIN,
      checks: "nonce",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  debug: true,
};
