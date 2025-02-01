import React, { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Logo from '../atoms/Logo'
import { useNavigate } from 'react-router-dom'
import authService from '../../service/authService'

const Adminlogintemplate = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await authService.adminLogin(formData.email, formData.password)
      alert('Login successful');
      navigate('/adminfeed');
      

    } catch (error) {
      alert(error.response.data.message)
      console.log(error);
    }
  };
  return (
    <main className='main p-2 py-8'>
      <div className='mx-auto flex flex-col items-center justify-center gap-1'>
        <Logo />
        <h2 className='font-sans text-2xl font-bold text-center'>Login</h2>
        <p className='text-center font-poppins font-light text-sm'>Login as an Admin</p>
      </div>

      <form onSubmit={onSubmit} className='flex flex-col gap-6 mt-8 mx-auto w-full max-w-4xl'>
        <Input 
          label={'Email'} 
          name={'email'}
          placeholder={'Enter your Email'} 
          type='email' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.email}
          required
        />

        <Input 
          label={'Password'} 
          name={'password'}
          placeholder={'Enter your Password'} 
          type='password' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.password}
          required
        />
        <div className='flex items-center justify-center gap-2'>
          <Button buttonFormType='submit' text={'Login'} size='medium' className={'flex-1'}/>
          <Button link={'/signup'} text={'Sign up'} size='medium' type='secondary' className={'flex-1'}/>
        </div>
      </form>
      <div onClick={() => {navigate('/login')}} className='text-xs text-center mt-2 font-poppins hover:underline font-light hover:text-primaryBlue cursor-pointer'>Login as a User</div>
    </main>
  )
}

export default Adminlogintemplate