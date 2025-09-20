import { Link } from 'react-router-dom'
import Logo from '../assets/estate logo.png'
import { useState } from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import whatapp from '../assets/whatapp.png'



export default function Footer () {
    return (
        <footer className='bg-green-200 text-slate-900'>
            <div className='footer flex flex-col justify-between p-[2rem] gap-[2rem]  md:flex md:flex-row container mx-auto'>
                <div className=' flex flex-col max-w-[400px] gap-3'>
                    <img src={Logo} alt="logo img" className='logo w-[3.5rem] rounded-full' />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat maxime, libero ratione fugit reiciendis reprehenderit dolor maiores repellendus, tenetur necessitatibus.</p>
                    <div className='icons flex flex-row gap-3'>
                    <img src={facebook} alt="logo" className=' '/>
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold'>COMFORT PROPERTIES</h2>
                    <p>Our Agents</p>
                    <p>Testimonials</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold'>Contact</h3>
                    <p>+234 907 700 2261</p>
                    <p>gbolahanusman533@gmail.com</p>
                    <p>place a Call or text</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold'>Get the latest information</h3>
                    <input type="text" placeholder='Enter email address' className='input border rounded-full p-2 border-2 border-slate-700'/>
                </div>
            </div>
        </footer>
    )

}


