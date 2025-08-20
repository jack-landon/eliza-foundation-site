"use client";

import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

const links = [
  "About",
  "Projects",
  "Funding & Support",
  "Decentralized Nodes",
  "Education",
  "Research",
  "Careers",
  "Blog",
];

function convertToLink(link: string) {
  return link.toLowerCase().replace(/ /g, "-");
}

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="flex text-white justify-between items-center py-4 px-8 absolute top-0 left-0 w-full z-10">
      <img src="/logo.png" alt="" className="h-6 lg:h-12" />

      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 hover:bg-white/10 rounded-md transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-left">Menu</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-4 p-4">
              {links.map((link) => (
                <Link
                  href={`/${convertToLink(link)}`}
                  key={link}
                  className="font-semibold hover:underline text-left"
                >
                  {link}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <div className="flex gap-6 items-center">
          {links.map((link) => (
            <Link
              href={`/${convertToLink(link)}`}
              key={link}
              className="font-semibold hover:underline text-sm lg:text-base"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
