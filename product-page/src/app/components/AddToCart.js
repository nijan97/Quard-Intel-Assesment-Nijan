"use client";
import React, { useState } from 'react';

const QuantityAndAddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Handle increasing quantity
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    setAddedToCart(true);

    // After 3 seconds, revert button back to "Add to Cart"
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-12">
      {/* Quantity Section */}
      <div className="flex items-center bg-100 px-4 py-3 rounded-full w-full md:w-auto justify-between">
        {/* Decrease Button */}
        <button
          className="w-8 h-8 flex items-center justify-center bg-white text-text-800 rounded-full"
          onClick={decreaseQuantity}
        >
          <img src="/assets/minus-icon.svg" alt="Minus" />
        </button>

        {/* Quantity Number */}
        <span className="px-6 text-lg font-medium text-text-800">{quantity}</span>

        {/* Increase Button */}
        <button
          className="w-8 h-8 flex items-center justify-center bg-white text-text-800 rounded-full"
          onClick={increaseQuantity}
        >
          <img src="/assets/plus-icon.svg" alt="Plus" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        className={`flex-grow w-full md:w-auto flex items-center justify-center px-8 py-4 rounded-full text-white text-base font-medium ${
          addedToCart ? 'bg-primary-600' : 'bg-primary-500 hover:bg-primary-600'
        } transition-all duration-300`}
        onClick={handleAddToCart}
      >
        {/* Change icon based on addedToCart state */}
        <img
          src={addedToCart ? "/assets/done-icon.svg" : "/assets/cart-icon.svg"}
          alt={addedToCart ? "Done Icon" : "Cart Icon"}
          className="mr-2"
        />
        {addedToCart ? 'Item Added' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default QuantityAndAddToCart;
