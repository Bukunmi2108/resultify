import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const Addcentretemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Add a Centre</h2>

      </section>
      <section className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6 shadow'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input label={'Centre Name'} placeholder={'Enter Centre Name'}/>
          <Input label={'Centre No.'} placeholder={'Enter Centre No.'}/>
          <Input label={'Centre Admin Name'} placeholder={'Enter Centre Admin Name'}/>
          <Input label={'Centre Location'} placeholder={'Enter Centre Location'}/>
          <Input label={'Centre Admin Email'} placeholder={'Enter Centre Admin Email'}/>
          <Input label={'Phone Number'} placeholder={'Enter Phone Number'}/>
        </div>
        <Button text={'Create Centre'}/>
      </section>
    </AdminCon>
  )
}

export default Addcentretemplate