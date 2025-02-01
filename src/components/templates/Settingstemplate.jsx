import React, { useEffect, useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import authService from '../../service/authService';

const Settingstemplate = () => {
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    exam_centre_no: '',
    exam_id: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await authService.getUser();
      // console.log(res)
      setFormData({
        ...formData,
        first_name: res['first_name'],
        last_name: res['last_name'],
        email: res['email'],
        phone_number: res['phone_number'],
        exam_centre_no: res['exam_centre_no'],
        exam_id: res['exam_id'],
      })
      setUserData(res)
    };
    fetchUser();
  }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update user data with formData
      // console.log(formData)
      const response = await authService.updateUser(formData);
      console.log(response);
      setUserData(response); // Update local state
      // alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <main className='main py-4'>
      <h2 className='text-primaryBlue text-lg font-sans font-bold mx-auto max-w-5xl p-4'>Update User Info</h2>
      {formData.email && <form onSubmit={handleSubmit} className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input
            label={'First name'}
            name={'first_name'}
            placeholder={'Enter your first name'}
            type='text'
            onChange={handleChange}
            value={formData.first_name} // Use fetched data or form data
          />          
          <Input
            label={'Last name'}
            name={'last_name'}
            placeholder={'Enter your last name'}
            type='text'
            onChange={handleChange}
            value={formData.last_name} // Use fetched data or form data
          />
          <Input
            label={'Email'}
            name={'email'}
            placeholder={'Enter your Email'}
            type='email'
            onChange={handleChange}
            value={formData.email} // Use fetched data or form data
            disabled // Disable email editing (assuming it's the primary login)
          />
          <Input
            label={'Phone Number'}
            name={'phone_number'}
            placeholder={'Enter your Phone Number'}
            type='text'
            onChange={handleChange}
            value={formData.phone_number }
            required
          />
          <Input 
            label={'Exam Center No.'} 
            name={'exam_centre_no'}
            placeholder={'Enter Center No.'}
            type='text'
            onChange={handleChange}
            value={formData.exam_centre_no}
            required
          />
          <Input 
            label={'Exam ID'} 
            name={'exam_id'}
            placeholder={'Enter Exam ID'}
            type='text'
            onChange={handleChange}
            value={formData.exam_id}
            required
          />
        </div>
        <Button buttonFormType='submit' text={'Update User Info'}/>
      </form>}
    </main>
  )
}

export default Settingstemplate