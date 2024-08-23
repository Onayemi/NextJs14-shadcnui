import React from "react";
import { ConceptsHeading1, ConceptsHeading2 } from "./Concepts";
import PropertyCard from "./PropertyCard";

export const propertiesList = [
  {
    id: "pro_1",
    name: "123 martin str. Anytome, USA",
    price: 1500,
    rating: 2,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/Gallery_0152.jpg",
  },
  {
    id: "pro_2",
    name: "8 Adebayo str. Anytome, USA",
    price: 1600,
    rating: 5,
    sqft: 500,
    beds: 3,
    baths: 3,
    image: "/Gallery_0152.jpg",
  },
  {
    id: "pro_3",
    name: "8 Adebayo str. Anytome, USA",
    price: 1800,
    rating: 3,
    sqft: 600,
    beds: 4,
    baths: 3,
    image: "/Gallery_0152.jpg",
  },
  {
    id: "pro_4",
    name: "8 Adebayo str. Anytome, USA",
    price: 2400,
    rating: 3,
    sqft: 1000,
    beds: 4,
    baths: 3,
    image: "/Gallery_0152.jpg",
  },
  {
    id: "pro_5",
    name: "8 Adebayo str. Anytome, USA",
    price: 1900,
    rating: 3,
    sqft: 500,
    beds: 4,
    baths: 3,
    image: "/Gallery_0152.jpg",
  },
  {
    id: "pro_6",
    name: "8 Adebayo str. Anytome, USA",
    price: 1800,
    rating: 5,
    sqft: 600,
    beds: 4,
    baths: 3,
    image: "/Gallery_0152.jpg",
  },
];
export default function Features() {
  return (
    <div className="container py-20 text-center">
      <ConceptsHeading1 heading="Features Properties" />
      <div className="text-muted-foreground">
        <ConceptsHeading2 heading2="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
        {propertiesList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
