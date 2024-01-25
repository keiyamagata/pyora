"use client";

import Image from "next/image";
import Headline from "./Headline";
import RadialGradient from "./RadialGradient";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
  const imageRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8 },
        { scale: 1, ease: "circ.out", duration: 0.85, delay: 1.2 }
      );
    },
    { scope: imageRef }
  );

  return (
    <section className="relative h-[100dvh] overflow-hidden flex justify-center">
      <div className="z-30 mt-32">
        <Headline />
      </div>
      <div
        ref={imageRef}
        className="
      z-20 absolute -bottom-[5rem] left-[50%] -translate-x-1/2 w-[550px] aspect-[1640/908]
      sm:-bottom-[7.5rem] sm:w-[750px]
      md:-bottom-[10rem] md:w-[900px]
      lg:-bottom-[15rem] lg:w-[936px]
      "
      >
        <Image
          src="/images/bike.png"
          alt="pyora bike"
          priority
          fill
          sizes="(max-width: 768px) 100vw, 936px"
          className="object-contain w-full"
        />
      </div>
      <div className="absolute z-10 ">
        <RadialGradient />
      </div>
    </section>
  );
};

export default Hero;
