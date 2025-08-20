import { useState } from "react";

export default function BuyPropertyCard({ properties = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handlesExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (!properties || properties.length === 0) {
    return (
      <section className="w-full p-4">
        <div className="text-center text-gray-500 py-8">
          No properties match your search.
        </div>
      </section>
    )
  }

  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p, i) => {
          const isExpanded = expandedIndex === i;
          const shortText =
            p.description && p.description.length > 100
              ? p.description.slice(0, 50) + "..."
              : p.description;

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={p.Image}
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="text-green-700 font-bold text-md">{`₦${p.price}`}</p>
                <p className="text-gray-600 text-sm">{`📍${p.address}`}</p>
                <p className="text-gray-600 text-sm">{`📞${p.phone}`}</p>
                <p className="text-sm text-gray-700"> {isExpanded ? p.description : shortText} </p> 
                {p.description && p.description.length > 100 && (
                  <span
                    onClick={() => handlesExpand(i)}
                    className="inline-block mt-2 text-green-600 text-sm font-medium hover:underline cursor-pointer"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
