import React from 'react'
import {Logo} from '../../components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='py-2 w-full text-white bg-primaryBlue'>
      <nav className='flex justify-between items-center p-4 max-w-7xl w-full mx-auto'>
        <span className='flex items-center justify-center gap-2'>
          <Logo variant='light'/>
          <span className='font-sans text-4xl font-bold'>Resultify</span>
        </span>

        <ul className='font-poppins text-md font-light flex gap-4'>
          <li><Link to={'/'}>Tutorials</Link></li>
          <li><Link to={'/signup'}>Signup</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Navbar