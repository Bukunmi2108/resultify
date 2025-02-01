import React, { useEffect, useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import Button from '../atoms/Button'
import subjectService from '../../service/subjectService'
import Input_sm from '../atoms/Input_sm'

const Allsubjecttemplate = () => {
  const [subjectName, setSubjectName] = useState('')

  const [subjects, setSubjects] = useState(null)
  const [reloadTrigger, setReloadTrigger] = useState(0); 


  useEffect(() => {
    const fetchSubjects = async() => {
      const res = await subjectService.getAllSubjects()
      setSubjects(res)
    }
    fetchSubjects()
  }, [reloadTrigger])

  const handleChange = (name, value) => {
    setSubjectName(value);
  };

  const onSubmit = async(e) => {
    e.preventDefault()
    const subject = {
      subject_name: subjectName
    }
    const res = await subjectService.createSubject(subject)
    alert(`${res.subject_name} has been added successfully`)
    setSubjectName('')
    setReloadTrigger(prevTrigger => prevTrigger + 1); 
  }
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <h3 className='my-4 text-primaryBlue font-sans font-bold'>All Subjects</h3>
        <table className='w-full table-auto text-left text-nowrap bg-white shadow rounded'>
          <thead>
            <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
              <th className='p-4'>S/N</th>
              <th className='p-4'>Subject Name</th>
              <th className='p-4'>Subject Code</th>
            </tr>
          </thead>
          <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'> 
            {subjects && subjects.map((subject, index) => (
              <tr key={index} className=''>
                <td className='p-4'>{index + 1}</td>
                <td className='p-4'>{subject.subject_name}</td>
                <td className='p-4'>{subject.subject_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className='py-4 mx-auto max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <form onSubmit={onSubmit} className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>Subjects</h3>
          <Input_sm 
            type='text' 
            placeholder='Add Subject'
            className='border rounded-sm p-4 outline-none border-gray-500 placeholder'
            value={subjectName}
            onChange={handleChange}
            required
            />
          <Button buttonFormType='submit' text={'Go'} type='large' className={'w-full'}/>
        </form>
      </section>
    </AdminCon>
  )
}

export default Allsubjecttemplate