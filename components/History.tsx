import { Eye, Goal, Handshake } from "lucide-react";
import React from "react";

const History = () => {
  return (
    <section id="history" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">เกี่ยวกับ HS6AJ</h2>
        <p className="text-start indent-8 mt-4 text-gray-600">
          สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร (HS6AJ) ก่อตั้งขึ้นเมื่อปี พ.ศ. 2545
          โดยกลุ่มนักวิทยุสมัครเล่นที่มีใจรักในการสื่อสารและต้องการพัฒนาเครือข่ายการติดต่อภายในจังหวัดพิจิตรและพื้นที่ใกล้เคียง
          ภายใต้แนวคิด “สื่อสารฉับไว เชื่อมโยงสังคม ก้าวไกลด้วยเทคโนโลยี”
        </p>
        <p className="text-start indent-8 mt-4 text-gray-600">
          จากจุดเริ่มต้นของการรวมตัวกันของนักวิทยุสมัครเล่นเพียงไม่กี่คน
          ปัจจุบันสมาคมฯ ได้เติบโตเป็นองค์กรที่มีสมาชิกหลายร้อยคน
          มีสถานีทวนสัญญาณทำให้สัญญาณครอบคลุมทั่วทั้งในจังหวัดและจังหวัดใกล้เคียง
          และมีบทบาทสำคัญในการ
          ให้ความช่วยเหลือด้านการสื่อสารในสถานการณ์ฉุกเฉินและภัยพิบัติ เช่น
          น้ำท่วมและไฟป่า รวมถึงการสนับสนุนกิจกรรมสาธารณประโยชน์ต่าง ๆ
        </p>
        <p className="text-start indent-8 mt-4 text-gray-600">
          สมาคมฯ มีเป้าหมายในการส่งเสริมและพัฒนาวงการวิทยุสมัครเล่นให้ก้าวหน้า
          จัดอบรมและสอบเพื่อรับประกาศนียบัตรวิทยุสมัครเล่นขั้นต้นและขั้นสูง
          พร้อมทั้งสนับสนุนเยาวชนและบุคคลทั่วไปให้เข้าถึงและเรียนรู้เทคโนโลยีการสื่อสารผ่านวิทยุสมัครเล่น
        </p>
        <p className="text-start indent-8 mt-4 text-gray-600">
          ปัจจุบันสมาคมวิทยุสมัครเล่นจังหวัดพิจิตรยังคงมุ่งมั่นทำหน้าที่เป็นศูนย์กลางการสื่อสารภายในชุมชน
          สนับสนุนการใช้งานคลื่นความถี่อย่างถูกต้อง
          และเป็นเครือข่ายสำคัญที่เชื่อมโยงความสัมพันธ์ของนักวิทยุสมัครเล่นทั้งในและนอกจังหวัด!
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Eye className="h-10 w-10 text-purple-500" />
              <h3 className="text-xl font-semibold">วิสัยทัศน์สมาคม</h3>
            </div>
            <p className="mt-2 text-gray-600">
              มุ่งเสริมสร้างเครือข่ายนักวิทยุสมัครเล่นเพื่อสังคม
              พัฒนาเทคโนโลยีการสื่อสาร
              ส่งเสริมการเรียนรู้และเป็นศูนย์กลางในการให้ความช่วยเหลือด้านการสื่อสารฉุกเฉินเพื่อประโยชน์ของส่วนรวม
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Handshake className="w-10 h-10 text-lime-500" />
              <h3 className="text-xl font-semibold">พันธกิจสมาคม</h3>
            </div>
            <ol className="text-start text-lg underline mt-2 text-gray-600">
              พัฒนาและส่งเสริมเครือข่ายวิทยุสมัครเล่น
            </ol>
            <li className="text-start text-gray-600">
              สนับสนุนและสร้างเครือข่ายนักวิทยุสมัครเล่นในจังหวัดพิจิตรและทั่วประเทศ
            </li>
            <li className="text-start text-gray-600">
              ส่งเสริมการใช้งานความถี่ให้เกิดประโยชน์สูงสุด
            </li>

            <ol className="text-start text-lg underline mt-2 text-gray-600">
              เป็นศูนย์กลางด้านการสื่อสารฉุกเฉินและช่วยเหลือสังคม
            </ol>
            <li className="text-start text-gray-600">
              สนับสนุนการใช้วิทยุในภาวะฉุกเฉินและภัยพิบัติ
            </li>
            <li className="text-start text-gray-600">
              ประสานงานกับหน่วยงานภาครัฐและองค์กรช่วยเหลือต่าง ๆ
            </li>

            <ol className="text-start text-lg underline mt-2 text-gray-600">
              พัฒนาทักษะและองค์ความรู้ด้านวิทยุสื่อสาร
            </ol>
            <li className="text-start text-gray-600">
              จัดอบรมและให้ความรู้แก่สมาชิกและผู้ที่สนใจ
            </li>
            <li className="text-start text-gray-600">
              สนับสนุนเยาวชนและประชาชนทั่วไปให้เข้าถึงและได้เรียนรู้เกี่ยวกับวิทยุสื่อสาร
            </li>

            <ol className="text-start text-lg underline mt-2 text-gray-600">
              ส่งเสริมจรรยาบรรณและมาตรฐานการใช้ความถี่
            </ol>
            <li className="text-start text-gray-600">
              สร้างความตระหนักรู้เกี่ยวกับกฏระเบียบและมารยาทในการใช้ความถี่
            </li>
            <li className="text-start text-gray-600">
              รณรงค์ให้สมาชิกใช้วิทยุสื่อสารอย่างรับผิดชอบและสร้างสรรค์
            </li>

            <ol className="text-start text-lg underline mt-2 text-gray-600">
              สร้างความสัมพันธ์และความร่วมมือกับองค์กรต่าง ๆ
            </ol>
            <li className="text-start text-gray-600">
              ประสานความร่วมมือกับหน่วยงานที่เกี่ยวข้อง
            </li>
            <li className="text-start text-gray-600">
              จัดกิจกรรมและโครงการที่เป็นประโยชน์ร่วมกับชุมชนและองค์กรอื่น ๆ
            </li>

            <ol className="text-start text-lg underline mt-2 text-gray-600">
              พัฒนาศักยภาพและความพร้อมของสมาคม
            </ol>
            <li className="text-start text-gray-600">
              เสริมสร้างโครงสร้างบริหารงานให้มีประสิทธิภาพ
            </li>
            <li className="text-start text-gray-600">
              จัดหาอุปกรณ์และเทคโนโลยีที่ทันสมัยเพื่อรองรับภารกิจของสมาคม
            </li>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-center gap-4">
              <Goal className="w-10 h-10 text-red-500" />
              <h3 className="text-xl font-semibold">วัตถุประสงค์สมาคม</h3>
            </div>
            <p className="text-start mt-2 text-gray-600">
              1.
              เพื่อส่งเสริมและเผยแพร่ความรู้ด้านการสื่อสารให้แก่สมาชิกและประชาชนทั่วไป
            </p>
            <p className="text-start mt-2 text-gray-600">
              2. เพื่อสร้างความสัมพันธ์ในกลุ่มสมาชิกด้วยกัน
            </p>
            <p className="text-start mt-2 text-gray-600">
              3. เพื่อเป็นศูนย์กลางในการรับและแจ้งข่าวสารอันเป็นประโยชน์แก่ทุกคน
            </p>
            <p className="text-start mt-2 text-gray-600">
              4. เพื่อเป็นข่ายสื่อสารสำรองฉุกเฉิน
            </p>
            <p className="text-start mt-2 text-gray-600">
              5. เพื่อช่วยเหลือสังคมและใช้ในกิจการสาธารณะประโยชน์
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
