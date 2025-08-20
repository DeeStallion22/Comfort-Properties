import { useState } from "react"



export default function RentPropertyCard ({rentproperty}){
    const [expand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!expand)
    }
    const shortExpand = rentproperty.description.slice(0, 20) + '...';

    return (
            <div
              
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={rentproperty.image}
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{rentproperty.title}</h3>
                <p className="text-green-700 font-bold text-md">{`₦${rentproperty.price}`}</p>
                <p className="text-gray-600 text-sm">{`📍${rentproperty.address}`}</p>
                <p className="text-gray-600 text-sm">{`📞${rentproperty.phone}`}</p>
                <p className="text-sm text-gray-700"> {expand ? rentproperty.description : shortExpand } </p>
            </div>
            <span
            className=" italic text-green-600 text-sm font-medium hover:underline cursor-pointer pl-[1rem]  "
            onClick={handleExpand}
            >{expand ? 'view Less' : 'view More...'}</span>

            </div>
    )            
}