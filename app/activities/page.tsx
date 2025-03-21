
import { activities } from '@/constant/activities'
import ActivityCard from '@/components/ActivityCard'

const ActivitiesPage = () => {
  const sortedActicities = activities
    .sort((a, b) => Number(b.id) - Number(a.id))

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">กิจกรรมของ HS6AJ</h2>
        <p className="mt-4 text-lg text-gray-600">
          กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedActicities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesPage