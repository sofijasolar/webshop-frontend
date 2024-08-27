import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useProduct } from '../../hooks/useProduct'; 
import AddToCartButton from '../common/AddToCartButton';
import { useStoreContext } from '../../contexts/StoreContext';
import { IProduct } from '../../interfaces/IProduct';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // TODO: maybe change this a bit
  const { product, loading, error } = useProduct(Number(id)); 
  const {productsInCart, setProductsInCart} = useStoreContext();

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 
  if (!product) return <div>No product found.</div>;


  const addProduct = () =>{
    setProductsInCart([...productsInCart, product]);
  };
  

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
  
      {/* Details Section */}
      <div className="md:w-1/2 p-4 flex flex-col justify-start">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>

        <AddToCartButton addProduct={ addProduct }/>
      </div>
    </div>
  );
  
};

export default ProductDetail;
