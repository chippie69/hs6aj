import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Activities = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">กิจกรรมของ HS6AJ</h2>
        <p className="mt-4 text-lg text-gray-600">
          กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ
        </p>
        <Link href="/activities">
          <Button>
            ดูทั้งหมด
          </Button>
        </Link>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <Image
              src="https://dummyimage.com/800x600/000/fff"
              alt="activity_1"
              width={800}
              height={600}
            />
            <h3 className="text-xl font-semibold mt-4">บริจาคสิ่งของ</h3>
            <p className="mt-2 text-gray-600">
              สมาคมวิทยุสมัครเล่นจังหวัดพิจิตรร่วมบริจาคสิ่งของเพื่อช่วยเหลือผู้ประสบภัยน้ำท่วม
            </p>
            <Link href="/activity/1">
              <Button variant="outline" className="my-4">
                ดูเพิ่มเติม
              </Button>
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <Image
              src="https://dummyimage.com/800x600/000/fff"
              alt="activity_1"
              width={800}
              height={600}
            />
            <h3 className="text-xl font-semibold mt-4">
              เลี้ยงอาหารกลางวันเด็กนนักเรียน
            </h3>
            <p className="mt-2 text-gray-600">
              สมาคมวิทยุสมัครเล่นจังหวัดพิจิตรร่วมเลี้ยงอาหารกลางวันเด็กนักเรียน
            </p>
            <Link href="/activity/2">
              <Button variant="outline" className="my-4">
                ดูเพิ่มเติม
              </Button>
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <Image
              src="https://dummyimage.com/800x600/000/fff"
              alt="activity_1"
              width={800}
              height={600}
            />
            <h3 className="text-xl font-semibold mt-4">บริจาคสิ่งของ</h3>
            <p className="mt-2 text-gray-600">
              สมาคมวิทยุสมัครเล่นจังหวัดพิจิตรร่วมบริจาคสิ่งของเพื่อช่วยเหลือผู้ประสบภัยน้ำท่วม
            </p>
            <Link href="/activity/3">
              <Button variant="outline" className="my-4">
                ดูเพิ่มเติม
              </Button>
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <Image
              src="https://dummyimage.com/800x600/000/fff"
              alt="activity_1"
              width={800}
              height={600}
            />
            <h3 className="text-xl font-semibold mt-4">
              เลี้ยงอาหารกลางวันเด็กนนักเรียน
            </h3>
            <p className="mt-2 text-gray-600">
              สมาคมวิทยุสมัครเล่นจังหวัดพิจิตรร่วมเลี้ยงอาหารกลางวันเด็กนักเรียน
            </p>
            <Link href="/activity/4">
              <Button variant="outline" className="my-4">
                ดูเพิ่มเติม
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
