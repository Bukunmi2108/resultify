import React, { useState } from 'react'
import { GoArrowDownRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const SideLink = ({title, children, link}) => {
  const [ toggle, setToggle] = useState(false)
  return (
  <div>
    <div className='flex flex-col justify-center items-start w-[240px] cursor-pointer'>
      <div className='flex items-center justify-between bg-primaryBlue font-poppins text-lg p-4 w-full' onClick={() => {setToggle(!toggle)}}>
        {link? <Link to={link}>{title}</Link> : <span>{title}</span>}
        {children && <GoArrowDownRight />}
      </div>
      {children && toggle && <div className='flex flex-col w-full divide-y divide-primaryBlue'>
        {
          children.map((j, index) => (
            <Link key={index} to={j.link} className='bg-white text-primaryBlue
             font-poppins text-sm p-4 w-full'>{j.text}</Link>
          ))
        }
      </div>}
    </div>
  </div>
  )
}

export default SideLink