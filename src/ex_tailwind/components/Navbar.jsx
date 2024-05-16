import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className="hidden md:block/flex/">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:block/flex/">
        <BsSearch size={20} />
        <BsPerson size={20} />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden">
        nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />
        <HiOutlineMenuAlt4 size={20} />
      </div>

      {/* Mobile menu dropdown */}

      <div className="{nav ? }">
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
