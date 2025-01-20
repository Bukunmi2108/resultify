import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const Addstudenttemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Add a Student</h2>

      </section>
      <section className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6 shadow'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input label={'First Name'} placeholder={'Enter First Name'}/>
          <Input label={'Last Name'} placeholder={'Enter Last Name'}/>
          <Input label={'Date of Birth'} placeholder={'Enter Date of Birth'}/>
          <Input label={'Phone Number'} placeholder={'Enter Phone Number'}/>
          <Input label={'Email'} placeholder={'Enter Email'}/>
          <Input label={'NIN'} placeholder={'Enter NIN'}/>
          <Input label={'Centre No.'} placeholder={'Enter Centre No.'}/>
          <Input label={'Exam ID'} placeholder={'Enter Exam ID'}/>
          <Input label={'Exam Year'} placeholder={'Enter Exam Year'}/>
        </div>
        <Button text={'Create Student'}/>
      </section>
    </AdminCon>
  )
}

export default Addstudenttemplate