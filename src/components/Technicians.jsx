const technicians = [
  {
    name: "Daniel Udeh",
    service: "Plumber",
    phone: "234901232345",
    message: "Hello, I need help with plumbing Service.",
  },


  {
    name: "osas Woody",
    service: "Electrician",
    phone: "2349048947208",
    message: "Hello, I need help with electrical wiring.",
  },


  {
    name: "Victor Web",
    service: "Interior Decor",
    phone: "2348098765432",
    message: "Hello, I need help with Interior Decor.",
  },


  {
    name: "perry winkle",
    service: "CCTV Installation",
    phone: "2348098765432",
    message: "Hello, I need help with CCTV Installation.",
  },


  {
    name: "Ikorodu Femi",
    service: "Generator Repair",
    phone: "2348098765432",
    message: "Hello, I need help with generator Repair.",
  },


  {
    name: "Gablin Fat",
    service: "Janitor",
    phone: "2348098765432",
    message: "Hello, I need help with janitor service.",
  },
   

  {
    name: "Ridwan stingy",
    service: "AC Installation",
    phone: "2348098765432",
    message: "Hello, I need help with Ac Installation.",
  },


  {
    name: "Officer",
    service: "Security service",
    phone: "2348098765432",
    message: "Hello, I need help with security service.",
  },

  {
    name: "Da Silva",
    service: "Movers And Relocator",
    phone: "2348098765432",
    message: "Hello, I need help with Movers and relocator.",
  },

];

export default function TechnicalServices() {
  return (
    <div className="py-12 px-3 md:px-16 bg-gray-100 rounded-[1rem] mx-[1rem] md:mx-[3rem]">
      <h1 className="text-3xl font-bold text-green-500 mb-8 flex items-center justify-center">Technical Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {technicians.map((tech, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-xl hover:ring-2 hover:ring-green-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{tech.name}</h2>
              <p className="text-gray-600">{tech.service}</p>
            </div>

            <a
              href={`https://wa.me/${tech.phone}?text=${encodeURIComponent(tech.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
