import { ConceptsHeading1, ConceptsHeading2 } from "@/components/Concepts";
import Modal from "@/components/Modal";
import React from "react";

export default function ConceptsPage() {
  return (
    <div className="py-4 px-8">
      <ConceptsHeading1 heading="Welcome to Remlex Tech" />
      <ConceptsHeading2
        heading2="The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax."
      />
      <div className="py-4">
        <Modal />
      </div>
    </div>
  );
}
