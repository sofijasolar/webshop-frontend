import ProductDetail from "../../components/Products/ProductDetail";
import BackButton from "../../components/reusables/BackButton";


const ProductDetailPage = () => {
    return (
        <div className="">
            {/* back button , correct to use header or just use div? */}
            <header className="p-3">
                <BackButton />
            </header>

            <ProductDetail />
        </div>
    );
}

export default ProductDetailPage;