import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import studentService from '../../service/studentService'

const Userresulttemplate = () => {
  const [result, setResult] = useState(null)
  const [student, setStudent] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Resultify | User Result'

    const fetchResult = async() => {
      const res = await studentService.getStudentResult()
      setResult(res)
  }
    const fetchStudent = async() => {
      const res = await studentService.getStudent()
      setStudent(res)
  }
    fetchResult()
    fetchStudent()
  }, [])
  return (
    <main className='main'>
      <div className='flex flex-row gap-2 items-center justify-between p-2 py-4 max-w-5xl mx-auto'>
        <Button onClick={() => {navigate('/feed')}} text={'< back'} size='small' type='muted'/>
        <div className='flex flex-row gap-2'>
          <Button text={'Print'} size='small'/>
          <Button text={'Download'} size='small'/>
        </div>
      </div>
      <div className='max-w-5xl aspect-result mx-auto p-2'>
        <div className='bg-white shadow border border-gray-200 w-full h-full p-4 flex flex-col gap-4'>
          {student && <div className='flex flex-col gap-4 w-full'>
            <div>
              <h6 className='text-center italic font-sans text-gray-500'>West African Examination Council</h6>
              <h3 className='text-2xl font-sans font-bold text-center'>{student.exam_centre.exam_centre_name}</h3>
            </div>

            <div className='flex flex-col gap-2 font-medium italic'>
              <p>Student name: {student.first_name + ' ' + student.last_name}</p>
              <p>Exam ID: {student.exam_id}</p>
              <p>Centre No.: {student.exam_centre.exam_centre_no}</p>
            </div>
          </div>}

          {result && <table className='w-full'>
            <thead>
              <tr>
                <th className='text-left font-sans text-xl'>Subject</th>
                <th className='text-left font-sans text-xl'>Grade</th>
              </tr>
            </thead>
            <tbody>
              {result ? (
                Object.entries(result.result).map(([subject, grade]) => (
                  <tr key={subject} className='font-poppins'>
                    <td className='font-poppins font-semibold text-gray-800'>{subject}</td>
                    <td>{grade}</td>
                  </tr>
                ))
              ) : (
                <p>Loading results...</p> // Or display an error message if result is null
              )}
            </tbody>
          </table>}
        </div>
      </div>
    </main>
  )
}

export default Userresulttemplate