import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { setCookie } from "cookies-next";
import User from "./models/User";
import bcrypt from "bcryptjs";
import dbConnect from "./lib/dbConnect";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";
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
    // async signIn({ user, req, res }) {
    //   if (!req || !res) {
    //     console.error("Missing req or res object in signin callback");
    //     return false;
    //   }
    //   const jwtToken = jwt.sign(
    //     { id: user._id, email: user.email },
    //     process.env.JWT_SECRET,
    //     { expiresIn: "1h" }
    //   );

    //   // Debugging to check JWT token generation
    //   console.log("Generated JWT token:", jwtToken);
    //   // Set JWT token in cookies
    //   setCookie("token", jwtToken, {
    //     req, // Pass req and res
    //     res,
    //     maxAge: 60 * 60 * 24, // 1 day expiration
    //     httpOnly: false,
    //     secure: process.env.NODE_ENV === "production",
    //     path: "/",
    //   });

    //   console.log("Custom token set in cookies");

    //   return true; // Indicate successful sign-in
    // },
  },
  secret: process.env.AUTH_SECRET, // Ensure this is set in your .env
});
