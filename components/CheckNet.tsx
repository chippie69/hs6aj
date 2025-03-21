import Link from "next/link";
import { RadioTower, Radio  } from "lucide-react"
import { Button } from "./ui/button";

const CheckNet = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">ทดสอบสัญญาณกับ HS6AJ</h2>
        <p className="mt-4 text-lg text-gray-600">
          เรียนเชิญเพื่อนนักวิทยุสมัครเล่นเข้าร่วมทดสอบสัญญาณประจำวันกับสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
          HS6AJ
          เพื่อเป็นการเตรียมความพร้อมของอุปกรณ์สื่อสารให้พร้อมใช้งานในสถานการณ์ฉุกเฉิน
          โดยจะเปิดให้ทดสอบสัญญาณทุกวันจันทร์ พุธ ศุกร์ ตั้งแต่เวลา 19.00 -
          19.30 น. โดยประมาณ
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <RadioTower className="h-10 w-10 text-blue-500" />
              <h3 className="text-xl font-semibold">ระบบ FM</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Repeater E24BD 145.6875 MHz Dup-600 KHz โทน CTCSS 103.5 Hz
            </p>
            <Link href="/repeater" className="">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 mt-2 rounded-lg cursor-pointer">
                ข้อมูลเพิ่มเติม
              </Button>
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Radio className="h-10 w-10 text-orange-500" />
              <h3 className="text-xl font-semibold">ระบบ AllStarLink</h3>
            </div>
            <p className="mt-2 text-gray-600">AllStarLink Node 597910</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Radio className="h-10 w-10 text-green-500" /> 
              <h3 className="text-xl font-semibold">ระบบ Echolink</h3>
            </div>
            <p className="mt-2 text-gray-600">Echolink E25LO-R</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Radio className="w-10 h-10 text-pink-500" />
              <h3 className="text-xl font-semibold">ระบบ D-STAR</h3>
            </div>
            <p className="mt-2 text-gray-600">D-STAR XLX 149 Module P</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckNet;
