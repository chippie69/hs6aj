import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `กิจกรรมทั้งหมด - HS6AJ`,
  description: "กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ",
  keywords: ["กิจกรรม HS6AJ", "การบริจาค HS6AJ", "มอบสิ่งของ HS6AJ", "ช่วยเหลือ HS6AJ"],
  openGraph: {
    title: `กิจกรรมทั้งหมด - HS6AJ`,
    description: "กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ",
    url: `${process.env.HOST_URL}/activities`,
    siteName: `กิจกรรมทั้งหมด - HS6AJ`,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: `กิจกรรมทั้งหมด - HS6AJ`,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `กิจกรรมทั้งหมด - HS6AJ`,
    description: "กิจกรรมที่ผ่านมาของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ",
    images: [""],
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "HS6AJ", url: process.env.HOST_URL }],
};

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
