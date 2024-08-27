import { useEffect, useState } from "react";
import { useStoreContext } from "../../contexts/StoreContext";
import ProductItem from "../Products/ProductItem";

const Cart: React.FC = () => {

    const {productsInCart} = useStoreContext();
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const getTotalPrice = () => {
        let total = 0;
        total = productsInCart.reduce ((total, product) => total + product.price, 0);
        setTotalPrice(total);
    }

    useEffect(() => {
        getTotalPrice();
        }, [])

        
    return (
        <div className="">
            <p>Total price: $ {totalPrice.toFixed(2) }</p>
            {productsInCart.map((product) => 
            <ProductItem key={product.id} product={product} />)

             }

        </div>
    )
}

export default Cart;