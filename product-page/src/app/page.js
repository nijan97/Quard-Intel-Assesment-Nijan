"use client"; 

import React, { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import ChooseSize from './components/ChooseSize';
import QuantityAndAddToCart from './components/AddToCart';
import ProductDetailsDropdown from './components/ProductDetails';
import productData from './data/productData.json';

const Page = () => {
  const { images, sizes, productDetails, sizeAndFit } = productData;
  
  const [mounted, setMounted] = useState(false);  // New state to check if the component is mounted

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null to prevent rendering on server
  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Images: Full width on mobile, spans 6 columns (1 to 6) on larger screens */}
        <div className="col-span-1 md:col-span-6">
          <ImageGrid images={images} />
        </div>

        <div className="hidden md:block md:col-span-1"></div>

        {/* Text Content: Full width on mobile, spans 5 columns (8 to 12) on larger screens */}
        <div className="col-span-1 md:col-span-5">
          {/* Breadcrumb (Hidden on mobile) */}
          <div className="hidden md:flex text-base text-400 font-medium space-x-1 mb-6">
            <span className="hover:text-primary-900 cursor-pointer">Home</span> /
            <span className="hover:text-primary-900 cursor-pointer">Women</span> /
            <span className="text-primary-900">Slimming Nocturnal Leopard 7/8</span>
          </div>

          {/* Title */}
          <h1 className="text-primary-900 text-3xl md:text-4xl font-medium mt-6 mb-6">
            Slimming Nocturnal Leopard 7/8
          </h1>

          {/* Price, Sold, Rating Section */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="line-through text-400 text-lg">$353.00</span>
              <span className="text-primary-700 text-2xl font-semibold">$349.00</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-400 text-base">1834 Sold</span>
              <div className="flex items-center space-x-1">
                {/* Star Icon */}
                <img src="/assets/star-icon.svg" alt="Star Icon" className="w-4 h-4" />
                <span className="text-900 text-base font-semibold">4.8</span>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-text-100 my-6" />

          {/* Description */}
          <p className="text-400 text-base leading-relaxed mb-7">
            Meet our Slimming Nocturnal Leopard 7/8 Leggings, where mystery meets elegance. 
            These leggings feature a captivating blend of deep blue and hints of light blue, 
            enhanced by a sleek black leopard print. Designed for those who thrive after dark. 
            Step into the wild with a touch of sophistication!
          </p>

          {/* Choose Size Section */}
          <ChooseSize sizes={sizes} />

          {/* Quantity and Add to Cart Section */}
          <QuantityAndAddToCart />

          {/* Delivery Info Section */}
          <div className="border border-text-200 rounded-2xl p-6 mt-12 flex items-start space-x-4">
            {/* Delivery Icon */}
            <img src="/assets/delivery-icon.svg" alt="Delivery Truck Icon" className="w-8 h-8 " />
            {/* Delivery Info Text */}
            <div>
              <h3 className="text-lg font-medium text-500">Delivery Info</h3>
              <p className="text-400 text-base mt-2 leading-loose">
                - FREE on orders of $175 or more (Domestic)
                <br />
                - $9.50 flat rate for orders under $175 (Domestic)
              </p>
            </div>
          </div>

          {/* Product Details Section */}
          <ProductDetailsDropdown
            title="Product Details"
            description={productDetails}
          />

          {/* Size & Fit Section */}
          <ProductDetailsDropdown
            title="Size & Fit"
            description={sizeAndFit}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
