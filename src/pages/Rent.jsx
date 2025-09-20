import { useState } from 'react';
import RentPropertyCard from '../components/RentPropertyCard'
import Testimonials from '../components/Testimonial.jsx';
import CallToAction from "../components/CallToAction.jsx";
import House from '../assets/real-estate-photo.png'

export default function Rent () {

   const rentproperties = [
    {
      image: House,
      title: 'Big converted Studio apartment',
      price: '2,500,000',
      address: 'Grace Court In Royal Prime Estate Lekki Phase 2 Lekki Lagos',
      phone: '0901234XXXX',
      type:'Apartment',  
      bedroom:1,
      id: 1,
      description:
        'New Listings ?? ????* *??(2nd duplex on the left), Grace court, Royal pine gate 1, orchid, Lekki.* Big well converted studio apartment with 3 burner gas and wardrobe Rent 2.5M Alc 10% each Sc 400k 18hrs minimum electricity ?? Pay and move in TR 1/08/25',
    },

     
    {
      image: House,
      title: '3 Bedroom Apartment',
      price: '35,000,000',
      address: ' Bourdillon Ikoyi Lagos',
      phone: '0901234XXXX',
      type:'apartment',  
      bedroom:3,
      id: 2,
      description:
        'All rooms ensuite, swimming pool, ample parking, elevator',
    },
    {
      image: House,
      title: '1 bedroom apartment',
      price: '3,650,000',
      address: ' Lekki Phase 1 Lekki Lagos',
      phone: '0901234XXXX',
      type:'apartment',  
      bedroom:1,
      id: 3,
      description:
        'Very Specious Studio /Mini Apartment with Big kitchen And Big Balcony at Lekki Phase available for rent. Rent 3,650,000 SC 250k Agreement 365k Agent 365k',
    },


    {
      image: House,
      title: '2 bedroom apartment @ osapa London',   
      price: '8,000,000',
      address: ' Osapa London Lekki Lagos',
      phone: '0901234XXXX',
      type:'apartment',  
      bedroom:2,
      id: 4,
      description:
        '2 Bedroom Apartment Lekki Osapa/Agungi, In a gated environment 18 Hours Light, Swimming pool, Apple parking spacez, gym',
    },


    {
      image: House,
      title: 'Very Standard 2 Bedroom Apartment ',
      price: '5,000,000',
      address: ' Chevron Lekki Lagos',
      phone: '0901234XXXX',
      type:'apartment',  
      bedroom:2,
      id: 5,
      description:
        '5 Service Charge Monthly 70,000(covers cleaning, waste and water treatment, Generator, diesel fee, prospective occupant is advices to pay 3months upfront), 6 Nepa Light and Generator which gives only 24 hrs of Light Daily',
    },


     {
      image:  House,
      title: 'Luxury Furnished 5 Bedroom Fully Detached Duplex + Bq ',
      price: '30,000,000',
      address: ' Osapa London Lekki Lagos',
      phone: '0901234XXXX',
      type:'house',  
      bedroom:5,
      id: 6,
      description:
        'Luxury and spacious 5 Bedroom fully detached duplex with BQ and Central Generator in Osapa London, Lekki Lagos Rent: N30million per annum Agency fee : 10% Legal: 10% Caution: 10% Just come with your clothes',
    },


     {
      image: House,
      title: '4 bedroom semi detached Duplex With Bq ',
      price: '16,000,000',
      address: '  Ikate Lekki Lagos',
      phone: '0901234XXXX',
      type:'house',  
      bedroom:4,
      id: 7,
      description:
        '4 Bedroom semi detached duplex with Bq Location : Ikate, Lekki, Lagos caution and Agency 20%',
    },


     {
      image: House,
      title: '4 Bedroom Duplex ',
      price: '10,000,000',
      address: '  Ogunlana Surulere Lagos',
      phone: '0901234XXXX',
      type:'house',  
      bedroom:4,
      id: 8,
      description:
        '4 bedroom Duplex Alone in a Compound at off Ogunlana Drive...For Commercial Use only...10m yearly rent',
    },


     {
      image: House,
      title: 'Well Built 4 Bed Semi Detached With Spacious Rooms',
      price: '9,000,000',
      address: ' Chevron Lekki Lagos',
      phone: '0901234XXXX',
      type:'house',  
      bedroom: 4,
      id: 9,
      description:
        'A neat and luxury 4bed room semi dictached duplex in a shared compound available for rent in a secure estate inside osapa. Price Breakdown; Rent 9m Agency 10% Legal 10% Caution 10% Service charge 70k per month ',
    },


     {
      image: House,
      title: '4 Bedroom Semi Detached Duplex',
      price: '8,500,000',
      address: ' Ikota Lekki Lagos',
      phone: '0901234XXXX',
      type: 'house',  
      bedroom:4,
      id: 10 ,
      description:
        '',
    },
    
  ];

  const  [searchProperty, setSearchProperty] = useState('');
  const [dropDown, setDropDown] = useState('All Types');
  const [bedNumber, setBedNumber] = useState('All');
  

  const handlesChange = (e) => {
    setBedNumber(e.target.value);
  }


  const typeProperties = dropDown === 'All Types' ? rentproperties : rentproperties.filter((property) => property.type.toLowerCase() === dropDown.toLowerCase())


   const filteredproperties = typeProperties.filter((property) => {
    const input= searchProperty.toLowerCase()
    const title = property.title.toLowerCase()
    const address = property.address.toLowerCase()
    const searchType = title.includes(input) || address.includes(input)
    const searchBed = bedNumber === 'All' || property.bedroom === parseInt(bedNumber);
    
    
    return searchType && searchBed
  })

  

  return (
    <>
    <div className='relative flex md:text-center md:items-center  justify-center'>
      <img src="https://media.istockphoto.com/id/1335296835/photo/close-up-focus-on-keys-smiling-woman-real-estate-agent-selling-apartment.webp?a=1&b=1&s=612x612&w=0&k=20&c=1YOfszPewzmgVPgTvMAAUCnkDM2FzyOfXDPwlizKVi0=" 
      className="w-full h-[450px] md:h-[450px] object-cover bg-center flex items-center justify-center brightness-60 " 
        alt="" />
      <h1 className="absolute bottom-70 text-3xl text-green-500 text-center md:text-5xl "
      style={{ textShadow: '1px 1px 4px rgba(255, 255, 255, 0.7)' }}
      >Rent you properties here at Comfort Properties</h1>
      <p className="absolute bottom-65 md:bottom-60  text-shadow-lg text-gray-200 text-center items-center flex md:text-3xl italic">Find your perfect rental home anywhere in lagos</p>


      <div className='absolute grid place-items-center min-h-screen inset-7 md:inset-0 top-[-28px] md:top-10'>
        <form action="" className='grid gap-3 max-w-[70rem] w-full p-6 rounded-lg grid-cols-1 md:grid-cols-3'>
   
        <label htmlFor=""
        className=' text-left w-full flex flex-col md:w-full text-gray-100'>Search property :
        <input 
        value={searchProperty}
        onChange = {(e)=> setSearchProperty(e.target.value)}
        placeholder="search by location or title ..."
        type="text" 
        className="border text-gray-100 focus:ring-green-200 focus:ring-2 border outline-none border-gray-300 shadow-lg px-4 py-2 rounded-md w-full md:w-[20rem] md:text-gray-200"/>
        </label>


        <label htmlFor=""
        className='text-left flex flex-col w-full md:w-full text-gray-100'> Select Property Type :
        
            <select 
            name="Property Type" 
            id=""
            value={dropDown}
            onChange={(e) => setDropDown(e.target.value)}
            className="focus:ring-green-200 focus:ring-2 border outline-none border-gray-300 shadow-md hover:shadow-lg  px-4 py-2 rounded-md w-full md:w-[20rem] px-[rem] md:text-gray-200">
              <option value="All Types">All Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Bungalow">Bungalow</option>
            </select>
        </label>
        <label 
        className=' text-left flex flex-col w-full md:w-full text-gray-100'
        htmlFor=""> Bed No:
            <select 
            name="Bedrooms"
            id=""
            value={bedNumber}
            onChange={handlesChange}
            className="focus:ring-green-200 focus:ring-2 border outline-none border-gray-200 shadow-2xl px-4 py-2 rounded-md w-full md:w-[20rem] md:text-gray-200">
              <option value="All" defaultValue>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </label>

        <input type="number" 
        name="" 
        id=""
        max='100,000,000' 
        min='1,000,000' />

        </form>
      </div>
    </div>
    <div className=' md:w-1/3 md:ml-[28rem] animate-bounce bg-gray-200 flex items-center justify-center font-bold text-2xl py-5  border-none shadow-lg rounded-lg mx-15 m-5 mt-10 '>
      Properties for rent
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {filteredproperties.map((rentproperty )=> {
      return (
        <RentPropertyCard key={rentproperty.id} rentproperty={rentproperty} />
      )
    }
    )}
   
    </div>
     <Testimonials />
     <CallToAction />
    </>
  ) 
}
