import React from 'react'
import { Logo, Input, Button } from '../../components'

const Signuptemplate = () => {
  return (
    <main className='main p-2 py-8'>
      <div className='mx-auto flex flex-col items-center justify-center gap-1'>
        <Logo />
        <h2 className='font-sans text-2xl font-bold text-center'>Create your Account</h2>
        <p className='text-center font-poppins font-light text-sm'>Check your Result here at Resultify</p>
      </div>

      <div className='flex flex-col gap-6 mt-8 mx-auto w-full max-w-4xl'>
        <Input 
          label={'First Name'} 
          placeholder={'Enter your first name'} 
        />
        <Input 
          label={'Last Name'} 
          placeholder={'Enter your last name'} 
        />
        <Input 
          label={'Email'} 
          placeholder={'Enter your email'} 
        />
        <Input 
          label={'Password'} 
          placeholder={'Enter your password'} 
        />
        <Input 
          label={'Confirm Password'} 
          placeholder={'Confirm your Password'} 
        />
        <div className='flex items-center justify-center gap-2'>
          <Button buttonFormType='submit' text={'Sign up'} size='medium' className={'w-full'}/>
          <Button link={'/login'} text={'Login'} size='medium' type='secondary' className={'w-full'}/>
        </div>
      </div>
    </main>
  )
}

export default Signuptemplate