import React, { useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import Input_sm from '../atoms/Input_sm'
import subjectService from '../../service/subjectService'

const Addsubjecttemplate = () => {
  const [subjectName, setSubjectName] = useState('')
  const navigate = useNavigate()

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
    navigate('/allsubject')
  }
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-6xl p-2'>
        <h3 className='font-sans font-semibold text-sm text-primaryBlue mx-auto max-w-6xl pl-8'>
          Admin Dashboard
        </h3>
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
        <div className='flex flex-col bg-white shadow gap-4 p-4 rounded'>
          <h3 className='font-bold text-3xl text-gray-800'>All Subjects</h3>
          <Button onClick={() => {navigate('/allsubject')}} text={'View All'} type='large' className={'w-full'}/>
        </div>
      </section>
    </AdminCon>
  )
}

export default Addsubjecttemplate