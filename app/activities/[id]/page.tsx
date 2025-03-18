import Image from 'next/image'
import React from 'react'

const ActivityPage = () => {
  return (
    <>
    <div className='mt-20'>
      top
    </div>
    <div className='mt-20 container mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <div>
            <Image 
              src="https://dummyimage.com/800x600/000/fff"
              alt='image'
              fill
            />
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default ActivityPage