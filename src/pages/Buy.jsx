import BuyProperty from '../components/BuyPropertyCard.jsx';
import Testimonials from '../components/Testimonial.jsx';
import { useState } from 'react';
import CallToAction from "../components/CallToAction.jsx";

export default function Buy() {
  const properties = [
  {
    Image:
      'https://images.nigeriapropertycentre.com/properties/images/2949357/068628b0e3a257-luxury-3-bedroom-apartment-for-sale-lekki-lagos.jpg',
    title: '3 bedroom flat / apartment for sale',
    price: '160,000,000',
    address: 'Abraham Adesanya, Ajah, Lagos, Nigeria',
    phone: '0901234XXXX',
    type: 'Apartment',
    description:
      'Most exquisite 3 bedroom bedroom apartment in Chevron. This prime estate offers a limited opportunity to own a piece of luxury, with 3 bedroom apartment units available for sale. This prime estate offers a limited opportunity to own a piece of luxury, with 3 bedroom apartment units available for sale: 3 Bedroom Apartment - ₦160,000,000, Initial Deposit - ₦40,000,000, Payment Plan - 0-3 months,Features;Smart home features, Spacious rooms, Swimming pool, Fitness Gym, Lobby,  Elevator,  Fully fitted kitchen, Modern POP ceiling, Detailed finishing, Ample car park, 24/7 security surveillance, Constant power supply.',
  },
  {
    Image:
      'https://images.nigeriapropertycentre.com/properties/images/2780842/067dd99b15d714-luxury-mansion-detached-duplexes-for-sale-lekki-lagos.jpg',
    title: '4 bedroom detached duplex for sale',
    price: '750,000,000',
    address: '9 Susan Orji Street, Royal View Estate, Ikota, Lekki, Lagos, Nigeria',
    phone: '0901234XXXX',
    type: 'Duplex',
    description:
      'Newly Built with a very big compound - Fully detached house with 2 maid rooms in a gated well secured estate.Newly Built with a very big compound - Fully detached house with 2 maid rooms in a gated well secured estate. Location: Northern Foreshore Estate, Chevron Drive, Lekki. Features include: Corner piece property, High double volume living room ceiling, 2room Boys quarters(BQs), Spacious equipped kitchen with a pantry, Dedicated dining section, Spacious bedrooms, Foyer/Ante room, Home office/study, 2 half baths, Stamped concrete floor, Large balconies and massive rooftop terraces with beautiful views, Spacious compound, Laundry room, Gas cooker, oven, microwave, oven, heat extractor, ceiling speakers, etc, 2 Family living rooms, All bedrooms are ensuite with toilets and bathrooms, Remote controlled gate, Carport, Compound space can park 10 cars.',
  },
  {
    Image:
      'https://images.nigeriapropertycentre.com/properties/images/2821023/067fe534ec1f25-massive-5-bedroom-house-detached-duplexes-for-sale-lekki-lagos.jpg',
    title: '5 bedrooms fully detached',
    price: '380,000,000',
    address: 'Megamound Estate, Lekki County, Ikota Lagos.',
    phone: '0901234XXXX',
    type: 'Duplex',
    description:
      '5 bedrooms fully detached for sale in Megamound Estate, Lekki County, Ikota Lagos.All rooms ensuite, Pop ceiling, Fitted kitchen, Chandelier, Floating stairs, Smart home features, Lounge downstairs, Family lounge ( upstairs), Gym room, Swimming pool, Cinema, Concrete floor, Sliding gate, Balcony, Secure estate, Adequate parking( big enough for up to 10 cars), Spacious rooms, Water heater, Spacious compound, Walk-in closet, Walk-in shower, BQ',
  },
  {
    Image:
      'https://images.nigeriapropertycentre.com/properties/images/2857122/0681b42947d856-newly-built-5-bedroom-house-detached-duplexes-for-sale-lekki-lagos.jpg',
    title: '5 bedroom detached duplex for sale.',
    price: '450,000,000',
    address: 'A Highly Secured Estate On Chevron Drive, Lekki',
    phone: '0901234XXXX',
    type: 'Duplex',
    description:
      'Newly Built 5 Bedroom Houses In A Highly Secured Estate On Chevron Drive, Lekki.Features include: 5 En-suite bedrooms, Spacious compound, Maid room / Boys quarter (BQ), Guest toilet, Living rooms/ family lounges on 2 floors, Dining area, TV consoles, Cctv surveillance cameras, Equipped kitchen with a pantry, Refrigerator, washing machine, microwave, oven, Spacious rooms, Automated gate, Walk-in closets, Swimming pool.',
  },
  {
    Image:
      'https://images.nigeriapropertycentre.com/properties/images/2857237/0681b52458b976-newly-built-5-bedroom-house-detached-duplexes-for-sale-lekki-lagos.jpg',
    title: '5 bedroom detched duplex for sale ',
    price: '400,000,000',
    address: 'A Highly Secured Estate On Chevron Drive, Lekki',
    phone: '0901234XXXX',
    type: 'Duplex',
    description:
      'Newly Built 5 Bedroom Houses In A Highly Secured Estate On Chevron Drive, Lekki.Features include:5 En-suite bedrooms, Spacious compound, Maid room / Boys quarter (BQ), Guest toilet, Living rooms/ family lounges on 2 floors, Dining area, TV consoles, Cctv surveillance cameras, Equipped kitchen with a pantry, Refrigerator, washing machine, microwave, ovenSpacious rooms,  Automated gate, Walk-in closets, Swimming pool.',
  },
];


  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All Types');

  const filtered = properties.filter((property) => {
    const title = (property.title ).toLowerCase();
    const address = (property.address ).toLowerCase();
    const input = search.toLowerCase();

    const matchesSearch = title.includes(input) || address.includes(input);
    // if you later have a property.type field, use filterType. For now we keep it simple:
    const matchesType = filterType === 'All Types' || (property.type).toLowerCase() === filterType.toLowerCase();

    return matchesSearch && matchesType;
  });

  return (
    <main className="pt-15 md:pt-[6rem]">
      <div className="text-center items-center justify-center flex relative ">
         <img src="https://images.unsplash.com/photo-1743486780771-afd09eea3624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV5JTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D" 
        className="w-full h-[300px] md:h-[450px] object-cover bg-center flex items-center justify-center brightness-40 " 
        alt="" />
        <h1 className=" absolute md:text-5xl md:bottom-70 bottom-55 text-3xl md:text-4xl font-semibold text-green-500"
        >Buy Properties</h1>
        <p className=" absolute md:bottom-60 md:text-3xl  bottom-35 text-shadow-lg text-gray-200 italic text-xl px-5 mt-2">
          Find your dream home from our curated list of properties across Nigeria.
        </p>
        <div className="flex absolute inset-0  top-40 md:top-50 flex-col md:flex-row items-center justify-between md:justify-center gap-3 pt-5 mb-6 px-[4rem] ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search by location or title..."
          className="focus:ring-green-200 focus:ring-3 text-gray-100  border outline-none border-gray-300 shadow-lg px-4 py-2 rounded-md w-full md:w-1/3"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="focus:ring-green-200 focus:ring-3 text-gray-100 border outline-none border-gray-300 shadow-lg px-4 py-2 rounded-md w-full md:w-1/4 "
        >
          <option>All Types</option>
          <option>Apartment</option>
          <option>Duplex</option>
          <option>Bungalow</option>
        </select>
      </div>
      </div>

     
      <BuyProperty properties={filtered} />

      <div className="p-[1rem] md:px-[5rem] py-[3rem] border-none rounded-[1rem] m-[1rem] my-[2.5rem] shadow-xl focus:ring-3 ring-green-200">
        <div className="text-center py-[2rem]">
          <h1 className="md:text-3xl text-2xl text-center ">
            Begin your property search with <span className="font-bold text-4xl text-green-500">Comfort Properties</span>
          </h1>
          <span className="italic text-sm justify-center">where luxury meet comfort...</span>
        </div>
        <p className="text-lg pb-[1rem] text-gray-600">
          At ComfortProperty.ng, Nigeria smarter search property website, discover the best way to embark on your real estate journey. Browse through thousands of properties for Sale and for Rent with each listing filled with detailed information, maps and photos. Our comprehensive library of listings contains all the different property types - with the latest Flats resale, Executive Duplexes, duplex, Houses for Sale, Commercial Properties.
        </p>
        <p className="text-lg pb-[1rem] text-gray-600">
          *Choosing your next home is a difficult decision. We are here to support you with as much information and tools as you can ask for. If you’re an investor or searching for your next home, the latest property news will certainly help inform your decision. If technical information regarding mortgages and property guides is what you require, or if you are a real estate agent who requires more market insights, browse our portal and you will find all that you need. Find your dream home on Nigeria’s most intelligent property portal, Comfort Property.
        </p>
      </div>

      <Testimonials />
      <CallToAction />
      
    </main>
  );
}
