import React from 'react'
import AdminCon from '../organisms/AdminCon'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const Uploadresulttemplate = () => {
  return (
    <AdminCon>
      <section className='py-4 mx-auto max-w-5xl p-2'>
        <h2 className='text-primaryBlue text-lg font-sans font-bold'>Upload Result</h2>

      </section>
      <section className='bg-white p-4 py-8 rounded-xl max-w-5xl mx-auto mt-6 shadow'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-4'>
          <Input label={'Centre No.'} placeholder={'Enter Centre No.'}/>
          <Input label={'Exam Year'} placeholder={'Enter Exam Year'}/>
        </div>
        <Button text={'Upload Result'}/>
      </section>
    </AdminCon>
  )
}

export default Uploadresulttemplate