import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function OurStory() {
  return (
    <div className="container pt-20 pb-16 grid lg:grid-cols-2 gap-16">
      <div className="relative h-fit w-fit">
        <Image
          src="/Gallery_0173.jpg"
          alt="picture 1"
          width={400}
          height={400}
          className="object-cover"
        />
        <Image
          src="/Gallery_0152.jpg"
          alt="picture 1"
          width={250}
          height={250}
          className="object-cover absolute top-1/2 left-1/2 border-4 hidden lg:block"
        />
      </div>
      <div>
        <p className="font-semibold mb-1 text-primary">Our Story</p>
        <p className="text-3xl mb-2">Efficieny. Transparency. Control</p>
        <p className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
          itaque veniam numquam, dignissimos aspernatur vel, velit eligendi
          omnis molestiae ex laboriosam delectus officiis tenetur enim illum
          nemo, ipsa rem.
        </p>
        <Button>Read more</Button>
      </div>
    </div>
  );
}
