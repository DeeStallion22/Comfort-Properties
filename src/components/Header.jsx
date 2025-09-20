import { NavLink } from 'react-router-dom'
import Logo from '../assets/estate logo.png'
import { useState } from 'react'
import { Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => setIsOpen(prev => !prev)
  const navclick = () => setIsOpen(true)

  const navLinkClasses = ({ isActive }) =>
    `lnk md:hover:text-rose-600 border-b py-3 md:border-none text-xl ${
      isActive ? "text-green-700 font-bold" : "text-gray-700 dark:text-gray-200"
    }`

  return (
    <header className="head flex justify-between items-center bg-green-200 md:p-[1rem] md:flex px-4 md:justify-between fixed w-full md:py-[.2rem] z-[1100]">
      <img
        src={Logo}
        alt="logo img"
        className="logo w-[3.5rem] rounded-[2rem] py-[.5rem]"
      />

      {/* NAV MENU */}
      <nav
        className={`${
          isOpen ? "translate-x-[-100%]" : "translate-x-[0%]"
        } nav flex flex-col gap-[.3rem] bg-gray-100 absolute left-0 top-0 p-4 w-[250px] h-screen transition duration-500 shadow-black-400 md:static md:flex-row md:h-full md:bg-transparent md:translate-x-[0%] md:space-x-2 md:w-full md:gap-[2rem] md:font-primary md:text-lg md:font-normal md:flex md:pl-[20rem]`}
      >
        <img
          src={Logo}
          alt="logo img"
          className="logo w-[2.9rem] rounded-[2rem] md:hidden"
        />

        <NavLink onClick={navclick} to="/" className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink onClick={navclick} to="/Buy" className={navLinkClasses}>
          Buy
        </NavLink>
        <NavLink onClick={navclick} to="/Rent" className={navLinkClasses}>
          Rent
        </NavLink>
        <NavLink onClick={navclick} to="/Shortlets" className={navLinkClasses}>
          Shortlets
        </NavLink>
        <NavLink onClick={navclick} to="/Contact" className={navLinkClasses}>
          Contact
        </NavLink>
        <NavLink onClick={navclick} to="/Services" className={navLinkClasses}>
          Services
        </NavLink>

        {/* MOBILE CONTACT BUTTON */}
        <button className="animate-bounce btn flex gap-2 border-2 bg-gray-700 text-white rounded-[2rem] p-2 px-4 hover:bg-gray-500 md:hidden mt-[2rem] self-start items-center">
          <a href="tel:+2349061983672">Contact Us</a>
          <Phone size={15} className="flex flex-row" />
        </button>
      </nav>

      {/* DESKTOP CONTACT BUTTON */}
      <a
        href="tel:+2348012345678"
        className="animate-bounce btn flex items-center gap-2 border-2 bg-gray-700 text-white rounded-[2rem] whitespace-nowrap p-3 px-4 hover:bg-gray-500 hidden md:inline-flex"
      >
        <Phone size={15} /> Contact Us
      </a>

      {/* BURGER MENU */}
      <div
        onClick={handleClick}
        className={`${
          !isOpen ? "active" : ""
        } w-[30px] flex flex-col gap-[.3rem] transition duration-[500] md:hidden`}
      >
        <span className="w-full bg-black h-[3px] rounded-full transition duration-300"></span>
        <span className="w-full bg-black h-[3px] rounded-full transition duration-300"></span>
        <span className="w-full bg-black h-[3px] rounded-full transition duration-300"></span>
      </div>
    </header>
  )
}
