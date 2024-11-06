import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { setCookie } from "cookies-next";
import User from "./models/User";
import bcrypt from "bcryptjs";
import dbConnect from "./lib/dbConnect";

export const {
  handlers: { GET, POST },
  auth,
  session,
  useSession,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
    updateAge: 60 * 60 * 24, // 1 day
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        await dbConnect();
        try {
          const user = await User.findOne({ email });
          if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error.message || "Authorization failed");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to JWT if available
      if (user) {
        token.id = user._id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token info to session
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: "token",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Only set cookies on production
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        maxAge: 60 * 60 * 24,
      },
    },
  },
  secret: process.env.AUTH_SECRET, // Ensure this is set in your .env
});
