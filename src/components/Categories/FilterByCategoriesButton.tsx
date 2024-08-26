import { useState } from 'react';
import { ICategory } from '../../interfaces/ICategory';

interface FilterByCategoriesButtonProps {
  categories: ICategory[];
  onClick: (category: ICategory) => void;
}

const FilterByCategoriesButton: React.FC<FilterByCategoriesButtonProps> = ({ categories, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={
            
            () => setIsOpen(!isOpen)
        }
        className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Filter
        {/* include svg icon from assets folder */}
        <img
          className={`-mr-1 ml-2 h-5 w-3 rotate-90`}
          src="./src/assets/filterIcon.svg"
          alt="chevron-down"/>
        
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onClick(category);
                  //TODO: add the selected category to the state, show selected category component next to filter and filter products
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterByCategoriesButton;
