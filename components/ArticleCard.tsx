import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

type ArticleProps = {
    title: string, 
    description: string, 
    slug: string, 
    images: string[]
}

const ArticleCard = ({title, description, slug, images }: ArticleProps) => {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
      <Link href={`/articles/${slug}`}>
        <Image
          src={images[0]}
          alt={title}
          width={800}
          height={600}
          className="rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <Link href={`/articles/${slug}`}>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
      </Link>
      <p className="mt-2 text-gray-600 line-clamp-4">
        {description}
      </p>
      <Link href={`/articles/${slug}`}>
        <Button variant="outline" className="my-4">
          ดูเพิ่มเติม
        </Button>
      </Link>
    </div>
  )
}

export default ArticleCard