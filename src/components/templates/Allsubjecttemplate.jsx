import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Button from '../atoms/Button'

const Allsubjecttemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Subject Name</th>
              <th className='p-4'>Subject Code</th>
            </tr>
          </thead>
          <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'>            
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>English Language</td>
              <td className='p-4'>2e34Rwe</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='py-4 mx-auto max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Subjects</h3>
          <input type='text' placeholder='Add Subject' className='border rounded-sm p-4 outline-none border-gray-500 placeholder'/>
          <Button text={'Go'} type='large' className={'w-full'}/>
        </div>
      </section>
    </AdminCon>
  )
}

export default Allsubjecttemplate