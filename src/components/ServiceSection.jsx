import { shortServices } from "../Data/servicesDataSection.js";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function ShortServicesOverview() {
  return (
    <ScrollReveal direction='right' delay={.5}>
    <section className="bg-gray-50 py-12">

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-shadow-lg"> Our Services</h2>
        <p className="text-gray-600 mb-10">How we help you move faster in real estate.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shortServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                to="/services"
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500" >
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <Icon size={28} className="text-green-600" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors duration-300">View All Services ...
          </Link>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
