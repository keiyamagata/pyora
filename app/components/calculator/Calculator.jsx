"use client";

import { useState } from "react";
import Link from "next/link";

const Calculator = () => {
  const [distance, setDistance] = useState(200);
  const [price, setPrice] = useState(3890);
  const [wage, setWage] = useState(0);

  return (
    <section className="container relative flex flex-col items-center gap-10 mb-20 text-white">
      <div className="mt-32 text-center">
        <p className="text-xs uppercase md:text-small">Savings calculator</p>
        <h3 className="text-3xl lg:text-title">
          Calculate your savings{" "}
          <span className="block">with a Pyora bike</span>
        </h3>
      </div>

      <div className="p-10 text-black bg-white grid gird-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-[702px] rounded-2xl">
        <div className="flex flex-col">
          <label htmlFor="distance" className="pb-3">
            The amount of kilometers I ride
          </label>
          <input
            type="number"
            id="distance"
            placeholder="200"
            className="px-4 py-3 rounded-md bg-[rgba(0,0,0,0.08)]"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="pb-3">
            The price of the bike
          </label>
          <input
            type="number"
            id="price"
            placeholder="200"
            className="px-4 py-3 rounded-md bg-[rgba(0,0,0,0.08)]"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="wage" className="pb-3">
            Your net wage
          </label>
          <input
            type="number"
            id="wage"
            placeholder="200"
            className="px-4 py-3 rounded-md bg-[rgba(0,0,0,0.08)]"
            value={wage}
            onChange={(e) => setWage(e.target.value)}
          />
        </div>

        <div className="text-right place-self-end">
          <p className="text-[#4F4F4F] text-xl pb-1">
            You&apos;ll save each month
          </p>
          <p className="text-5xl font-bold">{70} euros</p>
        </div>
      </div>

      <Link
        href="#"
        className="px-6 py-3 mb-20 uppercase transition bg-black rounded-full hover:bg-white hover:text-black"
      >
        Okay, grab my money
      </Link>
    </section>
  );
};

export default Calculator;
