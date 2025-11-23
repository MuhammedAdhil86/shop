"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import img1 from "../img/oppo.png.jpg";
import img2 from "../img/vivo1.jpg.jpg";
import img3 from "../img/vivo2.png.jpg";

const images = [img1, img2, img3];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* SLIDER IMAGES */}
      {images.map((img, i) => (
        <div
          key={i}
          className={
            "absolute inset-0 transition-opacity duration-[1500ms] " +
            (index === i ? "opacity-100" : "opacity-0")
          }
        >
          <Image src={img} alt="Slider Image" fill className="object-cover" />
        </div>
      ))}

      {/* OVERLAY TEXT */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">

        {/* Pacifico font heading */}
        <h1 className="text-5xl mb-4 drop-shadow-lg pacifico-regular">
          Welcome to Our Shop
        </h1>

        {/* BUTTON (Hydration-safe className) */}
        <Link
          href="/Dashboard"
          className="px-8 py-3 rounded-lg text-lg font-semibold bg-black text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 border border-transparent hover:border-black"
        >
          Get Start
        </Link>

      </div>
    </div>
  );
}
