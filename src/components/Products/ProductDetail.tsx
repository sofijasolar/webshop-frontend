import React from 'react';
import { useParams } from 'react-router-dom'; 
import { useProduct } from '../../hooks/useProduct'; 

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // TODO: maybe change this a bit
  const { product, loading, error } = useProduct(Number(id)); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 
  if (!product) return <div>No product found.</div>;

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 p-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
  
      {/* Details Section */}
      <div className="md:w-1/2 p-4 flex flex-col justify-start">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
          {/* TODO: add icon */}
          Add to Cart
        </button>
      </div>
    </div>
  );
  
};

export default ProductDetail;
