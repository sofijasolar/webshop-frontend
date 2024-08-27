import { useEffect, useState } from "react";
import { useStoreContext } from "../../contexts/StoreContext";
import ProductItem from "../Products/ProductItem";

const Cart: React.FC = () => {

    const {productsInCart, setProductsInCart} = useStoreContext();
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const getTotalPrice = () => {
        let total = 0;
        total = productsInCart.reduce ((total, product) => total + product.price, 0);
        setTotalPrice(total);
    }

    const removeProduct = (id: number) => {
        const newProducts = productsInCart.filter((product) => product.id !== id);
        setProductsInCart(newProducts);
    }

    useEffect(() => {
        getTotalPrice();
        }, [productsInCart])

        
    return (
        <div className="">
            <p>Total price: $ {totalPrice.toFixed(2) }</p>
            {productsInCart.map((product) => 
            <div>
                <ProductItem key={product.id} product={product} />
                <button onClick={() => removeProduct(product.id)} className="bg-red-300">Remove</button>
            </div>
            
        )

             }

        </div>
    )
}

export default Cart;