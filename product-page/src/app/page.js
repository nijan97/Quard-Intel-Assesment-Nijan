import React from 'react';
import ImageGrid from './components/ImageGrid';
import productData from './data/productData.json';  // Import the JSON data

const Page = () => {
  const { images, details, sizes } = productData;

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Images: Full width on mobile, spans 6 columns (1 to 6) on larger screens */}
        <div className="col-span-1 md:col-span-6">
          {/* ImageGrid is now using dynamic Swiper.js */}
          <ImageGrid images={images} />
        </div>

        {/* Empty: Spans 1 column (7th column) on larger screens */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Text Content: Full width on mobile, spans 5 columns (8 to 12) on larger screens */}
        <div className="col-span-1 md:col-span-5">
          {/* Breadcrumb */}
          <div className="text-base text-400 font-medium space-x-1">
            <span className="hover:text-primary-900 cursor-pointer">Home</span> /
            <span className="hover:text-primary-900 cursor-pointer">Women</span> /
            <span className="text-primary-900">Slimming Nocturnal Leopard 7/8</span>
          </div>

          {/* Title */}
          <h1 className="text-primary-900 text-4xl font-medium mt-4">
            Slimming Nocturnal Leopard 7/8
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
