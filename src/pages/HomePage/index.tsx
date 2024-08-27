import CategoriesFilter from "../../components/Categories/CategoriesFilter";
import AllProducts from "../../components/Products/AllProducts";
import SearchBar from "../../components/Products/SearchBar";

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
            <header className="flex justify-between align-items-center">
                <h2 className="font-sans md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px]">Products</h2>
                <SearchBar />
            </header>
            <CategoriesFilter />
            <AllProducts />
        </div>
    );
}

export default HomePage;