import type { Metadata } from "next";
import { articles, Articles  } from "@/constant/articles"

interface LayoutProps {
  params: { slug: string };
  chidren: React.ReactNode;
}

const getArticle = (slug: string): Articles | undefined => {
  return articles.find((a) => a.slug === slug)
}

// export const metadata: Metadata = {
//   title: `กิจกรรมของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร`,
//   description: "Generated by create next app",
// };

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const article = getArticle(params.slug)

  if (!article) {
    return {
      title: "Not Found",
      description: "Article not found",
      robots: "noindex, nofollow",
    }
  }

  return {
    title: `${article.title} - HS6AJ`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: `${article.title} - HS6AJ`,
      description: article.description,
      url: 'https://hs6aj.com',
      siteName: article.title,
      images: [
        {
          url: '',
          width: 1200,
          height: 630,
          alt: article.title,  
        }
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - HS6AJ`,
      description: article.description,
      images: ['']
    },
    icons: {
      icon: '/favicon.ico',
    },
    authors: [{ name: "HS6AJ", url: "https://test.test/" }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="min-h-screen">

      {children}

    </div>
  );
}
