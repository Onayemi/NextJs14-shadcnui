"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import GithubLoginButton, { GoogleLoginButton } from "./GithubLoginButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  callbackUrl?: string;
}
const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

type InpuType = z.infer<typeof FormSchema>;

export default function LoginForm(props: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InpuType>({
    resolver: zodResolver(FormSchema),
  });

  // const form = useForm<InpuType>({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const router = useRouter();

  const onSubmit: SubmitHandler<InpuType> = async (data) => {
    try {
      console.log({ data });
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        // callbackUrl: "/dashboard",
      });
      console.log(result);
      if (!result?.ok) {
        toast.error("Incorrect credentials");
        // toast.error(result?.error);
        // return;
      }
      // router.push(props.callbackUrl ? props.callbackUrl : "/dashboard");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Username or Email Already Exists!");
      console.log(error);
    }
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="text"
                placeholder="m@example.com"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                {...register("password")}
                type="password"
                placeholder="*******"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {/* Login */}
              {isSubmitting ? "Signing in ..." : "Login"}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}

          <div className="grid grid-cols-2 gap-6">
            <GithubLoginButton />
            {/* <Button variant="outline">
              <SendHorizontal className="mr-2 h-4 w-4" />
              Google
            </Button> */}
            <GoogleLoginButton />
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
