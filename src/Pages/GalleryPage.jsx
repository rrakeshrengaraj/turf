import React, { useState, useEffect, useRef } from "react";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7];


export default function GalleryPage() {
  const slides = [images[images.length - 1], ...images, images[0]];
  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setWithTransition(false);
      setIndex(1);
      setTimeout(() => setWithTransition(true), 50);
    } else if (index === 0) {
      setWithTransition(false);
      setIndex(slides.length - 2);
      setTimeout(() => setWithTransition(true), 50);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      next();
    } else if (diff < -swipeThreshold) {
      prev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="gallery"
      className=" py-15 bg-[#222831] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Gallery</h1>
          <p className="italic text-[#14FFEC] text-lg">
            Where Every Play Becomes a Memory
          </p>
        </div>

        {/* Slider Container with Buttons */}
        <div className="flex items-center justify-center w-full max-w-xl mx-auto md:max-w-4xl">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="flex items-center cursor-pointer justify-center text-[#14FFEC] hover:scale-110 transition-transform h-16 w-10 z-20"
            aria-label="Previous"
          >
            <span className="text-3xl md:text-4xl">&#10094;</span>
          </button>

          {/* Image Slider */}
          <div className="relative w-full h-[45vh] max-h-[500px] sm:h-[60vh] sm:max-h-[500px] flex items-center mx-4">

            {/* Glow Background */}
            <div className="absolute -z-10 w-full h-full bg-[#14FFEC33] blur-3xl rounded-lg opacity-15" />
            <div
              className="overflow-hidden rounded-xl shadow-xl border border-gray-700 h-full w-full"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`flex h-full ${
                  withTransition
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                }`}
                style={{ transform: `translateX(-${index * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((src, i) => (
                  <div key={i} className="min-w-full h-full">
                    <img
                      src={src}
                      alt={`Garuda Turf ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="flex items-center cursor-pointer justify-center text-[#14FFEC] hover:scale-110 transition-transform h-16 w-10 z-20"
            aria-label="Next"
          >
            <span className="text-3xl md:text-4xl">&#10095;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
