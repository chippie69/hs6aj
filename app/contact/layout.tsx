export async function generateMetadata() {
  return {
    title: `ติดต่อเรา - HS6AJ`,
    description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
    keywords: [""],
    openGraph: {
      title: `ติดต่อเรา - HS6AJ`,
      description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
      url: "https://hs6aj.com",
      siteName: `ติดต่อเรา - HS6AJ`,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: `ติดต่อเรา - HS6AJ`,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `ติดต่อเรา - HS6AJ`,
      description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
      images: [""],
    },
    icons: {
      icon: "/favicon.ico",
    },
    authors: [{ name: "HS6AJ", url: "https://test.test/" }],
  };
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
