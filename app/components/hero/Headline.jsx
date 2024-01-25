"use client";

import Link from "next/link";

const Headline = () => {
  return (
    <div className="text-center text-white w-fit">
      <p className="block mb-2 text-xs uppercase md:text-small">
        Lease your bike
      </p>
      <h2 className="text-3xl mb-14 md:text-title">
        Commute with ease.<span className="block">Your company bike.</span>
      </h2>
      <Link
        href="/calculator"
        className="px-6 py-3 text-sm uppercase transition bg-black rounded-full hover:bg-gray-700"
      >
        Calculate your price
      </Link>
    </div>
  );
};

export default Headline;
