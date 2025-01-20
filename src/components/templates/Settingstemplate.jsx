import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const Settingstemplate = () => {
  return (
    <main className='main py-4'>
      <h2 className='text-primaryBlue text-lg font-sans font-bold mx-auto max-w-5xl p-4'>Update User Info</h2>
      <div className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input label={'First Name'} placeholder={'Enter First Name'}/>
          <Input label={'Last Name'} placeholder={'Enter Last Name'}/>
          <Input label={'Phone Number'} placeholder={'Enter phone number'}/>
          <Input label={'email'} placeholder={'Enter email'}/>
          <Input label={'Center No.'} placeholder={'Enter Center No.'}/>
          <Input label={'Exam ID'} placeholder={'Enter Exam ID'}/>
          <Input label={'Exam year'} placeholder={'Enter Exam year'}/>
        </div>
        <Button text={'Update User Info'}/>
      </div>
    </main>
  )
}

export default Settingstemplate