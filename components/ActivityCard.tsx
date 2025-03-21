import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ActivityProps = {
    title: string
    description: string
    slug: string
    images: string[]
}

const ActivityCard = ({ title, description, slug, images }: ActivityProps) => {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
      <Link href={`/activities/${slug}`}>
        <Image
          src={images[0]}
          alt={title}
          width={800}
          height={600}
          className="rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <Link href={`/activities/${slug}`}>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
      </Link>
      <p className="mt-2 text-gray-600 line-clamp-4">
        {description}
      </p>
      <Link href={`/activities/${slug}`}>
        <Button variant="outline" className="my-4">
          ดูเพิ่มเติม
        </Button>
      </Link>
    </div>
  );
};

export default ActivityCard;
