// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { RouterPath } from "@/shared/constants/router.const";
// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//         name: "Credentials",
//         credentials: {
//             username: {},
//             password: {}
//         },
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         async authorize(credentials, req){
//              try {
//                const response = await fetch(
//                  "https://dummyjson.com/auth/login",
//                  {
//                    method: "POST",
//                    headers: { "Content-Type": "application/json" },
//                    body: JSON.stringify({
//                      username: credentials?.username,
//                      password: credentials?.password,
//                    }),
//                  }
//                );
//                const user = await response.json();
//                if (response.ok && user) {
//                  return {
//                    id: user.id,
//                    username: user.username,
//                    email: user.email,
//                    token: user.token,
//                  };
//                }
//                return null;
//              } catch (error) {
//                console.error("Error in authorize function:", error);
//                return null;
//              }
//         }
//     })
//   ],
//   callbacks: {
//     jwt: async ({ user, token, trigger, session }) => {
//       if (trigger === "update") {
//         return { ...token, ...session.user };
//       }
//       return { ...token, ...user };
//     },
//     // session: async ({ session, token }) => {
//     //   if (token) {
//     //     session.user.id = token.id as string;
//     //     session.user.username = token.username as string;
//     //     session.user.token = token.token as string;
//     //   }
//     //   return session;
//     // },
//   },
//   pages: {
//     signOut: RouterPath.SIGNIN
//   }
// }
