import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <div>
      <form
        className="bg-gray-800 p-6 rounde shadow-md"
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-400">Sign In</h2>
        <Button
          className="full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign In with Github
        </Button>
      </form>
    </div>
  );
}
