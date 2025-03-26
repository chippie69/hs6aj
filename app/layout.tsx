import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ",
  description: "เว็บไซต์อย่างเป็นทางการของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตรอยู่ภายใต้การกำกับดูแลของ กสทช. มีเนื้อหาต่าง ๆ ข่าวสาร กิจกรรม และข้อมูลสำหรับนักวิทยุสมัครเล่น",
  keywords: ['สมาคมวิทยุสมัครเล่น', 'วิทยุสมัครเล่น', 'พิจิตร', 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร', 'วิทยุพิจิตร', 'HS6AJ', '145.6875', 'E24BD', 'เชื่อมโยงเครือข่ายพิจิตร', 'echolink phichit', 'allstarlink phichit', 'dstar phichit', '597910', 'E25LO-R', 'E25LO-L', '149 Module P'],
  openGraph: {
    title: 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ',
    description: 'เว็บไซต์อย่างเป็นทางการของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตรอยู่ภายใต้การกำกับดูแลของ กสทช. มีเนื้อหาต่าง ๆ ข่าวสาร กิจกรรม และข้อมูลสำหรับนักวิทยุสมัครเล่น',
    url: 'https://hs6aj.com',
    siteName: 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ',  
      }
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'สมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ',
    description: 'เว็บไซต์อย่างเป็นทางการของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตรอยู่ภายใต้การกำกับดูแลของ กสทช. มีเนื้อหาต่าง ๆ ข่าวสาร กิจกรรม และข้อมูลสำหรับนักวิทยุสมัครเล่น',
    images: ['']
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body
        className={prompt.className}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
