"use client";
import React, { useState } from 'react';

const ProductDetailsDropdown = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Split the description by line breaks to create bullet points
  const descriptionArray = description.split('\n').slice(1); // Skip the first line

  return (
    <div className="mt-6">
      {/* Title and Toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-700 text-lg font-medium">{title}</h3>
        <span className="text-text-700 text-lg">
          {isOpen ? (
            <img src="/assets/minus-icon.svg" alt="Minus Icon" />
          ) : (
            <img src="/assets/plus-icon.svg" alt="Plus Icon" />
          )}
        </span>
      </div>

      {/* Divider */}
      <hr className="border-t border-text-200 my-4" />

      {/* Description */}
      {isOpen && (
        <div className="text-400 text-base leading-relaxed">
          {/* First line without bullet points */}
          <p>{description.split('\n')[0]}</p>

          {/* Bullet point section */}
          <ul className="list-disc ml-5 mt-2">
            {descriptionArray.map((line, index) => (
              <li key={index} className="mb-2">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsDropdown;
