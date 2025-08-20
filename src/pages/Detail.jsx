// src/pages/PropertyDetails.jsx
import { useParams } from "react-router-dom";
import { properties } from "../Data/propertiesDetails.js";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <p className="p-6 text-red-500">Property not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 pt-[7rem] md:pt-[8rem]">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-2xl text-green-500 font-bold mt-4">{property.title}</h1>
      <p className="text-gray-900">{property.price}</p>
      <p className="text-sm text-gray-700 mb-4">{property.location}</p>
      <p>{property.description}</p>
    </div>
  );
}
