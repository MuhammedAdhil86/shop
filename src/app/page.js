"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* DESKTOP IMAGES */
import img1 from "../img/oppo.png.jpg";
import img2 from "../img/vivo1.jpg.jpg";
import img3 from "../img/vivo2.png.jpg";

/* MOBILE IMAGES */
import m1 from "../img/mobile1.jpg";
import m2 from "../img/mobile2.jpg";
import m3 from "../img/mobile3.png";

const desktopImages = [img1, img2, img3];
const mobileImages = [m1, m2, m3];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width safely AFTER hydration
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // initial check  
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const sliderImages = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* SLIDER IMAGES */}
      {sliderImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="Slider Image" fill className="object-cover" />
        </div>
      ))}

      {/* OVERLAY TEXT */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">

        <h1 className="text-4xl md:text-5xl mb-4 drop-shadow-lg pacifico-regular">
          Welcome to Our Shop
        </h1>

        {/* FIXED: hydration-safe one-line className */}
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
