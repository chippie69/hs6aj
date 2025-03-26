
import Link from "next/link";
import { Button } from "@/components/ui/button";

import ActivityCard from "@/components/ActivityCard";
import { activities } from "@/constant/activities";

const Activities = () => {
  // sort by id
  const sortedActicities = activities
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 4);

  return (
    <section id="activity" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">กิจกรรมของ HS6AJ</h2>
        <p className="mt-4 text-lg text-gray-600">
          กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ
        </p>
        <Link href="/activities">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 my-4 text-lg rounded-lg">
            ดูทั้งหมด
          </Button>
        </Link>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedActicities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
