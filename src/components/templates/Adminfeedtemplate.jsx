import React from 'react'
import {AdminCon, AdminFeedMiniDisplay, Button} from '../../components'
import { PiStudentLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import { TbUserShare } from "react-icons/tb";


const Adminfeedtemplate = () => {
  const widgets = [
    {
      icon: <PiStudentLight className='w-12 h-12 text-gray-800' />, 
      count: 7800, 
      desc: 'Total Students'
    },
    {
      icon: <FiUsers className='w-12 h-12 text-gray-800' />, 
      count: 2300, 
      desc: 'Total Users'
    },
    {
      icon: <FaSchool className='w-12 h-12 text-gray-800' />, 
      count: 7800, 
      desc: 'Total Students'
    },
    {
      icon: <TbUserShare  className='w-12 h-12 text-primaryBlue' />, 
      count: 94, 
      desc: 'Total Requests'
    },
    {
      icon: <TbUserShare  className='w-12 h-12 text-green-500' />, 
      count: 73, 
      desc: 'Successful Requests'
    },
    {
      icon: <TbUserShare  className='w-12 h-12 text-red-500' />, 
      count: 21, 
      desc: 'Flagged Requests'
    },
  ]
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <h3 className='font-sans font-semibold text-sm text-primaryBlue mx-auto max-w-6xl pl-8'>Admin Dashboard</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {widgets.map((widget, index) => (
            <AdminFeedMiniDisplay key={index} count={widget.count} desc={widget.desc} icon={widget.icon}/>
          ))}
        </div>
      </section>

      <section className='py-4 mx-auto max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Students</h3>
          <input type='text' placeholder='Search students by Exam ID' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <input type='text' placeholder='Choose Centre' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <Button text={'Go'} type='large' className={'w-full'}/>
        </div>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Centres</h3>
          <input type='text' placeholder='Search Centre by Centre no.' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <Button text={'Go'} type='large' className={'w-full'}/>
        </div>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Users</h3>
          <input type='text' placeholder='Search Users by email' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <Button text={'Go'} type='large' className={'w-full'}/>
        </div>
      </section>
    </AdminCon>
  )
}

export default Adminfeedtemplate