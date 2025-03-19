"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation"
import { useState } from "react";
import Image from "next/image";
import { activities } from "@/constant/activities";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ActivityPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { slug } = useParams();

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return notFound();
  }

  return (
    <div className="mt-20 container mx-auto">
      <div className="">
        <div>
          <p>{activity.title}</p>
          <p>{activity.description}</p>
          <p>{activity.date}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {activity.images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Image
                  src={image}
                  alt={activity.title}
                  width={800}
                  height={600}
                  onClick={() => setSelectedImage(image)}
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <Image
                  src={selectedImage || image}
                  alt="Selected Image"
                  width={800}
                  height={600}
                  className="rounded-md w-full"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
