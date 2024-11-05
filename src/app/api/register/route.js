import dbConnect from "@/lib/dbConnect";
import { createUser } from "@/queries/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req) {
  const { name, email, password } = await req.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return new NextResponse("User already exists", { status: 400 });
    }
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    // export const createUser = async (user) => {
    //   try {
    //     await User.create(user);
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // };

    await User.create(newUser);

    // await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }

  return new NextResponse("User has been created", { status: 201 });
}
