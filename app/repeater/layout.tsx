export async function generateMetadata() {
    return {
      title: `Repeater E24BD - HS6AJ`,
      description: "รายละเอียดเกี่ยวกับ E24BD",
      keywords: ["hs6aj", "hamradio", "amateur radio", "thailand"],
      authors: [{ name: "HS6AJ", url: "https://test.test/" }],
    };
  }
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="min-h-screen">{children}</div>;
  }
  