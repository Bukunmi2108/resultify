import React, { useState } from 'react'
import { Logo, Input, Button } from '../../components'
import authService from '../../service/authService'
import { useNavigate } from 'react-router-dom';

const Signuptemplate = () => {
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const passwordMatch = (password, confirm_password) => {
    if (password !== confirm_password) {
      return 'Passwords do not match';
    }
    return false;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const psword_match = passwordMatch(formData.password, formData.confirm_password);
    if (psword_match) {
      alert(psword_match);
    } else{
      authService.register(formData)
      .then((response) => {
        alert('Signup successful');
        navigate('/settings');
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
    }
  };

  return (
    <main className='main p-2 py-8'>
      <div className='mx-auto flex flex-col items-center justify-center gap-1'>
        <Logo />
        <h2 className='font-sans text-2xl font-bold text-center'>Create your Account</h2>
        <p className='text-center font-poppins font-light text-sm'>Check your Result here at Resultify</p>
      </div>

      <form onSubmit={onSubmit} className='flex flex-col gap-6 mt-8 mx-auto w-full max-w-4xl'>
        <Input 
          autoComplete='off' 
          label={'First name'} 
          name={'first_name'}
          placeholder={'Enter First name'} 
          type='text' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.first_name}
          required
        />
        <Input 
          autoComplete='off' 
          label={'Last name'} 
          name='last_name'
          placeholder={'Enter Last name'} 
          type='text' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.last_name}
          required
        />
        <Input 
          autoComplete='off' 
          label={'Email'} 
          name='email'
          placeholder={'Enter your Email'} 
          type='email' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Input 
          autoComplete='off' 
          label={'Password'} 
          name='password'
          placeholder={'Enter your Password'} 
          type='password' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.password}
          required
          min={10}
        />
        <Input 
          autoComplete='off' 
          label={'Confirm Password'} 
          name='confirm_password'
          placeholder={'Confirm your Password'} 
          type='password' 
          className={'w-full'}
          onChange={handleChange}
          value={formData.confirm_password}
          required
          min={10}
        />
        <div className='flex items-center justify-center gap-2'>
          <Button buttonFormType='submit' text={'Sign up'} size='medium' className={'w-full'}/>
          <Button link={'/login'} text={'Login'} size='medium' type='secondary' className={'w-full'}/>
        </div>
      </form>
    </main>
  )
}

export default Signuptemplate