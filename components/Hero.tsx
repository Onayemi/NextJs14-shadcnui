import React from "react";
import SearchForm from "./SearchForm";
// import { ConceptsHeading1, ConceptsHeading2 } from "./Concepts";

export default function Hero() {
  return (
    <div className="min-h-screen hero flex justify-center items-center">
      <div className="max-w-4xl flex flex-col gap-6 items-center mb-10">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
            Easy Way to Find Your Dream Home
          </h1>
          <p className="text-slate-300 text-center">
            A great platform to buy, sell and rent your property without any
            agent or commissions.
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
