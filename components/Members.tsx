import Image from "next/image";
import { boardMembers, boardSpecialMembers } from "@/constant";

const Members = () => {
  return (
    <section id="member" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-center my-4">
          คณะกรรมการประจำสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร ประจำปี 2568
        </h2>
        {/* <div className="bg-white rounded-2xl shadow-lg p-4 text-center"> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-lg italic">{member.callsign}</p>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8">
          คณะกรรมการกิตติมศักดิ์ประจำสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {boardSpecialMembers.map((member, index) => (
            <div
              key={index}
              className="bg-yellow-50 rounded-2xl shadow-lg p-4 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto border border-amber-500"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-lg italic">{member.callsign}</p>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Members;
