import { IProduct } from "../../interfaces/IProduct";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {

    return (
        <article className="w-full ">
            <div className="p-2 bg-white rounded shadow hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-4 rounded" />
                <div className="product-info">
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                    <p className="text-blue-600 font-bold">${product.price}</p>
                </div>
            </div>
        </article> 
    )
}

export default ProductItem;