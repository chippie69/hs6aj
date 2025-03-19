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
      <Image
        src={images[0]}
        alt={title}
        width={800}
        height={600}
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">
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
