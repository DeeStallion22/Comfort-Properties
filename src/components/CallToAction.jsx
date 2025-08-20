import { Link } from "react-router-dom";



export default function CallToAction (){
    return(
        <section  className="bg-green-100 py-10 px-5 border-none m-5 rounded-[1rem] text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us Today and Start Your Journey With Comfort properties</h1>
            <p className="text-gray-600 mb-6">the Home You have been Searching For is Waiting</p>
            <Link to='/Contact'
             className='bg-rose-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition' >
             Contact Us
             </Link>
        </section>
    );
}