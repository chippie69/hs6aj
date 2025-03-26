export async function generateMetadata() {
    return {
      title: `สมัครสมาชิก - HS6AJ`,
      description: "สมัครสมาชิกกับสมาคมวิทยุสมัครจังหวัดพิจิตร",
      keywords: ["hs6aj", "hamradio", "amateur radio", "thailand"],
      authors: [{ name: "HS6AJ", url: "https://test.test/" }],
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
  