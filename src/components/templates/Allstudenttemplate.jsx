import React, { useEffect, useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import studentService from '../../service/studentService'

const Allstudenttemplate = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await studentService.allStudents()
      setStudents(response)
    }
    fetchData()
  }, [])
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2 flex items-center justify-between'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>All Students</h2>
      </section>
      <section className='py-4 mx-auto max-w-6xl p-2 overflow-auto'>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded-xl overflow-hidden'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Full Name</th>
              <th className='p-4'>Exam ID</th>
              <th className='p-4'>Centre No.</th>
              <th className='p-4'>Centre Name</th>
              <th className='p-4'>Exam Year</th>
            </tr>
          </thead>
          {students && <tbody className='bg-gray-100 b-3 divide-y divide-gray-500 text-sm'>  
            {students.map((student, index) => (
              <tr key={student.index} className=''>
                <td className='p-4'>{index + 1}</td>
                <td className='p-4'>{student.first_name + ' ' + student.last_name}</td>
                <td className='p-4'>{student.exam_id}</td>
                <td className='p-4'>{student.exam_centre_no}</td>
                <td className='p-4'>{student.exam_centre.exam_centre_name}</td>
                <td className='p-4'>{student.exam_year}</td>
              </tr>
            ))
            }          
          </tbody>}
        </table>
      </section>
    </AdminCon>
  )
}

export default Allstudenttemplate