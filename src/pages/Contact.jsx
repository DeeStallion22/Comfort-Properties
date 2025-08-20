import Map from '../components/Map.jsx'
import ContactImage from '../assets/contact-us.jpg'


export default function Contact() {
  return (
    <section className="pt-20 md:pb-[4rem]">
        <div style={{backgroundImage: `url(${ContactImage})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='flex flex-col h-94 items-center md:h-screen md:mb-[2rem]'>
           <p className="contact text-2xl md:text-4xl pt-4 font-semibold text-shadow-lg shadow-white italic md:my-[2rem]">Contact us</p>
      </div>
      <div>
         <div className="flex flex-col justify-center items-center md:mt-[6rem] md:mb-[3rem]">
            <h1 className="font-bold text-2xl md:text-4xl">Let's Get Started</h1>
            <h1 className="italic text-sm md:text-2xl md;whitespace-nowrap">Property Inquiry Form</h1>
          </div>
        <form action="https://formspree.io/f/mzzvwwor" method='POST' className="form flex flex-col gap-[1rem] px-8 border-1  border-gray-400 rounded-[1rem] shadow-xl p-[1rem] m-[1rem]  md:grid md:grid-cols-2 md:gap-x-[2rem] md:mx-[5rem] pb-[3rem] mb-[4rem] md:px-[3rem] md:py-[3rem]">
          <label htmlFor="name" className="flex font-semibold flex-col">
            Your Name:
            <input 
            id='name'
            name='name'
            type="text" 
            placeholder="Ex.John Doe"
            className="input py-[.5rem] font-medium placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </label>
          <label htmlFor="email"  className="flex font-semibold flex-col">
            <span>Email :</span>
            <input
             id="email"
             name='email'
             type="text"
             placeholder="example@gmail.com" 
             className="input py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </label>
          <label htmlFor=""  className="flex font-semibold flex-col ">
            <span>Phone :</span>
            <input 
            type="number" 
            name='number'
            placeholder="09012345678"
            className="input py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </label>
          <label htmlFor=""  className="flex font-semibold flex-col ">
            <span>Property Type :</span>
            <input 
            type="text"
            name='text'
            placeholder="Select Type" 
            className="input py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </label>
          <label htmlFor=""  className="flex font-semibold flex-col ">
            <span>Budget Range :</span>
            <input
            name='budget'
             type="number"
             placeholder="Select Range" 
             className="input py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow-xl rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </label>
          <label htmlFor="" className="flex font-semibold flex-col ">
            <span>Location Preference :</span>
            <input 
            type="text"
            name='location'
            placeholder="Select Location"
            className="input py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </label>
          <label htmlFor=""
            className="flex font-semibold flex-col flex-1 md:col-span-1">
            <span>Your Message :</span>
            <textarea className="py-[.5rem] placeholder-gray-500 border-none shadow-md px-[.5rem] shadow rounded-[.3rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your message..." name="t extarea" id="" cols="20" rows="5"></textarea>
          </label>
        </form>
      </div>
       <Map />
    </section>
  );
}