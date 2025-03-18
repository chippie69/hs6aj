import Image from "next/image";
import Link from "next/link";

// import { BellRing, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Register = () => {
  return (
    <section id="register" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">สมัครสมาชิกกับ HS6AJ</h2>
      <p className="mt-4 text-lg text-gray-600">
        สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ เปิดรับสมัครสมาชิก
        เพื่อร่วมเป็นส่วนหนึ่งของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
      </p>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
        {/* 5-Year Membership Card */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">สมาชิก 5 ปี</CardTitle>
            <CardDescription className="text-xl">
              ค่าธรรมเนียม 300 บาท
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left space-y-2">
            <h3 className="text-xl font-semibold">เอกสารการสมัคร</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>สำเนาบัตรพนักงานวิทยุสมัครเล่น</li>
              <li>สำเนาบัตรประชาชน</li>
              <li>รูปถ่ายหน้าตรง</li>
              <li>หลักฐานการโอนเงิน</li>
              <li>เบอร์โทรศัพท์ / ที่อยู่ที่ติดต่อได้สะดวก</li>
            </ul>
            <h3 className="text-xl font-semibold pt-4">ช่องทางการชำระเงิน</h3>
            <p className="text-gray-700">
              ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br />
              - สาขา สากเหล็ก <br />
              - ชื่อบัญชี สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร <br />- เลขที่
              020216266716
            </p>
          </CardContent>
        </Card>

        {/* Lifetime Membership Card */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">สมาชิกตลอดชีพ</CardTitle>
            <CardDescription className="text-xl">
              ค่าธรรมเนียม 1,000 บาท
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left space-y-2">
            <h3 className="text-xl font-semibold">เอกสารการสมัคร</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>สำเนาบัตรพนักงานวิทยุสมัครเล่น</li>
              <li>สำเนาบัตรประชาชน</li>
              <li>รูปถ่ายหน้าตรง</li>
              <li>หลักฐานการโอนเงิน</li>
              <li>เบอร์โทรศัพท์ / ที่อยู่ที่ติดต่อได้สะดวก</li>
            </ul>
            <h3 className="text-xl font-semibold pt-4">ช่องทางการชำระเงิน</h3>
            <p className="text-gray-700">
              ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br />
              - สาขา สากเหล็ก <br />
              - ชื่อบัญชี สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร <br />- เลขที่
              020216266716
            </p>
          </CardContent>
        </Card>
      </div>
      <p className="text-2xl text-red-500 my-4">ชำระค่าธรรมเนียมผ่านบัญชี สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร เท่านั้น !</p>
      <div className="mt-4">
        <Link href="https://lin.ee/Fk3FcoM">
          <Button variant="line">
            <Image
              src="/images/LINE_Brand_icon.png"
              alt="line icon"
              width={30}
              height={30}
              className="object-fill"
            />
            <p className="font-bold">เพิ่มเพื่อนเลย</p>
          </Button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Register;
