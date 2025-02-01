import React, { useEffect, useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import adminService from '../../service/adminService'

const Addadmintemplate = () => {
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await adminService.allAdmin()
      setAdmins(response)
    }
    fetchData()
  }, [])
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <h3 className='font-sans font-semibold text-sm text-primaryBlue mx-auto max-w-6xl pl-8'>All Admin</h3>
      </section>
      <section className='py-4 mx-auto max-w-4xl p-2 overflow-auto'>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded-xl overflow-hidden'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Full Name</th>
              <th className='p-4'>Email</th>
              <th className='p-4'>Phone Number</th>
            </tr>
          </thead>
          {admins && <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'>
            {admins.map((admin, index) => (
              <tr key={index} className=''>
                <td className='p-4'>{index + 1}</td>
                <td className='p-4'>{admin.first_name + ' ' + admin.last_name}</td>
                <td className='p-4'>{admin.email}</td>
                <td className='p-4'>{admin.phone_number}</td>
              </tr>
            ))}            
          </tbody>}
        </table>
      </section>
    </AdminCon>
  )
}

export default Addadmintemplate