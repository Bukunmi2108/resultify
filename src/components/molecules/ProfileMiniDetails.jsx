import React from 'react'

const ProfileMiniDetails = ({label, value}) => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <span className='text-gray-500 font-poppins text-sm'>{label}</span>
      <span className='text-black font-sans text-lg font-semibold text-ellipsis line-clamp-1'>{value}</span>
    </div>
  )
}

export default ProfileMiniDetails