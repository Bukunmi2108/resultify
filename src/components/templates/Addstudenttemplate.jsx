import React, { useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import studentService from '../../service/studentService'

const Addstudenttemplate = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    exam_centre_no: '',
    exam_year: '',
  })

  const navigate = useNavigate()
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await studentService.createStudent(formData)
      alert('Student Created Successfully')
      navigate('/allstudent')
    } catch (error) {
      alert(error)
      console.log(error);
    }
  };
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Add a Student</h2>

      </section>
      <form onSubmit={onSubmit} className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6 shadow'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input 
            name={'first_name'}
            label={'First Name'} 
            type='text'
            placeholder={'Enter Student First Name'}
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Last Name'} 
            name={'last_name'}
            type='text'
            placeholder={'Enter Student Last Name'}
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Exam Centre No.'} 
            name={'exam_centre_no'}
            type='text'
            placeholder={'Enter Centre Number'}
            value={formData.exam_centre_no}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Exam Year'} 
            name={'exam_year'}
            type='text'
            placeholder={'Enter Exam Year'}
            value={formData.exam_year}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Phone Number'} 
            name={'exam_centre_admin_phone'}
            type='text'
            placeholder={'Enter Phone Number'}
            value={formData.exam_centre_admin_phone}
            onChange={handleChange}
            required
          />
        </div>
        <Button buttonFormType='submit' text={'Create Student'}/>
      </form>
    </AdminCon>
  )
}

export default Addstudenttemplate