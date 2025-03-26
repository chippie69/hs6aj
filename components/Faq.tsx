import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-center my-4">คำถามที่พบบ่อย</h2>
        <p className="my-4 text-lg text-gray-600">
          รวบรวมคำถามที่พบบ่อยเกี่ยวกับสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
        </p>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ฉันจะเป็นสมาชิกกับสมาคมวิทยุสมัครเล่นจังหวัดพิจิตรได้อย่างไร?
              </AccordionTrigger>
              <AccordionContent>
                - คุณสามารถสมัครสมาชิกได้ที่หน้าเว็บไซต์หรือไลน์ OA ของเราได้เลย
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ที่ทำการสมาคมตั้งอยู่ที่ใด?</AccordionTrigger>
              <AccordionContent>
                - ที่ทำการสมาคมตั้งอยู่ที่ 144/2 หมู่ 1 ตำบลสากเหล็ก อำเภอสากเหล็ก
                จังหวัดพิจิตร 66160
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ถ้าไม่มีใบอนุญาตนักวิทยุสมัครเล่น
                สามารถเข้าร่วมกิจกรรมของสมาคมได้หรือไม่?
              </AccordionTrigger>
              <AccordionContent>
                - สามารถเข้าร่วมกิจกรรมบางประเภทได้ เช่น
                การอบรมให้ความรู้หรือกิจกรรมเพื่อสาธารณะประโยชน์
                แต่หากต้องการใช้งานวิทยุสมัครเล่น
                จำเป็นต้องมีใบอนุญาตที่ถูกต้องตามกฎหมายหรืออยู่ภายใต้การควบคุมของพนักงานวิทยุสมัครเล่น
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                จังหวัดพิจิตรจะมีการเปิดสอบเพื่อเป็นพนักงานวิทยุสมัครเล่นหรือไม่?
              </AccordionTrigger>
              <AccordionContent>
                - มีแน่นอน โปรดรอการประกาศจากทางสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>คำถาม</AccordionTrigger>
              <AccordionContent>- คำตอบ</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>คำถาม</AccordionTrigger>
              <AccordionContent>- คำตอบ</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
