import { useState } from "react";
import serviceImg from '../assets/serviceimage/meta.jpg'
import propManagement from '../assets/serviceimage/estate-development.avif'
import brokerage from '../assets/serviceimage/property-brokeage.webp'
import advisory from '../assets/serviceimage/advisory.webp'
import marketing from '../assets/serviceimage/estate-marketing.avif'
import mortage from '../assets/serviceimage/finance-mortage.avif'
import Testimonials from '../components/Testimonial.jsx'
import Technicians from '../components/Technicians.jsx'
import CallToAction from "../components/CallToAction.jsx";


export default function Services () {


  const [openSection, setOpenSection] = useState(null);

const handleToggle = (sectionId) => {
  setOpenSection(prev => (prev === sectionId ? null : sectionId));
};



  return (
   <>
   
   <h1 className='pt-[6rem] flex items-center justify-center font-bold text-2xl '>Services we offer here at </h1>
   <p className='pt-[] flex items-center justify-center font-bold text-3xl text-green-500 '>Comfort Properties. </p>
     <span className="italic text-gray-600  mb-10 flex justify-center items-center "> where luxury meet comfort...</span>
  <div className='flex flex-col-reverse md:flex-row justify-between items-center px-[1rem]  rounded p-[.5rem] m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem]'>
    <span className="flex-1">
    <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Property Management</h1>
    <div>
      {openSection === 'propertyManagement' ?(
        <>
      
    <p className="text-md text-gray-600 font-semibold">Have your property managed by our professional, friendly staff.  Management Service includes:</p>
    <ul>
       <li className="text-md text-gray-600 font-semibold">Advertising: on the internet, window display, brochures, etc</li>
      <li className="text-md text-gray-600 font-semibold">Screening tenants, guarantors, & income checks, etc.</li>
      <li className="text-md text-gray-600 font-semibold">Entry & Exit inspections, and 3-4 monthly routine inspections including reports</li>
      <li className="text-md text-gray-600 font-semibold">Tenancy Agreement & all necessary paperwork.</li>
      <li className="text-md text-gray-600 font-semibold">Property maintenance alerts.</li>
      <li className="text-md text-gray-600 font-semibold">Keeping the owner informed regarding property standard, end of lease reviews, etc.</li>
    </ul>
    </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
    Have your property managed by our professional, friendly staff Management service include :
      </p>
      )}
      <button
  onClick={() => handleToggle('propertyManagement')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'propertyManagement' ? 'View Less' : 'View More...'}
</button>
    </div>
    </span>
    <img src={serviceImg} alt="" className="rounded md:flex-1 md:w-1/2 md:h-full"/>
  </div>


     
   <div className='flex flex-col-reverse md:flex-row-reverse justify-between items-center px-[2rem]  border-none rounded p-[1rem] m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem]'>
    <span className="flex-1">
    <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Development & Investment</h1>
    <div>
       {openSection === 'DevelopmentInvestment' ?(
        <>
    <p className="text-xl text-gray-600 font-semibold">Our real estate development/investment services are, but not limited to:</p>
    <ul>
      <li className="text-md text-gray-600 font-semibold">the acquisition of virgin sites for new development; </li>
      <li className="text-md text-gray-600 font-semibold">existing properties for redevelopment; and</li>
      <li className="text-md text-gray-600 font-semibold">rehabilitation of dated properties to meet current functional needs and trends.</li>
      </ul>
      <p className="text-md text-gray-600 font-semibold">When undertaking residential development schemes, we build quality homes with great attention to functionality, space flow efficiency, structural stability, façade and finishing details.<br/>Our homes, typically within nature friendly environment, range from single family units to multi-units development. In our commercial developments, whether office, retail or leisure. We distill our understanding of the functional and complimentary needs of the users into the scheme concept, designs and finishing.<br/> Our aim, in both development undertakings, is to deliver products with strong features of functionality, quality, value and sustainability.<br/> Our development products have continued to enjoy patronage of our chosen markets, whether they are for sale or lease.</p>
      </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
         Our real estate development/investment services are, but not limited to:
      </p>
      )}
      <button
  onClick={() => handleToggle('DevelopmentInvestment')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'DevelopmentInvestment' ? 'View Less' : 'View More...'}
</button>
      </div>
    </span>
    <img src={propManagement} alt="" className="rounded md:flex-1 md:w-1/2" />
  </div> 


   <div className='flex flex-col-reverse md:flex-row justify-between items-center px-[2rem]  border-none rounded p-[1rem] m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem]'>
    <span className="flex-1">
     <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Property Brokerage</h1>
     <div>
       {openSection === 'propertyBrokerage' ?(
        <>
     <p className="text-xl text-gray-600 font-semibold">Our passionate real estate brokers/ sales agents typically assist do the following brokerage services:</p>
     <ul>
      <li className="text-md text-gray-600 font-semibold">Solicit potential clients to buy, sell, and rent properties</li>
      <li className="text-md text-gray-600 font-semibold">Advise clients on prices, mortgages, market conditions, and related information</li>
      <li className="text-md text-gray-600 font-semibold">Compare properties to determine a competitive market price</li>
      <li className="text-md text-gray-600 font-semibold">Generate lists of properties for sale, including details such as location and features</li>
      <li className="text-md text-gray-600 font-semibold">Promote properties through advertisements, open houses, and listing services</li>
      <li className="text-md text-gray-600 font-semibold">Take prospective buyers or renters to see properties</li>
      <li className="text-md text-gray-600 font-semibold">Present purchase offers to sellers for consideration</li>
      <li className="text-md text-gray-600 font-semibold">Mediate negotiations between buyer and seller</li>
      <li className="text-md text-gray-600 font-semibold">Ensure that all terms of purchase contracts are met</li>
      <li className="text-md text-gray-600 font-semibold">Prepare documents, such as loyalty contracts, purchase agreements, and deeds</li>
     </ul>
      </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
         Our real estate development/investment services are, but not limited to:
      </p>
      )}
      <button
  onClick={() => handleToggle('propertyBrokerage')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'propertyBrokerage' ? 'View Less' : 'View More...'}
</button>
     </div>
    </span>
     <img src={brokerage} alt="" className="rounded  md:flex-1 md:w-1/2"/>
   </div>



  <div className='flex flex-col-reverse md:flex-row-reverse justify-between items-center px-[2rem]  border-none rounded p-[1rem] m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem]'>
    <span className="flex-1">
     <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Advisory</h1>
     <div>
      {openSection === 'advisory' ?(
        <>
     <p className="text-md text-gray-600 font-semibold">Our Advisory team have extensive and broad commercial property experience which allows us to provide a number of additional key services to our clients including Acquisition Advice, Strategic Property Reviews, Opinion of Value reports, Sales Coordination and Development Management</p>
     <p className="text-md text-gray-600 font-semibold">We provide advice to a range of clients from “mum and dad” commercial property owners/ investors to large national and international organisations. Often these services go hand-in-hand and there are many examples where we provide ongoing and various services to our valued clients.</p>
     <p className="text-md text-gray-600 font-semibold">We are your trusted property advisor, your eyes, ears and feet on the ground and always have your best interest as our priority. By engaging one of our property experts we will free up your time to focus on the things you do best ….. running your busy life or business.</p>
     <p className="text-md text-gray-600 font-semibold">If you own commercial property or are looking to own commercial property, we are well placed to assist you. In providing the above-mentioned services, our key point of difference is our commitment to providing a professional, proactive, innovative, enthusiastic, and above all “personal” service. If you have any queries concerning your commercial property needs, please contact our advisory team:</p>
      </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
         Our real estate development/investment services are, but not limited to:
      </p>
      )}
      <button
  onClick={() => handleToggle('advisory')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'advisory' ? 'View Less' : 'View More...'}
</button>
     </div>
     </span>
     <img src={advisory} alt="" className="rounded  md:flex-1 md:w-1/2" />
  </div>


  <div className='flex flex-col-reverse md:flex-row justify-between items-center px-[2rem]  border-none rounded p-[1rem]  m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem]'>
    <span className="flex-1">
     <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Estate Marketing & Advertising</h1>
     <div>
      {openSection === 'estateMarketing' ?(
        <>
     <p className="text-md text-gray-600 font-semibold">Chaman Properties offers a comprehensive range of estate marketing and advertising services to help you sell your property quickly and for the best possible price. Our team of experienced professionals will work with you to create a customized marketing plan that will reach your target audience and generate interest in your property. Our services include:</p>
     <ul className="text-md text-gray-600 font-semibold">
      <li>Property valuation: Our team of experienced valuers will assess your property and provide you with a fair and accurate valuation.</li>
      <li>Marketing strategy development: We will work with you to develop a marketing strategy that will reach your target audience and generate interest in your property.</li>
      <li>Listing preparation: We will prepare your property for sale by staging it, taking professional photographs and videos, and creating a marketing brochure</li>
      <li>Online marketing: We will market your property online through a variety of channels, including our website, social media, and property portals</li>
      <li>Print advertising: We can also advertise your property in print media, such as newspapers and magazines.</li>
      <li>Open house coordination: We can coordinate open houses for your property and provide you with feedback from potential buyers.</li>
      <li>Buyer and seller representation: We can represent you as either a buyer or seller in the transaction.</li>
     </ul>
          </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
         Our real estate development/investment services are, but not limited to:
      </p>
      )}
      <button
  onClick={() => handleToggle('estateMarketing')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'estateMarketing' ? 'View Less' : 'View More...'}
</button>
     </div>
     </span>
     <img src={marketing} alt="" className="rounded md:flex-1 md:w-1/2" />
  </div>

  <div className='flex flex-col-reverse md:flex-row-reverse justify-between items-center px-[2rem]  border-none rounded p-[1rem] m-[1rem] md:m-[4rem] border-gray-300 bg-gray-100 md:focus:ring-5 md:focus md:focus:ring-green-500 gap-6 md:pl-[3rem] '>
    <span className="flex-1">
     <h1 className="text-2xl font-bold text-green-500 py-[.7rem]">Estate Finance & Mortage </h1>
     <div>
      {openSection === 'finance' ?(
        <>
     <p className="text-md text-gray-600 font-semibold">Chaman Properties also offers a range of estate finance and mortgage services to help you make the most of your property investment. Our team of experienced professionals can help you find the right mortgage for your needs and budget, and we can also help you with the loan application process. Our services include:</p>
     <ul className="text-md text-gray-600 font-semibold">
      <li>Mortgage advice and guidance: We can provide you with advice on mortgage products and terms, </li>
      <li>and help you find the right mortgage for your needs and budget.</li>
      <li>Loan application assistance: We can help you with the loan application process, including providing you with the necessary documentation and completing the application on your behalf.</li>
      <li>Mortgage pre-qualification: We can pre-qualify you for a mortgage, which will give you an idea of how much you can borrow and what your monthly payments will be.</li>
      <li>Mortgage comparison: We can compare different mortgage products and terms to find the best deal for you.</li>
      <li>Mortgage brokering: We can act as your mortgage broker and negotiate on your behalf with lenders to get you the best possible deal</li>
      <p>If you are looking to sell your property or invest in property, Chaman Properties can help you every step of the way. Contact us today to learn more about our services.</p>
     </ul>
      </>
      ) : (
        <p className="text-md text-gray-600 font-semibold">
         Our real estate development/investment services are, but not limited to:
      </p>
      )}
      <button
  onClick={() => handleToggle('finance')}
  className="text-green-500 font-semibold mt-2 cursor-pointer italic"
  
>
  {openSection === 'finance' ? 'View Less' : 'View More...'}
</button>
     </div>
     </span>

     <img src={mortage} alt="" className="rounded  md:flex-1 md:w-1/2 h-[100%]" />
   </div> 

   <div>
     <Technicians />
   </div>
   <Testimonials />
   <CallToAction />

   </>

  )


}