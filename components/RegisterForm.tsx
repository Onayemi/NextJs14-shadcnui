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
import { PhoneIcon, SendHorizontal } from "lucide-react";
import GithubLoginButton from "./GithubLoginButton";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/app/actions/authActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// export type FormValues = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: number;
//   password: string;
// };

const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be atleast 2")
    .max(45, "First name must be leass than 45")
    .regex(new RegExp("^[a-zA-Z]+$")),
  lastName: z
    .string()
    .min(2, "Last name must be atleast 2")
    .max(45, "Last name must be leass than 45")
    .regex(new RegExp("^[a-zA-Z]+$")),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .refine(validator.isMobilePhone, "Please enter a valid phone number"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(50, "Password must be less than 50 characters"),
  // confirmPassword: z
  //   .string()
  //   .min(6, "Password must be atleast 6 characters")
  //   .max(50, "Password must be less than 50 characters"),
  // accepted: z.literal(true, {
  //   errorMap: () => ({
  //     message: "Please accept all terms",
  //   }),
  // }),
});
// })
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Password and confirm password does not match! ",
//   path: ["confirmPassword"],
// });

type InpuType = z.infer<typeof FormSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InpuType>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();
  // const form = useForm<FormValues>({
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //   },
  // });

  // function formSubmitHandler(data: FormValues) {
  //   console.log(data);
  // }

  const saveUser: SubmitHandler<InpuType> = async (data) => {
    // console.log({ data });
    // const { username, ...user } = data;
    try {
      const result = await registerUser(data);
      console.log(result);
      toast.success("User added sucessfully!");
      router.push("/login");
      // if (result) {
      // } else {
      //   toast.error("Username or Email Already Exists!");
      // }
    } catch (error) {
      // toast.error("Something went wrong");
      toast.error("Username or Email Already Exists!");
      console.log(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm my-5">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit(saveUser)}>
            <div className="grid gap-2 mb-2">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                // isInvalid={!!errors.firstName}
                {...register("firstName")}
                type="text"
                placeholder="first Name"
              />
              <p className="text-sm text-red-500">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="grid gap-2 mb-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                {...register("lastName")}
                type="text"
                placeholder="last Name"
              />
              <p className="text-sm text-red-500">{errors.lastName?.message}</p>
            </div>
            <div className="grid gap-2 mb-2">
              <Label htmlFor="email">Email</Label>
              <Input {...register("email")} type="email" placeholder="Email" />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className="grid gap-2 mb-2">
              <Label htmlFor="phone">Phone</Label>
              <Input {...register("phone")} type="text" placeholder="Phone" />
              <p className="text-sm text-red-500">{errors.phone?.message}</p>
            </div>
            <div className="grid gap-2 mb-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" {...register("password")} type="password" />
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>
            <Button type="submit" className="w-full mt-3">
              Register
            </Button>
          </form>
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmitHandler)}>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>FirstName</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First name"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>LastName</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Last name" {...field} />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <Button className="w-full mt-2">Register</Button>
            </form>
          </Form> */}

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
            <Button variant="outline">
              {/* <Icons.google className="mr-2 h-4 w-4" /> */}
              <SendHorizontal className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/login" className="underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
