import AllProducts from "../../components/Products/AllProducts";

const HomePage: React.FC = () => {
    return (
        <div>
        <h2 className="font-sans md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px]">Products</h2>
        <AllProducts />
        </div>
    );
}

export default HomePage;