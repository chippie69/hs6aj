"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/constant";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-orange border-b-2 border-orange capitalize font-medium hover:text-orange-500 transition-all"}`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar