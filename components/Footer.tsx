import { MapPin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="pt-20 bg-slate-800 text-white">
      <div className="container flex flex-col sm:flex-row justify-between pag-4 sm:px-4 lg:px-20">
        <div>
          <p className="text-lg font-semibold">Estate</p>
          <p className="max-w-lg text-slate-100 mt-1">
            A great platform to buy, sell and rent your property without any
            agent or commissions.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">Contact</p>
          <address className="text-slate-300 mt-1">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />8 Adebayo Street{" "}
            <br />
            Famous Palmgroove Lagos Nigeria
          </address>
        </div>
      </div>
      <p className="text-center pt-20 pb-4 text-slate-400">
        (c) 2024 copyright reserved
      </p>
    </footer>
  );
}
