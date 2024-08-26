import ProductDetail from "../../components/Products/ProductDetail";
import BackButton from "../../components/reusables/BackButton";


const ProductDetailPage = () => {
    return (
        <div className="">
            {/* back button */}
            <div className="p-3">
                <BackButton />
            </div>
            <ProductDetail />
        </div>
    );
}

export default ProductDetailPage;