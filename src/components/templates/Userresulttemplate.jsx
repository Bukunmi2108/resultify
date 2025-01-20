import React from 'react'
import Button from '../atoms/Button'

const Userresulttemplate = () => {
  return (
    <main className='main'>
      <div className='flex flex-row gap-2 items-center justify-between p-2 py-4 max-w-5xl mx-auto'>
        <Button text={'< back'} size='small' type='muted'/>
        <div className='flex flex-row gap-2'>
          <Button text={'Print'} size='small'/>
          <Button text={'Download'} size='small'/>
        </div>
      </div>
      <div className='max-w-5xl aspect-result mx-auto p-2'>
        <div className='bg-gray-500 w-full h-full'>

        </div>
      </div>
    </main>
  )
}

export default Userresulttemplate