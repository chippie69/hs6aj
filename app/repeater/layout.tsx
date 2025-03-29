export async function generateMetadata() {
  return {
    title: `รายละเอียด Repeater E24BD - HS6AJ`,
    description: "สถานีทวนสัญญาณวิทยุสมัครเล่นจังหวัดพิจิตร (E24BD) ของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร (HS6AJ)",
    keywords: ["E24BD", "สถานีทวนสัญญาณพิจิตร", "repeater พิจิตร", "repeater e24bd"],
    openGraph: {
      title: `รายละเอียด Repeater E24BD - HS6AJ`,
      description: "สถานีทวนสัญญาณวิทยุสมัครเล่นจังหวัดพิจิตร (E24BD) ของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร (HS6AJ)",
      url: `${process.env.HOST_URL}/repeater`,
      siteName: "รายละเอียด Repeater E24BD - HS6AJ",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Repeater E24BD - HS6AJ",
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `รายละเอียด Repeater E24BD - HS6AJ`,
      description: "สถานีทวนสัญญาณวิทยุสมัครเล่นจังหวัดพิจิตร (E24BD) ของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร (HS6AJ)",
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
