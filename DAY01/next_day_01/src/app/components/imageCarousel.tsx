"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import airdopesImg from "../../../public/airdopes.png";
import headphonesImg from "../../../public/headphones.png";
import smartWatchImg from "../../../public/smartWatch.webp";
import gamingPadImg from "../../../public/gamingpad.jpg";

const images = [airdopesImg, headphonesImg, smartWatchImg, gamingPadImg];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`
            absolute top-0 left-0 w-full h-full
            transition-opacity duration-3000 ease-in-out
            ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            style={{ objectFit: "contain" }}
            priority={idx === current}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
