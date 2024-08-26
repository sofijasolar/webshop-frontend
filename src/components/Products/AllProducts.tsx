import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import ProductItem from './ProductItem';

const AllProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="mt-2">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
            // <ProductItem key={product.id} product={product} />
            <Link key={product.id} to={`/product/${product.id}`} className="w-full flex">
              <ProductItem product={product} />
            </Link>
        ))}
        </section>
      
    </section>
  );
};


export default AllProducts;