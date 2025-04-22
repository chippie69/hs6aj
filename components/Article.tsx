import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { articles } from '@/constant/articles';
import ArticleCard from '@/components/ArticleCard';

const Article = () => {
  const sortedArticles = articles
      .sort((a, b) => Number(b.id) - Number(a.id))
      .slice(0, 4);

  return (
    <section id="article" className='py-16 bg-white text-gray-900'>
      <div className='container mx-auto px-6 md:px-12 lg:px-20 text-center'>
        <h2 className='text-3xl font-bold text-center my-4'>บทความน่ารู้</h2>
        <p className="my-4 text-lg text-gray-600">
          บทความเกี่ยวกับวิทยุสื่อสาร ข้อมูล ข่าวสารต่าง ๆ ที่น่าสนใจ 
        </p>
        <Link href="/articles">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 my-4 text-lg rounded-lg">
            ดูทั้งหมด
          </Button>
        </Link>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Article