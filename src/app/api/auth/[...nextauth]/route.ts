import NextAuth from "next-auth";
import { authOptions } from "./authOptions"; // Import the options from the separate file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
