import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FormInput() {
  return (
    <>
      <form>
        <div className="flex mb-2 gap-3">
          <Input type="email" placeholder="Email" autoComplete="off" />
          <Input type="text" placeholder="Fullname" autoComplete="off" />
        </div>
        <div className="mb-2">
          <Input type="text" placeholder="Phone" autoComplete="off" />
        </div>
        <div className="mb-2">
          <Input type="password" placeholder="Password" autoComplete="off" />
        </div>
        <div className="mb-2">
          <Button variant="default" className="w-full">
            Continue
          </Button>
        </div>
      </form>
    </>
  );
}
