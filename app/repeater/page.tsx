import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { MapPin, Radio, Signal } from "lucide-react";
import Image from "next/image";

const RepeaterPage = () => {
  return (
    <div className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">รายละเอียด Repeater E24DB</h1>
        <p className="text-lg text-gray-700 mb-12">
          สถานีทวนสัญญาณวิทยุสมัครเล่นจังหวัดพิจิตร (E24DB)
          ของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร (HS6AJ)
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Repeater Overview Card */}
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Radio className="h-10 w-10 text-blue-500" />
              <CardTitle>Repeater คืออะไร?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Repeater (รีพีตเตอร์) หรือสถานีทวนสัญญาณ เป็นอุปกรณ์ที่ช่วยขยายระยะการสื่อสารของคลื่นวิทยุสมัครเล่น
                โดยทำหน้าที่รับสัญญาณจากสถานีต้นทางแล้วส่งต่อออกไปให้ไกลขึ้น
              </p>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <MapPin className="h-10 w-10 text-green-500" />
              <CardTitle>ที่ตั้งและพิกัด</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                วัดเขารูปช้าง ตำบลดงป่าคำ อำเภอเมือง จังหวัดพิจิตร
              </p>
              <p className="text-gray-600">
                พิกัด: OK06FS (16°45.55&apos; N, 100°28.84&apos; E)
              </p>
              <a
                href="https://maps.app.goo.gl/xfNHcdRVbxpJKgmb7"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ดูแผนที่
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Frequency & System Card */}
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Signal className="h-10 w-10 text-red-500" />
              <CardTitle>ความถี่และระบบ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">ความถี่: 145.6875 MHz (DUP-600 KHz)</p>
              <p className="text-gray-600">โทน CTCSS: 103.5 Hz</p>
              <p className="text-gray-600">ระบบ: YAESU DR-2X Repeater</p>
            </CardContent>
          </Card>
          
          {/* Antenna & Transmission Card */}
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Radio className="h-10 w-10 text-purple-500" />
              <CardTitle>เสาอากาศและการส่งสัญญาณ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">สายนำสัญญาณ: 12 DFB</p>
              <p className="text-gray-600">
                สายอากาศ: 8x8 Stacks Folded Dipole (RX), 16x16 Stacks Folded Dipole (TX)
              </p>
              <p className="text-gray-600">ความสูงของเสา: 54 เมตร (ต่อยอดปลายล่อฟ้า 6 เมตร)</p>
              <p className="text-gray-600">ความสูงจากระดับน้ำทะเล: 486.7 เมตร</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center p-4">
            <Image 
              src="/images/repeater-e24bd-1.jpg"
              alt="repeater-e24bd"
              width={600}
              height={800}
              className="rounded-2xl"
            />
          </div>
      </div>
    </div>
  );
};

export default RepeaterPage;
