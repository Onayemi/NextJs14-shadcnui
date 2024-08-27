import { Loader } from "lucide-react";
import { Button } from "./ui/button";

export default function LoadingButton({ pending }: { pending: boolean }) {
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        "Sign In"
      )}
    </Button>
  );
}
