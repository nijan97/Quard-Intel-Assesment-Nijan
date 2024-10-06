"use client";
import React, { useState } from 'react';

const ChooseSize = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="mt-7">
      <h2 className="text-primary-900 text-lg font-medium mb-5">Choose size</h2>
      <div className="flex flex-wrap gap-4">
        {sizes.map((size, index) => (
          <label key={index} className="cursor-pointer">
            <input
              type="radio"
              name="size"
              value={size}
              className="hidden"
              onChange={() => setSelectedSize(size)}
            />
            <div
              className={`px-4 py-1 border rounded-lg text-base ${
                selectedSize === size
                  ? 'border-primary-600 bg-primary-100 text-primary-700'
                  : 'border-text-200 text-400'
              }`}
            >
              {size}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChooseSize;
