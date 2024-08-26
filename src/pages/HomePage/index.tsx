import CategoriesFilter from "../../components/Categories/CategoriesFilter";
// import FilterByCategoriesButton from "../../components/Categories/FilterByCategoriesButton";
import AllProducts from "../../components/Products/AllProducts";

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
            <header className="flex justify-between align-items-center">
                <h2 className="font-sans md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px]">Products</h2>
                <CategoriesFilter />
            </header>
            <AllProducts />
        </div>
    );
}

export default HomePage;