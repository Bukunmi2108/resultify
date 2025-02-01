import React, { useEffect, useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import centreService from '../../service/centreService'

const Allcentretemplate = () => {
  const [centres, setCentres] = useState([])

  useEffect(() => {
    const fetchCentres = async () => {
      const response = await centreService.allCentre()
      setCentres(response)
    }
    fetchCentres()
  }, [])
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2 flex items-center justify-between'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>All Centres</h2>
      </section>
      <section className='mx-auto max-w-6xl px-2 py-4 overflow-auto'>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded-xl overflow-hidden'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Exam Centre No.</th>
              <th className='p-4'>Exam Centre Name</th>
              <th className='p-4'>Centre Centre Admin</th>
              <th className='p-4'>Exam Centre Admin Email</th>
              <th className='p-4'>Exam Centre Admin Phone</th>
            </tr>
          </thead>
          {centres && <tbody className='bg-gray-100 b-3 divide-y divide-gray-500 text-sm'>   
            {centres.map((centre, index) => (
              <tr key={index} className=''>
                <td className='p-4'>{index + 1}</td>
                <td className='p-4'>{centre.exam_centre_no}</td>
                <td className='p-4'>{centre.exam_centre_name}</td>
                <td className='p-4'>{centre.exam_centre_admin}</td>
                <td className='p-4'>{centre.exam_centre_admin_email}</td>
                <td className='p-4'>{centre.exam_centre_admin_phone}</td>
              </tr>
            ))}         
          </tbody>}
        </table>
      </section>
    </AdminCon>  )
}

export default Allcentretemplate