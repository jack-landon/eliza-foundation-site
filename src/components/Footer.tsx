import { Github, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-200 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start justify-between">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img src="/logo-black.png" alt="" className="h-12" />
          {/* Navigation Links */}
          <nav className="flex flex-col text-black mt-4 font-bold">
            <Link href="#" className="hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Projects
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Funding & Support
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Decentralized Nodes
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Education
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Research
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Careers
            </Link>
            <Link href="#" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <Link
              href="https://www.linkedin.com/company/eliza-foundation/about/?viewAsMember=true"
              target="_blank"
              className="hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </Link>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-8 mt-3 sm:mt-0">
          <Link
            href="https://x.com/FoundationEliza"
            target="_blank"
            className=""
          >
            <img
              src="/icons/x_icon.png"
              alt=""
              className="w-12 h-12 text-white hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="#" className="">
            <img
              src="/icons/discord_icon.png"
              alt=""
              className="w-12 h-12 text-white hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="#" className="">
            <img
              src="/icons/github_icon.png"
              alt=""
              className="w-12 h-12 text-white hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
