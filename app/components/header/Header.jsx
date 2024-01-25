"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/utils";

const Header = () => {
  return (
    <header className="fixed z-50 w-full text-sm text-white uppercase top-4">
      <div className="container grid h-10 grid-cols-3 gap-4 mx-auto">
        <div className="w-full">
          <Link href="/">
            <Image
              src="/images/pyora-logo.svg"
              alt="pyora logo"
              priority
              width={124}
              height={31}
              sizes="(max-width: 768px) 124px, 124px"
              className="object-contain"
            />
          </Link>
        </div>

        <nav>
          <ul className="flex items-center justify-center h-full gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <ul className="flex items-center justify-end h-full gap-6">
            <li>
              <Link href="#">Reach out</Link>
            </li>
            <li>
              <Link
                href="#"
                className="px-6 py-3 transition border border-white rounded-full hover:text-black hover:bg-white focus:outline-1 focus:bg-white focus:text-black"
              >
                Book a test ride
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
