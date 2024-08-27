import React from 'react';
import FilterByCategoriesButton from './FilterByCategoriesButton';
import { useStoreContext } from '../../contexts/StoreContext';
import { useCategories } from '../../hooks/useCategories';

const CategoriesFilter: React.FC = () => {
  const { categories, loading, error } = useCategories();
  const { setSelectedCategory } = useStoreContext();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 w-full md:w-auto flex justify-end min-w-[200px]">
      <FilterByCategoriesButton categories={categories} onClick={handleCategorySelect} />
    </div>
  );
};

export default CategoriesFilter;
