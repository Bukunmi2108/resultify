import React, { useEffect, useState } from 'react'
import studentService from '../../service/studentService'
import ProfileMiniDetails from '../molecules/ProfileMiniDetails'
import { useNavigate } from 'react-router-dom'

const ProfileTemplate = () => {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Resultify | User Profile'

    const fetchUser = async() => {
      const res = await studentService.getStudent()
      console.log(res)
      setUserData(res)
    };
    fetchUser()
  }, [])

  return (
    <main className='main'>
      <section className='mx-auto py-12 px-4 flex flex-col lg:flex-row gap-4'>
        {userData && <div className='flex bg-white p-4 rounded-xl relative w-full shadow-sm'>
          <div className='flex flex-col gap-4'>
            <ProfileMiniDetails label={'Full Name'} value={userData.first_name + ' ' + userData.last_name} />
            <ProfileMiniDetails label={'Exam ID'} value={userData.exam_id} />
            <ProfileMiniDetails label={'Centre No.'} value={userData.exam_centre_no} />
            <ProfileMiniDetails label={'Centre Name'} value={userData.exam_centre.exam_centre_name} />
          </div>
        </div>}
      </section>
    </main>
  )
}

export default ProfileTemplate