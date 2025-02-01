import React, { useEffect, useState } from 'react'
import {Button, Input, ProfileMiniDetails} from '../../components'
import studentService from '../../service/studentService'
import { useNavigate } from 'react-router-dom'
import authService from '../../service/authService'

const Userfeedtemplate = () => {
  const [isPaid, setIsPaid] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    document.title = 'Resultify | User Feed'

    const fetchStudent = async() => {
      const res = await studentService.getStudent()
      setUserData(res)
    };
    const fetchUser = async() => {
      const res = await authService.getUser()
      
      if (res.is_paid) {
        setIsPaid(true)
      }
      if (res.is_verified) {
        setIsPaid(true)
      }
    };
    fetchUser()
    fetchStudent()
  }, [])

  const handlePayment = async() => {
    const res = await studentService.confirmPayment()
    console.log(res)
    setIsPaid(true)
  }

  const handleVerification = async() => {
    const res = await studentService.requestVerification()
    console.log(res)
    setIsApproved(true)
  }

  const handleResult = async() => {
    navigate('/result')
  }
  return (
    <main className='main'>
      <section className='mx-auto py-12 px-4 flex flex-col lg:flex-row gap-4'>
        {userData && <div className='flex gap-4 bg-white p-4 rounded-xl relative w-full shadow-sm'>
          <div className='flex flex-col gap-4'>
            <ProfileMiniDetails label={'Full Name'} value={userData.first_name + ' ' + userData.last_name} />
            <ProfileMiniDetails label={'Exam ID'} value={userData.exam_id} />
            <ProfileMiniDetails label={'Centre No.'} value={userData.exam_centre_no} />
            <ProfileMiniDetails label={'Centre Name'} value={userData.exam_centre.exam_centre_name} />
          </div>
          <span onClick={() => {navigate('/profile')}} className='absolute font-poppins bottom-2 right-2 text-xs text-gray-500 p-1 hover:text-primaryBlue cursor-pointer'>View Details -</span>
        </div>}
        
        <div className='flex p-4 flex-col gap-4 bg-white rounded-xl h-fit w-full shadow-sm'>
          <h3 className='text-black text-3xl font-semibold'>Result Status</h3>
          <span className='text-red-500 font-poppins'>Not Verified</span>
          <Button onClick={handlePayment} text={'Make Payments'} type='large' className={'w-full'}/>
          <Button onClick={handleVerification} disabled={!isPaid} text={'Request Verification'} type='large' className={'w-full'}/>
          <Button onClick={handleResult} disabled={!isPaid && !isApproved} text={'Check Result'} type='large' className={'w-full'}/>
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