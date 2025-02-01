import React from 'react'
import Button from '../atoms/Button'

const Homepagetemplate = () => {
  return (
    <main className='main'>
      <section>
        <div className='mx-auto py-32 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-6xl font-bold font-sans text-center'>A One-way solution for result checking</h1>
          <Button link={'/signup'} text={'Get started'} size='large' />
        </div>
      </section>
      
    </main>
  )
}

export default Homepagetemplate