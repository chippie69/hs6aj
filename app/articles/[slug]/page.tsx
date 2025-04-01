"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

import { articles } from "@/constant/articles";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  const { slug } = useParams();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">{article.title}</h2>
        <p className="text-gray-600 mt-2 text-lg">{article.description}</p>
        <p className="text-gray-500 mt-1 text-sm">{article.date}</p>
      </div>
      <div>
        <Image
          src={article.images[0]}
          alt={article.title}
          width={800}
          height={600}
        />
      </div>
      <div className="flex flex-col mt-4 gap-8">
        {article.data.map((data, index) => (
          <div key={index}>
            <h2>{data.header}</h2>
            {data.subheader.map((subheader, subheaderIndex) => (
              <p key={subheaderIndex}>{subheader}</p>
            ))}
          </div>
        ))}
      </div>

      {article.reference && (
        <div>
          <Link href={article.reference}>
            {/* <p className="text-blue-500 underline my-4 hover:text-blue-700">ดูเพิ่มเติม</p> */}
            <Button variant="link">ดูเพิ่มเติม</Button>
          </Link>
        </div>
      )}  
    </div>
  );
}
