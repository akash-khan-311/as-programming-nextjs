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
    async signIn({ user, account, profile }) {
      await dbConnect();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          avatar: user.image,
          role: "user",
          status: "verified",
        });
      }
      return true; // Return true to allow sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.sub;
        token.email = user.email;
        token.role = user.role;
        token.avatar = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.avatar = token.avatar;

      return session;
    },
  },

  cookies: {
    sessionToken: {
      name: "token",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        maxAge: 60 * 60 * 24,
      },
    },
  },
  secret: process.env.AUTH_SECRET,
});
