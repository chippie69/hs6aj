export async function generateMetadata() {
  return {
    title: `ติดต่อเรา - HS6AJ`,
    description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
    keywords: ["ติดต่อเรา", "ที่อยู่สมาคม", "อีเมล์สมาคม", "แฟนเพจ", "ไลน์", "Youtube"],
    openGraph: {
      title: `ติดต่อเรา - HS6AJ`,
      description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
      url: `${process.env.HOST_URL}/contact`,
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
    authors: [{ name: "HS6AJ", url: process.env.HOST_URL }],
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
