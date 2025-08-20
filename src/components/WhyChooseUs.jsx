
import { whyChooseUsFeatures } from '../Data/WhyChooseUsFeatures.js'

export default function WhyChooseUs({ features }) {

  const list = features && features.length ? features : whyChooseUsFeatures

  return (
    <section aria-labelledby="why-choose-heading" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="why-choose-heading" className="text-3xl font-bold text-center text-gray-500  text-shadow-lg mb-8">
          Why Choose Us
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-200 rounded-[2rem]">
          {list.map((f, i) => (
            <li key={i} >
              <article className="h-full bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <f.icon/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{f.description}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
