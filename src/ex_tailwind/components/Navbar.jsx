import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
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
      <div>
        <HiOutlineMenuAlt4 size={20} />
      </div>

      {/* Mobile menu dropdown */}

      <div className="absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col">
        <ul>
          <h1>BEACHES.</h1>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="flex flex-col">
            {/* 24분부터 수정하기.. 12일 무조건 완성 */}
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="">
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
