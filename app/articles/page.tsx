
import { articles } from '@/constant/articles'
import ArticleCard from '@/components/ArticleCard'

const ArticlesPage = () => {
  const sortedArticles = articles
    .sort((a, b) => Number(b.id) - Number(a.id))

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">บทความที่น่าสนใจ</h2>
        <p className="mt-4 text-lg text-gray-600">
          บทความเกี่ยวกับวิทยุสื่อสาร ข้อมูล ข่าวสารต่าง ๆ ที่น่าสนใจ
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesPage