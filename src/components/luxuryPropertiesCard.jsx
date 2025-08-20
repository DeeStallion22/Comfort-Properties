
import { Link } from "react-router-dom";


export default function PropertyCard({ id, title, price, location, image }) {
  return (
    <div className="h-[25rem] ">
        <div className="border-none h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg text-green-500 font-bold">{title}</h2>
            <p className="text-gray-600">{price}</p>
            <p className="text-sm text-gray-500">{location}</p>
            <Link
              to={`/details/${id}`}
              className="text-rose-500 hover:underline mt-2 block"
            >
              View Details ...
            </Link>
          </div>
        </div>
    </div>
  );
}
