import { IProduct } from "../../interfaces/IProduct";
import AddToCartButton from "../common/AddToCartButton";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {

    return (
        <article className="p-2 h-full bg-white rounded shadow hover:shadow-lg transition-shado flex flex-col flex-grow">
            <img src={product.image} alt={product.title} 
                className="w-full h-48 object-contain mb-4 rounded" 
            />
            <div className="product-info flex flex-col flex-grow p-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.title}</h3>
                {/* <p className="text-gray-700 text-sm mb-2">{product.description}</p> */}
                <div className="mt-auto">
                    <p className="text-blue-600 font-bold">${product.price}</p>
                </div>
            </div>
        </article>
    )
}

export default ProductItem;