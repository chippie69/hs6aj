export async function generateMetadata() {
  return {
    title: `สมัครสมาชิก - HS6AJ`,
    description: "สมัครสมาชิกกับสมาคมวิทยุสมัครจังหวัดพิจิตร",
    keywords: ["สมัครสมาชิก", "สมัครสมาชิกสมาคมวิทยุสมัครเล่นพิจิตร", "สมาชิก HS6AJ", "5 ปี", "ตลอดชีพ", "แนบไฟล์"],
    openGraph: {
      title: `สมัครสมาชิก - HS6AJ`,
      description: "สมัครสมาชิกกับสมาคมวิทยุสมัครจังหวัดพิจิตร",
      url: `${process.env.HOST_URL}/register`,
      siteName: `สมัครสมาชิก - HS6AJ`,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: `สมัครสมาชิก - HS6AJ`,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `สมัครสมาชิก - HS6AJ`,
      description: "สมัครสมาชิกกับสมาคมวิทยุสมัครจังหวัดพิจิตร",
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
  return <div className="min-h-screen">{children}</div>;
}
