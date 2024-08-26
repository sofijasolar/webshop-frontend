import { useProducts } from '../../hooks/useProducts';
import ProductItem from './ProductItem';

const AllProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="mx-4 lg:mx-20">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
        </section>
      
    </section>
  );
};


export default AllProducts;