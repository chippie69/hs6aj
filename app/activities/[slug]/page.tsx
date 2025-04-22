"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { activities } from "@/constant/activities";
import { formatThaiDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActivityPage() {
  const { slug } = useParams();

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return notFound();
  }

  const images = activity.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">{activity.title}</h2>
        <p className="text-gray-600 mt-2 text-lg">{activity.description}</p>
        <div className="flex flex-row items-center justify-between mt-8">
          <p className="text-gray-500 text-xs">{formatThaiDate(activity.date)}</p>
          <p className="text-gray-500 text-xs">ผู้เขียน {activity.author}</p>
        </div>
      </div>

      <div className="mt-8 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 bg-white">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          slideDuration={300}
          showThumbnails={true}
          thumbnailPosition="bottom"
        />
      </div>

      <div className="flex items-center justify-center p-6">
        <Link href="/activities">
          <Button variant="outline">กิจกรรมอื่น ๆ</Button>
        </Link>
      </div>
    </div>

    // <div className="mt-20 container mx-auto">
    //   <div className="">
    //     <div>
    //       <p>{activity.title}</p>
    //       <p>{activity.description}</p>
    //       <p>{activity.date}</p>
    //     </div>
    //     <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
    //       {activity.images.map((image, index) => (
    //         <Dialog key={index}>
    //           <DialogTrigger asChild>
    //             <Image
    //               src={image}
    //               alt={activity.title}
    //               width={800}
    //               height={600}
    //               onClick={() => setSelectedImage(image)}
    //             />
    //           </DialogTrigger>
    //           <DialogContent className="max-w-3xl">
    //             <Image
    //               src={selectedImage || image}
    //               alt="Selected Image"
    //               width={800}
    //               height={600}
    //               className="rounded-md w-full"
    //             />
    //           </DialogContent>
    //         </Dialog>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
