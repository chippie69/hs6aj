import { Cat } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20">
      <div className="">
        <h1 className="text-2xl font-bold mb-4">ติดต่อเราสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร</h1>
        <p><span className='font-bold'>นายกสมาคม:</span> นายระพีพัชร สุดจิตต์ (HS6RZW)</p>
      <p>
        <span className='font-bold'>ที่ทำการสมาคม:</span> 144/2 ม.1 ต.สากเหล็ก อ.สากเหล็ก จ.พิจิตร 66160
      </p>
      <p>
        <span className='font-bold'>อีเมล:</span> <a href="mailto:hs6aj_e24bd@hotmail.com">hs6aj_e24bd@hotmail.com</a>
      </p>
      </div>
        <h2 className='text-center text-xl py-4'>ช่องทางติดต่ออื่น ๆ</h2>
      <div className='flex flex-row items-center justify-center gap-6'>
        <div>
          <Cat className='text-blue-500' />
        </div>
        <div>
          <Cat className='text-green-500' />
        </div>
        <div>
          <Cat className='text-red-500' />
        </div>
      </div>
    </div>
  )
}

export default ContactPage