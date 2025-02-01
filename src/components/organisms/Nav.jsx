import React, { useState } from 'react'
import {Logo} from '../../components'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { SideLink } from '../../components'


const Nav = () => {
  const [menuState, setMenuState] = useState(true)

  const handleMenu = () => {
    setMenuState(!menuState)
  }


  const Subject = [
  { text: 'Add new Subject', link: '/addsubject' },
  { text: 'View all Subjects', link: '/allsubject' },
  ];

  const Centre = [
  { text: 'Add new Centre', link: '/addcentre' },
  { text: 'View all Centres', link: '/allcentre' },
  ];

  const Student = [
  { text: 'Add new Student', link: '/addstudent' },
  { text: 'View Students', link: '/allstudent' },
  ];

  const Roles = [
  { text: 'Add admin', link: '/addadmin' },
  { text: 'All Admin', link: '/alladmin' },
  ];

  const Result = [
  { text: 'Upload Result', link: '/uploadresult' },
  { text: 'View Student Result', link: '/viewstudentresult' },
  ];


  return (
    <header className='py-2 w-full text-white fixed z-50 bg-primaryBlue'>
      <nav className='flex justify-between items-center p-4 max-w-7xl w-full mx-auto'>
        <span className='flex items-center justify-center gap-8'>
          {menuState? <HiOutlineMenuAlt4 onClick={handleMenu} className='w-6 h-6'/> : <TfiClose onClick={() => {setMenuState(!menuState)}} className='w-6 h-6'/>
        }
          <Logo variant='light'/>
        </span>

        <ul className='font-poppins text-md font-light flex gap-4'>
          <li><Link to={'/uploadresult'}>Upload Result</Link></li>
        </ul>
      </nav>
      <nav className={`${(menuState === true)? '-left-96' : 'left-0'} h-screen md:max-h-[calc(100vh-99px)] max-h-[calc(100vh-83px)] overflow-y-auto flex flex-col items-start justify-start absolute top-[83px] md:top-[99px] bg-white transition-all ease-in-out duration-400 z-50 divide-white divide-y`}>
        <SideLink title={'Dashboard'} link={'/adminfeed'}/>
        <SideLink title={'Subject'} children={Subject} />
        <SideLink title={'Centre'} children={Centre} />
        <SideLink title={'Student'} children={Student} />
        <SideLink title={'Roles'} children={Roles} />
        <SideLink title={'Result'} children={Result} />
      </nav>
      
    </header>
  )
}

export default Nav