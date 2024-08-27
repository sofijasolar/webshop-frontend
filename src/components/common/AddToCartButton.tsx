import React from 'react';
import { IProduct } from '../../interfaces/IProduct';

interface AddToCartButtonProps {
  addProduct: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ addProduct }) => {
  return (
    <button onClick={addProduct} className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
      Add to cart
    </button>
  );
};

export default AddToCartButton;
