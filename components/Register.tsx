import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <section id="register" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">สมัครสมาชิกกับ HS6AJ</h2>
        <p className="mt-4 text-lg text-gray-600">
          สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ เปิดรับสมัครสมาชิก
          เพื่อร่วมเป็นส่วนหนึ่งของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
        </p>
        <div className="mt-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold ">มีให้เลือก 2 รูปแบบ</h3>
            <p className="text-gray-600">
              - 3 ปี ค่าธรรมเนียม 300 บาท <br />- ตลอดชีพ ค่าธรรมเนียม 1,000 บาท
            </p>
            <h3 className="text-xl font-semibold pt-4">เอกสารการสมัคร</h3>
            <p className="text-gray-600">
              - สำเนาบัตรพนักงานวิทยุสมัครเล่น <br />
              - สำเนาบัตรประชาชน <br />
              - รูปถ่ายหน้าตรง <br />
              - หลักฐานการโอนเงิน <br />
              - เบอร์โทรศัพท์ / ที่อยู่ที่ติดต่อได้สะดวก <br />
            </p>
            <h3 className="text-xl font-semibold pt-4">
              ช่องทางการชำระค่าธรรมเนียม
            </h3>
            <p className="text-gray-600">
              ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br />
              - สาขา สากเหล็ก <br />
              - ชื่อบัญชี สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร <br />
              - เลขที่ 020216266716 <br />
            </p>
            <h3 className="text-xl font-semibold pt-4">
              ส่งเอกสาร / สอบถามข้อมูล
            </h3>
            <div className="flex flex-col xl:flex-row items-center mt-4 gap-8">
              <Link href="https://lin.ee/Fk3FcoM">
                <Button
                  variant="line"
                  size="lg"
                  className="uppercase flex items-center rounded-full gap-2"
                >
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
        </div>
      </div>
    </section>
  );
};

export default Register;
