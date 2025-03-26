import MembershipCard from "@/components/MembershipCard";

import { MemberData } from "@/constant/membershipData";

const NewMember = () => {
  return (
    <section id="newMember" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-3xl font-bold mb-8">สมาชิก HS6AJ ล่าสุด</h1>

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
