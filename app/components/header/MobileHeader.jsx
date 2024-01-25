"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import Xmark from "./Xmark";
import LogoBlack from "../LogoBlack";
import { menuItems } from "@/utils";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="fixed z-50 w-full px-2 text-sm text-white uppercase top-4">
      <div className="flex items-center justify-between">
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
        <button type="button" onClick={() => toggleIsOpen()}>
          <HamburgerIcon />
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-white text-black px-2 sm:px-6">
          <div className="flex items-center justify-between mt-4">
            <div className="w-full">
              <Link href="/">
                <LogoBlack />
              </Link>
            </div>
            <button type="button" onClick={() => toggleIsOpen()}>
              <Xmark />
            </button>
          </div>
          <nav className="mt-20 border-b">
            <ul className="flex flex-col gap-8 mb-20">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-3xl"
                    onClick={toggleIsOpen}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="mt-10">
            <ul className="flex items-center justify-between">
              <li>
                <Link href="#">Reach out</Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-6 py-3 text-white transition bg-black border border-black rounded-full hover:text-black hover:bg-white focus:outline-1 focus:bg-white focus:text-black"
                >
                  Book a test ride
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
