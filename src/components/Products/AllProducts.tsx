import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import ProductItem from './ProductItem';
import { useStoreContext } from '../../contexts/StoreContext';

const AllProducts = () => {
  const { currentProducts } = useStoreContext();
  const {  loading, error } = useProducts();


  // TODO: make loading and error states more user-friendly (show a spinner on screen, and show a proper error message?)

  // if (loading) return <div className=''>Loading...</div>;
  if (error) return <div>{error}</div>;
  // both of these could be in the return below


 

  //TODO: add a loading spinner
  // because right now when i show the spinner, elements move around.. none of current solutions are user friendly 
  return (
    <section className="mt-2">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map(product => (
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