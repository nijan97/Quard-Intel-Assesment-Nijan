"use client"; // This component is client-side

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGrid = ({ images }) => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide index

  // Detect if the screen width is below 768px (mobile view)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Slick carousel settings for mobile view
  const settings = {
    infinite: false, // Stop infinite scrolling
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true, // Enables left/right arrows
    afterChange: (current) => setCurrentSlide(current), // Update slide index when slide changes
  };

  return (
    <div className="w-full">
      {isMobile ? (
        <div className="relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative w-full h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </Slider>
          {/* Fixed counter at the top-right corner */}
          <div className="absolute top-[16px] right-[16px] px-3 py-1 rounded-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-base font-medium">
            {currentSlide + 1} of {images.length}
          </div>
        </div>
      ) : (
        // Desktop view: show images in a responsive grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="col-span-1 lg:col-span-3 relative pb-[150%] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 w-full h-full overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
