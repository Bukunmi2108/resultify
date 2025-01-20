import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Button from '../atoms/Button'

const Addsubjecttemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <h3 className='font-sans font-semibold text-sm text-primaryBlue mx-auto max-w-6xl pl-8'>
          Admin Dashboard
        </h3>
      </section>

      <section className='py-4 mx-auto max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Subjects</h3>
          <input type='text' placeholder='Add Subject' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <Button text={'Go'} type='large' className={'w-full'}/>
        </div>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>All Subjects</h3>
          <Button text={'View All'} type='large' className={'w-full'}/>
        </div>
      </section>
    </AdminCon>
  )
}

export default Addsubjecttemplate