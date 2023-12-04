"use client";

import { cn } from "@/lib/utils";
import { Bug } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-10 border-b mb-5 px-5 py-2 items-center">
      <Link href="/" className="relative">
        <Image
          src="/roundedLogo.png"
          height={80}
          width={80}
          alt="Logo"
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0 bg-white/70 border rounded-full p-1">
          <Bug className="w-5 h-5 " />
        </div>
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                " hover:text-zinc-800 transition-colors",
                currentPath === link.href ? "text-zinc-900" : "text-zinc-500"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
