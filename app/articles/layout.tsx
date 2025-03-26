import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `บทความที่น่าสนใจทั้งหมด - HS6AJ`,
  description: "บทความเกี่ยวกับวิทยุสื่อสาร ข้อมูล ข่าวสารต่าง ๆ ที่น่าสนใจ",
  keywords: ["บทความ HS6AJ", "ข่าวสาร HS6AJ", "ความรู้ HS6AJ", "ข้อมูล HS6AJ"],
  openGraph: {
    title: `บทความที่น่าสนใจทั้งหมด - HS6AJ`,
    description: "บทความเกี่ยวกับวิทยุสื่อสาร ข้อมูล ข่าวสารต่าง ๆ ที่น่าสนใจ",
    url: "https://hs6aj.com",
    siteName: `บทความที่น่าสนใจทั้งหมด - HS6AJ`,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: `บทความที่น่าสนใจทั้งหมด - HS6AJ`,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `บทความที่น่าสนใจทั้งหมด - HS6AJ`,
    description: "บทความเกี่ยวกับวิทยุสื่อสาร ข้อมูล ข่าวสารต่าง ๆ ที่น่าสนใจ",
    images: [""],
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "HS6AJ", url: "https://test.test/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
