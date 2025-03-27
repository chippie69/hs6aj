import MembershipCard from "@/components/MembershipCard";

import { MemberData } from "@/constant/membershipData";

const NewMember = () => {
  return (
    <section id="newMember" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-3xl font-bold">สมาชิก HS6AJ ล่าสุด</h1>
        {/* <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span> */}
        <p className="my-4 text-lg text-gray-600">
          ขอขอบคุณที่เข้ามาเป็นส่วนหนึ่งของครอบครัวสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
        </p>
        <div className="flex flex-row whitespace-nowrap gap-4">
          {MemberData.map((member, index) => (
            <MembershipCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewMember;
