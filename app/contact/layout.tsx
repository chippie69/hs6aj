import { Metadata } from "next";

interface LayoutProps {
    params: { slug: string };
    children: React.ReactNode;
}

export async function generateMetadata({
    params,
}: LayoutProps): Promise<Metadata> {
    return {
        title: `ติดต่อเรา`,
        description: `ติดต่อเรา`,

    }
}

const Layout = ({ params, children }: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout