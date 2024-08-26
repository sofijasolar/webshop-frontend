import AllProducts from "../../components/Products/AllProducts";

const HomePage: React.FC = () => {
    return (
        <div>
        <h2 className="font-serif md:text-[50px] sm:text-[40px] xs:text-[30px] text-[24px]">Products</h2>
        <AllProducts />
        </div>
    );
}

export default HomePage;