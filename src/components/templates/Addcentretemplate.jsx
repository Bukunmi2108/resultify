import React, { useState } from 'react'
import AdminCon from '../organisms/AdminCon'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import centreService from '../../service/centreService'
import { useNavigate } from 'react-router-dom'

const Addcentretemplate = () => {
  const [formData, setFormData] = useState({
    exam_centre_name: '',
    exam_centre_location: '',
    exam_centre_admin: '',
    exam_centre_admin_email: '',
    exam_centre_admin_phone: '',
  })

  const navigate = useNavigate()
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await centreService.createCentre(formData)
      alert('Centre Created Successfully')
      navigate('/allcentre')
    } catch (error) {
      alert(error)
      console.log(error);
    }
  };
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Add a Centre</h2>

      </section>
      <form onSubmit={onSubmit} className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6 shadow'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input 
            name={'exam_centre_name'}
            label={'Centre Name'} 
            type='text'
            placeholder={'Enter Centre Name'}
            value={formData.exam_centre_name}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Centre Admin Name'} 
            name={'exam_centre_admin'}
            type='text'
            placeholder={'Enter Centre Admin Name'}
            value={formData.exam_centre_admin}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Centre Location'} 
            name={'exam_centre_location'}
            type='text'
            placeholder={'Enter Centre Location'}
            value={formData.exam_centre_location}
            onChange={handleChange}
            required
          />
          <Input 
            label={'Centre Admin Email'} 
            name={'exam_centre_admin_email'}
            type='email'
            placeholder={'Enter Centre Admin Email'}
            value={formData.exam_centre_admin_email}
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
        <Button buttonFormType='submit' text={'Create Centre'}/>
      </form>
    </AdminCon>
  )
}

export default Addcentretemplate