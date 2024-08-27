import React from 'react';
import FilterByCategoriesButton from './FilterByCategoriesButton';
import { useStoreContext } from '../../contexts/StoreContext';
import { useCategories } from '../../hooks/useCategories';

const CategoriesFilter: React.FC = () => {
  const { categories, loading, error } = useCategories();
  const { selectedCategory, setSelectedCategory } = useStoreContext();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 w-full md:w-auto flex justify-end min-w-[200px]">
      {selectedCategory !== null && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-sm text-gray-700 font-semibold mr-1 bg-gray-200 rounded-full"> 
              <span className="text-sm text-gray-700 font-semibold mr-1">{selectedCategory}</span>

            X</button>
        )}
      <FilterByCategoriesButton categories={categories} onClick={handleCategorySelect} />
    </div>
  );
};

export default CategoriesFilter;
