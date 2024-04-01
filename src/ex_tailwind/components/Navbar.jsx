import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'

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
        <BsSearch />
        <BsPerson />
      </div>
    </div>
  )
}

export default Navbar
