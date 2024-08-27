import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Pasword is required")
    .min(8, "Pasword must be more than 8 caracter")
    .max(32, "Pasword must be less than 32 caracter"),
});
