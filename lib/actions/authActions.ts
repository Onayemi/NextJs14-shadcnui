"use server";

import { NextResponse } from "next/server";
// import { User } from "@prisma/client";
import prisma from "../prisma";
import bcrypt from "bcryptjs";

// export async function registerUser(user: Omit<User, "id" | "username">) {
export async function registerUser(formData: any) {
  try {
    console.log(formData);
    const exists = await prisma.user.findUnique({
      where: { email: formData.email },
    });

    if (exists) {
      return NextResponse.json(
        { message: "Username or Email Already Exists!" },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(formData.password, 10);
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: hashedPassword,
    };
    const result = await prisma.user.create({
      data: userData,
    });

    // const { password: newUserPassword, ...rest } = result;
    // return NextResponse.json(
    //   { user: rest, message: "User created successfully" },
    //   { status: 201 }
    // );
  } catch (error) {
    console.log("Error while Registeing", error);
    return NextResponse.json(
      { message: "Error Occured While Registering" },
      { status: 500 }
    );
  }
}
