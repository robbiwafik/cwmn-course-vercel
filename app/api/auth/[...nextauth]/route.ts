import NextAuth from "next-auth/next";
import { apiAuthProvider } from "../apiAuthProvider";


const handler = NextAuth(apiAuthProvider);
export { handler as GET, handler as POST };
