import React from 'react'
import {Button, Input, ProfileMiniDetails} from '../../components'

const Userfeedtemplate = () => {
  return (
    <main className='main'>
      <section className='mx-auto py-12 px-4 flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-row gap-4 bg-white p-4 rounded-xl relative w-full shadow-sm'>
          <div className='min-h-64 h-full max-w-64 bg-gray-500 w-full rounded'></div>
          <div className='flex flex-col gap-4'>
            <ProfileMiniDetails label={'Full Name'} value={'John Parker'} />
            <ProfileMiniDetails label={'Exam ID'} value={'21425T2'} />
            <ProfileMiniDetails label={'Centre No.'} value={'121WE32'} />
            <ProfileMiniDetails label={'Centre Name'} value={'Glory Comprehensive School, Egbedi'} />
          </div>
          <span className='absolute font-poppins bottom-2 right-2 text-xs text-gray-500'>View Details -</span>
        </div>
        <div className='flex p-4 flex-col gap-4 bg-white rounded-xl h-fit w-full shadow-sm'>
          <h3 className='text-black text-3xl font-semibold'>Result Status</h3>
          <span className='text-red-500 font-poppins'>Not Verified</span>
          <Button text={'Request Verification'} type='large' className={'w-full'}/>
        </div>
        <div className='flex p-4 flex-col gap-4 bg-white rounded-xl h-fit w-full shadow-sm'>
          <h3 className='text-black text-3xl font-semibold'>Support</h3>
          <Input label={'Message'} placeholder={'Enter your message request here'}/>
          <Button text={'Send Message Request'} type='large' className={'w-full'}/>
        </div>
      </section>
    </main>
  )
}

export default Userfeedtemplate