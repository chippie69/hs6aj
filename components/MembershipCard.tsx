import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type newMemberProps = {
  image: string;
  name: string;
  callsign: string;
  id: string;
  membershipType: string;
  startDate: string;
  endDate: string;
  presidentName: string;
};

const MembershipCard = ({
  image,
  name,
  callsign,
  id,
  membershipType,
  startDate,
  endDate,
  presidentName,
}: newMemberProps) => {

  return (
    <Card className={`w-[300px] md:w-[600px] border-2 ${membershipType === 'ตลอดชีพ' ? 'border-green-500' : 'border-yellow-600'} `}>
      <div className={`${membershipType === 'ตลอดชีพ' ? 'bg-green-600' : 'bg-yellow-800'} text-white text-center p-4`}>
        <h2 className="text-sm md:text-lg font-bold">สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร</h2>
        <p className="text-xs md:text-sm">Amateur Radio Associate of Phichit</p>
      </div>

      <CardContent className="">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="">
            <Image
              src={image}
              alt=""
              width={100}
              height={120}
              className="rounded-lg border border-gray-300"
            />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-lg font-bold text-gray-700">{callsign}</p>

            <p className="text-sm text-gray-600">{id}</p>
            <p className="text-sm text-gray-600">สมาชิก {membershipType}</p>
            <div className="flex flex-row items-center justify-between">
              <p className="text-sm">เริ่มเป็นสมาชิก</p>
              <p className="text-sm">{startDate}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-sm">สิ้นสุดเป็นสมาชิก</p>
              <p className="text-sm">{endDate}</p>
            </div>
            <div className="mt-4 text-center text-gray-700 text-sm">
            <p>_________________________</p>
            <p>{presidentName}</p>
            <p>นายกสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร</p>
          </div> 
          </div>

          
        </div>
      </CardContent>
    </Card>
  );
};

export default MembershipCard;
