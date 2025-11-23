"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";

/* DESKTOP SLIDER IMAGES */
import slider1 from "../../img/oppo.png.jpg";
import slider2 from "../../img/vivo1.jpg.jpg";
import slider3 from "../../img/vivo2.png.jpg";

/* MOBILE SLIDER IMAGES */
import mobile1 from "../../img/mobile1.jpg";
import mobile2 from "../../img/mobile2.jpg";
import mobile3 from "../../img/mobile3.png";

const desktopImages = [slider1, slider2, slider3];
const mobileImages = [mobile1, mobile2, mobile3];

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto slider
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const sliderImages = isMobile ? mobileImages : desktopImages;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION (fixed 100vh) */}
      <section className="relative w-full h-screen overflow-hidden">

        {sliderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={img} alt="Hero Image" fill className="object-cover" />
          </div>
        ))}


      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 bg-white px-6" id="overview">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Overview – About Our Shop
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* ABOUT */}
            <div className="p-8 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Salala Mobiles provides latest smartphones, accessories and expert
                mobile servicing for all brands. Trusted by customers for quality.
              </p>
            </div>

            {/* SERVICE */}
            <div className="p-8 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We sell branded mobiles, original accessories and provide complete
                repair solutions including screens, battery, software & more.
              </p>
            </div>

            {/* AIM */}
            <div className="p-8 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">Our Aim</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver trusted service, best pricing and fast customer support —
                becoming the most reliable mobile shop in the region.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE SALES */}
      <section className="py-16 bg-white px-6" id="sales">
        <h2 className="text-3xl font-bold text-center mb-10">Mobile Sales</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <Image src={slider1} alt="Oppo" className="rounded" />
            <h3 className="text-xl font-semibold mt-4">OPPO F21 Pro</h3>
            <p className="text-gray-600">₹25,999</p>
          </div>

          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <Image src={slider2} alt="Vivo" className="rounded" />
            <h3 className="text-xl font-semibold mt-4">Vivo Y21</h3>
            <p className="text-gray-600">₹14,499</p>
          </div>

          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <Image src={slider3} alt="Vivo 29" className="rounded" />
            <h3 className="text-xl font-semibold mt-4">Vivo V29</h3>
            <p className="text-gray-600">₹28,999</p>
          </div>

        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="py-16 bg-gray-100 px-6" id="service">
        <h2 className="text-3xl font-bold text-center mb-10">
          Mobile Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Screen Replacement</h3>
            <p>High-quality screens for all models.</p>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Battery Change</h3>
            <p>Original and long-lasting batteries.</p>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Software Fix</h3>
            <p>Boot issues, hanging, update errors solved.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
