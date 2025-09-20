import User from '../assets/user.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScrollReveal from "../components/ScrollReveal";


export default function Testimonial() {
  const testimonials = [
    {
      image:{User}, 
      name: "Gbolahan Uche",
      title: "client",
      message: "Finding our dream home felt overwhelming until we met this team. They guided us through every step with patience and professionalism. We couldn’t be happier!",
    },
    {
      name: "Raymond Doe",
      title: "Client",
      message: "I was relocating to Lagos from Abuja for work, and they helped me find a great apartment quickly. Their local knowledge and responsiveness were impressive.",
    },
    {
      name: "daniel Obi",
      title: "Client",
      message: "As a property investor, I’ve worked with several agencies. This team stands out with their honesty, transparency, and deep market insight",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ScrollReveal direction='up'  >
    <section className=" bg-gray-100 border-none my-[2rem] rounded-[1rem] py-12 m-[1rem] px-4">
        <h2 className="text-xl text-center ">Our Testimonials</h2>
      <h2 className="text-3xl font-bold text-center mb-10">What Our Client say about us </h2>
      
      <div className="md:grid hidden grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-right align-center flex justify-between mb-5">
                <img src={User} alt="" className='w-[4rem] rounded-full bg-green-200 p-1'/>
                <div className=''>
                    <p className="text-sm font-semibold text-gray-900 ">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                </div>
            </div>
            <p className="text-gray-700 italic mb-4">"{t.message}"</p>
          </div>
        ))}
      </div>
      <div className="block md:hidden max-w-sm mx-auto z-[-1]">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
                <p className="italic mt-2">"{t.message}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </ScrollReveal>
  );
}
