"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-8">
        <Link href="/">
          <Image
            src="/images/hs6aj_logo.png"
            alt="hs6aj logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
        </div>
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
