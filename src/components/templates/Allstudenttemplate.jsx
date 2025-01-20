import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Button from '../atoms/Button'

const Allstudenttemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2 flex items-center justify-between'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Add a Student</h2>
        <h2 className='text-gray-500 text-sm font-sans font-bold'>Glory Schools, Egbedi</h2>
      </section>
      <section className='py-4 mx-auto max-w-6xl p-2 overflow-auto'>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded-xl overflow-hidden'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Full Name</th>
              <th className='p-4'>Exam ID</th>
              <th className='p-4'>Centre No.</th>
              <th className='p-4'>Exam Year</th>
              <th className='p-4'>Remark</th>
              <th className='p-4'>Status</th>
            </tr>
          </thead>
          <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'>            
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
            <tr className=''>
              <td className='p-4'>1</td>
              <td className='p-4'>Bukunmi Akinyemi</td>
              <td className='p-4'>2e34Rwe</td>
              <td className='p-4'>WE1234RT</td>
              <td className='p-4'>2024</td>
              <td className='p-4'>Excellent</td>
              <td className='p-4'>Approved</td>
            </tr>
          </tbody>
        </table>
      </section>
    </AdminCon>
  )
}

export default Allstudenttemplate