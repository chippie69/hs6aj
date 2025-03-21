export async function generateMetadata() {
  return {
    title: `ติดต่อเรา - HS6AJ`,
    description: "ข้อมูลติดต่อและรายละเอียดของสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร",
    keywords: ["hs6aj", "hamradio", "amateur radio", "thailand"],
    authors: [{ name: "HS6AJ", url: "https://test.test/" }],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">{children}</main>
    </body>
  );
}
