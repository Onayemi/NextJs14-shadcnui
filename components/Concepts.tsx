import React from "react";

export function ConceptsHeading1({ heading }: { heading: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {heading}
    </h1>
  );
}

export const ConceptsHeading2 = ({ heading2 }: { heading2: string }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-3">{heading2}</p>;
};

export default { ConceptsHeading1, ConceptsHeading2 };
