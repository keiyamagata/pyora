"use client";

import Link from "next/link";
import LogoBlack from "../LogoBlack";

const Footer = () => {
  return (
    <footer className="h-[400px] bg-white text-black">
      <section className="container py-16">
        <div className="flex justify-between pb-16 border-b">
          <div>
            <LogoBlack />
            <nav className="mt-8">
              <ul className="flex gap-8 uppercase text-small">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Bikes</Link>
                </li>
                <li>
                  <Link href="#">Story</Link>
                </li>
                <li>
                  <Link href="#">Leasing</Link>
                </li>
                <li>
                  <Link href="#">Reach out</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Subscribe</h3>
            <form onSubmit={() => {}}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border-b focus:outline-black"
              />
              <button className="px-6 py-2 ml-3 text-white uppercase transition bg-black rounded-full hover:bg-white hover:text-black hover:ring-1 hover:ring-black">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#4F4F4F]">
              By subscribing you agree to with our{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-8 text-[#4F4F4F]">
          <nav>
            <ul className="flex gap-6 uppercase text-small">
              <li>
                <Link href="#">Privacy policy</Link>
              </li>
              <li>
                <Link href="#">Terms of service</Link>
              </li>
              <li>
                <Link href="#">Cookies settings</Link>
              </li>
            </ul>
          </nav>
          <span className="text-xs">
            &copy; 2023 Relume. All rights reserved
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
