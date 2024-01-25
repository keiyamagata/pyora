"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Headline = () => {
  const leaseRef = useRef();
  const titleRef = useRef();
  const ctaRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(leaseRef.current, { y: 20 }, { y: 0, opacity: 1 });
      tl.fromTo(titleRef.current, { y: 20 }, { y: 0, opacity: 1 });
      tl.fromTo(ctaRef.current, {}, { opacity: 1 });
    },
    { scope: titleRef }
  );

  return (
    <div className="text-center text-white w-fit">
      <p
        ref={leaseRef}
        className="block mb-2 text-xs uppercase opacity-0 md:text-small"
      >
        Lease your bike
      </p>
      <h2
        ref={titleRef}
        className="text-4xl opacity-0 mb-14 md:text-5xl lg:text-title"
      >
        Commute with ease.<span className="block">Your company bike.</span>
      </h2>
      <Link
        ref={ctaRef}
        href="/calculator"
        className="px-6 py-3 text-sm uppercase transition bg-black rounded-full opacity-0 hover:bg-white hover:text-black"
      >
        Calculate your price
      </Link>
    </div>
  );
};

export default Headline;
