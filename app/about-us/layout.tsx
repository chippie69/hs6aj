export async function generateMetadata() {
  return {
    title: `เกี่ยวกับเรา - HS6AJ`,
    description: "ข้อมูล รายละเอียดเกี่ยวกับสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
    keywords: ["เกี่ยวกับ HS6AJ", "รายละเอียดสมาคม", "การก่อต้ัง HS6AJ"],
    openGraph: {
      title: `เกี่ยวกับเรา - HS6AJ`,
      description: "",
      url: `${process.env.HOST_URL}/about-us`,
      siteName: `เกี่ยวกับเรา - HS6AJ`,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: `เกี่ยวกับเรา - HS6AJ`,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `เกี่ยวกับเรา - HS6AJ`,
      description: "",
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
  return <div className="min-h-screen">
    {children}
  </div>;
}
