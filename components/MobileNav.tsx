"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { links } from "@/constant";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        asChild
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <Button variant="ghost">
          <Menu className="w-8 h-8 text-orange-500" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="p-8">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image 
                src="/images/hs6aj_logo.png"
                alt="hs6aj logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="mt-6">
            <div className="text-xl font-bold mb-2">เมนู</div>
            <ul className="space-y-4 pl-4">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.path}
                      key={index}
                      onClick={handleLinkClick}
                      className={`${link.path === pathname && "text-orange border-b-2 border-orange capitalize font-medium hover:text-orange-500 transition-all"}`}
                    >
                        {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
