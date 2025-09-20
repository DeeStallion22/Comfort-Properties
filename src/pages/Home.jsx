import { properties } from "../Data/propertiesDetails.js";
import { Link } from "react-router-dom";
import PropertyCard from '../components/luxuryPropertiesCard.jsx'
import Testimonials from '../components/Testimonial.jsx';
import { whyChooseUsFeatures } from "../Data/WhyChooseUsFeatures.js";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ServiceSection from '../components/ServiceSection.jsx'
import CallToAction from '../components/CallToAction.jsx'
import ScrollReveal from "../components/ScrollReveal";




export default function Home() {
  return <section>
    <div className="relative  md:h-screen h-[400px] md:space-y-8 flex justify-center items-center text-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3J0bGV0JTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
     <div className="inset-0 absolute h-full bg-black/50"></div>
      
      <div className=" flex flex-col z-[1000] bottom-18 text-gray-200 p-1 md:p-[2rem] text-center  ">
         <h1 className="text-2xl text-shadow-lg  pt-[rem] shadow-green-200 md:text-5xl md:font-bold md:text-shadow-lg ">Find Your Dream Home with </h1>
         <p className="text-2xl font-bold text-green-600 text-shadow-lg shadow-black md:text-5xl">comfort Properties</p>
         <p className="italic text-sm  text-slate-300 md:italic ">where luxury meet comfort</p>
      </div>
    </div>
    <ScrollReveal direction='up' delay={.3}>
    <div className="md:py-[4rem] ">
      <h1 className="flex justify-center font-bold text-3xl pt-[2rem] text-gray-500 text-shadow-lg">Featured Homes</h1>
     <div className='flex overflow-x-auto scroll-smooth snap-x scrollbar-hide snap-mandatory gap-6 p-6 md:p-[3.5rem]'>
      
        {properties.map((property) => (
          <Link to={`/property/${property.id}`}
          className="snap-start flex-shrink-0 w-[300px] h-[400px] pl-[1rem]" >
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            location={property.location}
            image={property.image}
        />
        </Link>
      ))}
     </div>
    </div>
    </ScrollReveal>

    <WhyChooseUs features={whyChooseUsFeatures}/>
    <ServiceSection />
    <Testimonials />
    <CallToAction />
    </section>
}