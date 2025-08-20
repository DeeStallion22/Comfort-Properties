
import RentPropertyCard from "../components/RentPropertyCard";
import CallToAction from "../components/CallToAction.jsx";
import { useState } from "react";



 function Shortlets () {

const shortletProps = [

{
  image : 'https://images.propertypro.ng/large/2-bedroom-executive-suite-eM3LsPapD9iBHt1iQ8uG.jpeg',
  title : '2 Bedroom Executive Suite',
  price :'160,000',
  id : 1,
  address : ' Ikate, Lekki Ikate Lekki Lagos',
  phone : '09077002261',
  description : 
  'YOU WILL BE REFUNDED YOUR CAUTION FEE DEPOSIT AT CHECK-OUT ONCE INSPECTION CONFRIMS NOTHING IS MISSING OR DAMAGED.Experience Elevated Comfort in This Stunning 2-Bedroom Retreat Unwind in this beautifully furnished 2-bedroom apartment designed for pure relaxation and unforgettable memories. Whether youre staying for a weekend or longer (minimum of 2 nights), youll enjoy top-tier features like 24-hour electricity, treated water, and high-speed WiFi. Each ensuite room offers a serene walk-in shower and elegant POP ceilings, while the spacious living area is equipped with a large smart TV, DSTV, and a PS4 for endless entertainment. Step out onto your private balcony or enjoy a game of snooker before heading to the swimming pool for a refreshing dip. With 24-hour security, ample parking space, and all the comforts you need, this home-away-from-home delivers luxury, fun, and peace of mind—all in one perfect space.' ,
},


{
  image : 'https://images.propertypro.ng/large/three-bedroom-apartment-mplJRgmBYYTJ4tvriaYW.jpg',
  title : '3 Bedroom Apartment',
  price : '160,000',
  id : 2,
  address : 'Allen Avenue Ikeja, Lagos' ,
  phone : '09077002261' ,
  description : 'Three Bedroom Apartment At Allen Ikeja, 160,000 per night,Caution fee is 50,000, Fitted Kitchen, Nice furnishing, House keeping Services,  24 hours lighting, Security Please be informed that caution fee refund is 24-48 hours after check out provided theres no damage. PLEASE NO GET TOGETHER IS ALLOWED.' ,
},

{
  image : 'https://images.propertypro.ng/large/two-bedroom-apartment-XeMfUI4OfxlixjvNSuTy.jpg',
  title : '2 Bedroom Apartment',
  price : '210,000',
  id : 3,
  address : 'lekki Phase 1 Lekki Lagos ,',
  phone : '09077002261',
  description : 'Apartment Name : Aura Brand 2 bedroom *Maisonette/PENTHOUSE* with top notch amenities available for short/long stay. Location: ??Lekki phase 1 Price: N210,000 Refundable Caution: N100,000 Facilities Include: - Gated and Secured Estate - ?Superfast WiFi - 24/7 Power Supply - ?24/7 Security - Swimming pool - ?Bathtub - ?Shower - ?Ps5 - ?Mini lounge - Netflix / YouTube / DSTV - En-suite rooms - Housekeeping - Chef on demand - Dedicated car park - Fully equipped kitchen - Washing machine - Balconies - Tastefully furnished For shortstay: Minimum 2 nights' ,
},

{
  image : 'https://images.propertypro.ng/large/beautiful-2-bedroom-apartment-f4SMXrb1N97uJxnIH26q.jpg',
  title : '2 Bedroom Apartment',
  price : '155,000',
  id : 4 ,
  address : ' Ikate Lekki Lagos' ,
  phone : '09077002261',
  description : 'Apartment Name : Aura Brand 2 bedroom *Maisonette/PENTHOUSE* with top notch amenities available for short/long stay. Location: ??Lekki phase 1 Price: N210,000 Refundable Caution: N100,000 Facilities Include: - Gated and Secured Estate - ?Superfast WiFi - 24/7 Power Supply - ?24/7 Security - Swimming pool - ?Bathtub - ?Shower - ?Ps5 - ?Mini lounge - Netflix / YouTube / DSTV - En-suite rooms - Housekeeping - Chef on demand - Dedicated car park - Fully equipped kitchen - Washing machine - Balconies - Tastefully furnished For shortstay: Minimum 2 nights',
},

{
  image : 'https://images.propertypro.ng/large/three-bedroom-apartment-mplJRgmBYYTJ4tvriaYW.jpg',
  title : '3 Bedroom Apartment',
  price : '160,000',
  id : 5 ,
  address : 'Allen Avenue Ikeja, Lagos' ,
  phone : '09077002261',
  description : 'Three Bedroom Apartment At Allen Ikeja, 160,000 per night, Caution fee is 50,000, Fitted Kitchen, Nice furnishing, House keeping Services, 24 hours lighting, Security, Please be informed that caution fee refund is 24-48 hours after check out provided theres no damage.',
},

{
  image : 'https://images.propertypro.ng/large/five-bedroom-apartment-xMKwBMDRjc6F88AWcfX6.jpg',
  title : '5 Bedroom Apartment',
  price : '265,000',
  id : 6 ,
  address : 'Orchid Lekki Lagos',
  phone : '09077002261' ,
  description: '*PALMSTONE* :- A Fully Automated 5 Bedroom Furnished Duplex in peaceful and serene environment.Location :- Orchid, Treated water supply. ?SWIMMING POOL ?BATHTUB, ?SNOOKER BOARD, ?TABLE TENNIS, All rooms ensuite with AC, smart TV (Netflix) and water heaters., Family Lounge. Fully fitted kitchen with laundry. Smart Self Check- In System 24/7 Power Suppl. 24/7 Security, Super-Fast Internet Connection, Netflix, DSTV, Dedicated Car Park, Well Equipped Kitchen, ?Proximity to the road and other top notch spots in lekki., ?Lovely ambiance, ?Nice asthetics, ?Minimum of 2 NIGHTS BOOKING, Available for TOGETHER & PARTY*?. Price - 265k, Caution fee - 100k' ,
},

{
  image : 'https://images.propertypro.ng/large/luxury-2bed-shortlet-mende-maryland-2VEfzGnrYARGQJIW5EOi.jpg',
  title : '2 Bedroom Apartment',
  price : '125,000',
  id : 7,
  address : 'Ikeja Mende Maryland Lagos',
  phone : '09077002261',
  description : 'A sophisticated 2 bedroom apartment Available, Location: Mende Maryland, PRICE: N125k, Refundable Caution Fee:* N100k, Amenities: Discreet and peaceful, Strict Security, Non Smoking Apartment, Free wifi, 24/7 Power supply with backup inverter, 24/7 Clean water supply, 24/7 profile security, Fast Internet, Housekeeping, Netflix',
},

{
  image : 'https://images.propertypro.ng/large/1-bed-duplex-shortlet-ajah-by-lbs-ucRV6zpFRV2NF6KMvVpX.jpg',
  title : '1 Bed Duplex Shortlet Ajah By Lbs',
  price : '65,000',
  id : 8 ,
  address : 'Inside An Estate Olokonla Ajah Lagos',
  phone : '09077002261',
  description : 'Luxury 1 bed Apartments Featured includes: 247 power supply Wifi Sparkling water Close proximity to the express Well equipped kitchen 247 security Call [redacted] for booking',
},

{
  image : 'https://images.propertypro.ng/large/luxury-massive-4bed-duplex-apartment-oniru-v-i-0fLAXyBtoNjNmNR5TIUy.jpg',
  title : 'Luxury Massive 4bed Duplex Apartment Oniru V I',
  price : '350,000',
  id : 9,
  address : ' Near Palace Vi Oniru Victoria Island Lagos',
  phone : '09077002261         ',
  description : '4 BR Detached - 350k,  As 3bed 260k, Caution fee 100k, 3 nights minimum, Available from today, Amenities:Serene environment | big self compound, inbuilt speakers, all rooms en-suite | tv in all room 2 living rooms, wine Bar, 24-hour power supply, Snooker board & Table tennis ?? Topnotch security, Premium fully fitted kitchen, Smart TVs, ?telephone, Air conditioning, inbuilt speakers, Uninterrupted WiFi Luxury finishes, ?modern fully fitted kitchen,  Additional cost, Chef, English breakfast, Massage and therapy, Boat cruise or jet ski, Chauffeur service, Police escort service, ??Private studio apartment attached (can be booked separatelyor together)',
},

{
  image : 'https://images.propertypro.ng/large/executive-3-bedroom-apartment-UwHsOrWKyWyVaj550zyx.jpg',
  title : 'Executive 3 Bedroom Apartment',
  price : '170,000',
  id : 10,
  address : '22 Sule Abuka Street Opebi Ikeja Lagos',
  phone : '09077002261',
  description : 'The Apartment is exquisitely furnished, has 3 kitchens, and all the bedrooms are en-suite. Wow! The apartment is simply breathtaking!! Home away from home!!!Have you visited our newly built guest house, a house with a difference in the coolest part of Ikeja for short & long stays? Exotic rooms are all fitted with kitchens and bathrooms. Come & feel our unique hospitality cos your joy is our priority. Facilities include: 1. Uninterrupted power & water supply. 2. Maximum security with CCTVs and street gates. 3. Smart TV, Netflix and free 24 hours wifi services. 4. A serene environment for your morning jogging & exercise routine. 5. Very accessible to three major banks, several eateries, Spar supermarkets, shops at 5 minutes walking distance & 5 minutes drive to Ikeja City Mall. 6. A 15 minutes drive to local/international airports. 7. Car hire services available 8.ariety of meals available on order (special moi-moi, grilled turkey, fish, chicken etc)'
},
];


    const  [searchProperty, setSearchProperty] = useState('');
    const [bedrooms, setBedrooms] = useState("All");
    

    const filteredShortlet = shortletProps.filter((s) => {
      const searchBox = s.title.toLowerCase().includes(searchProperty.toLowerCase()) || s.address.toLowerCase().includes(searchProperty.toLowerCase())


      const bedroomBox = bedrooms === 'All' ||  s.title.toLowerCase().includes(`${bedrooms} bedroom`)

    return searchBox && bedroomBox; 

    })

    

  return (
    <section className="pt-[4rem]" >
      <div className="text-center flex flex-col items-center justify-center">
        <img src="https://images.unsplash.com/photo-1680726920612-f98de3af6248?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3J0bGV0JTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D"
        className="w-full h-[400px] md:h-[450px] object-cover bg-center flex items-center justify-center brightness-50 " alt="" />
        <h1 className="text-green-500 md:text-5xl text-4xl absolute bottom-115">Book your shortlet at Comfort Properties </h1>
        <p className="absolute italic md:text-xl text-gray-200  bottom-110 md:bottom-108">where luxury meets comfort</p>
    

    
    <form action="" className="flex items-center justify-center absolute flex-col md:flex-row top-60 w-1/3 gap-6">
       <label htmlFor=""
        className='text-left flex flex-col md:w-full text-gray-100 bottom-85'>Search property :
        <input 
        value={searchProperty}
        onChange={(e) => setSearchProperty(e.target.value)} 
        placeholder="search by location or title ..."
        type="text" 
        className="border text-gray-100 focus:ring-green-200 focus:ring-2 border outline-none border-gray-300 shadow-2xl px-4 py-2 rounded-md w-[20rem] md:w-[20rem] "/>
        </label>

       <label 
        className='text-left flex flex-col bottom-65 md:w-full text-gray-100'
        htmlFor=""> Bed No:
            <select 
            name="Bedrooms"
            id=""
            
            value={bedrooms}
            onChange= {(e) => setBedrooms(e.target.value)}
            className="focus:ring-green-200 focus:ring-2 border outline-none border-gray-300 shadow-2xl px-4 py-2 rounded-md w-[20rem] md:w-[20rem] ">
              <option value="All" defaultValue>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </label>
    </form>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-8">
      { filteredShortlet.map((s) =>{
      return (
          <RentPropertyCard key={s.id} rentproperty={s}/>
        );
      }
     )}
   </div>
   <CallToAction />
    </section>
  )
}

export default Shortlets