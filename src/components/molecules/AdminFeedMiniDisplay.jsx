import React from 'react'

const AdminFeedMiniDisplay = ({icon, count, desc}) => {
  return (
  <div className='flex flex-row items-center w-full justify-start gap-8 bg-white p-4 rounded shadow'>
    {icon}
    <div className='flex flex-col items-start justify-center'>
      <h3 className='font-bold text-3xl text-gray-800'>{count}</h3>
      <span className='font-poppins text-sm font-light'>{desc}</span>
    </div>
  </div>
  )
}

export default AdminFeedMiniDisplay