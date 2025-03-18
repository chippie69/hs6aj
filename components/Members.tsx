import { boardMembers } from "@/constant"
import Image from "next/image"

const Members = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto p-6'>
        <h2 className='text-3xl font-bold text-center mb-6'>บอร์ดคณะกรรมการ</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <Image 
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Members