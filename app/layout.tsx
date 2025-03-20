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
  description: "ภายใต้การกำกับดูแลของ กสทช.",
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
