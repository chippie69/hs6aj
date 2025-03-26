import Image from 'next/image'
import React from 'react'

const Certificate = () => {
  return (
    <section id='certificate' className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">ใบอนุญาตจัดตั้งสมาคม</h2>
        <p className="mt-4 text-lg text-gray-600">
          สมาคมวิทยุสมัครเล่นจังหวัดพิจิตรได้รับการจัดตั้งขึ้นอย่างถูกต้อง ภายใต้การกำกับดูแลของสำนักงานคณะกรรมการกิจการกระจายเสียง กิจการโทรทัศน์ และกิจการโทรคมนาคมแห่งชาติ หรือ กสทช.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">ใบอนุญาตจัดตั้งสมาคม</h3>
            <Image 
              src="https://dummyimage.com/600x800/000/fff"
              alt='ใบอนุญาตจัดตั้งสมาคม'
              width={600}
              height={800}
            />
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">รูปภาพ</h3>
            <p className="mt-2 text-gray-600">
            รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ รูปภาพ 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate