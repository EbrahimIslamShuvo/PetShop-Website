import React from 'react';
import Header from '../../Components/Shared/Header';
import { NavLink, useParams } from 'react-router-dom';
import categoryData from '../../Data/categoryData';
import productData from '../../Data/productData';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Card from '../../Components/Shared/Card';

// Constants
const CONTAINER_WIDTH = 'w-9/12';
const CATEGORY_ITEM_WIDTH = 'w-72';

const allCategory = {
  name: "All",
  id: 0
};

const Shop = () => {
  const { id: categoryIdParam } = useParams();
  const categoryId = Number(categoryIdParam);
  
  const { products } = productData();
  const { categories } = categoryData();

  // Get current category
  const getCurrentCategory = () => {
    if (categoryId === 0) return allCategory;
    const foundCategory = categories.find(category => category.id === categoryId);
    return foundCategory || allCategory; // Fallback to all if not found
  };

  const currentCategory = getCurrentCategory();

  // Filter products based on category
  const getFilteredProducts = () => {
    return currentCategory.id === 0 
      ? products 
      : products.filter(product => product.category === currentCategory.name);
  };

  const filteredProducts = getFilteredProducts();

  // Category link component
  const CategoryLink = ({ category }) => {
    const isActive = category.id === categoryId;
    const activeClasses = 'text-orange-500 border-orange-500';
    const inactiveClasses = 'border-gray-300 hover:text-orange-500 hover:border-orange-500';
    
    return (
      <div className="group">
        <NavLink to={`/shop/${category.id}`}>
          <div className={`flex justify-between items-center text-2xl font-semibold ${CATEGORY_ITEM_WIDTH} border-b py-3 ${isActive ? activeClasses : inactiveClasses}`}>
            <p>{category.name}</p>
            <MdOutlineKeyboardArrowRight />
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <div>
      <div className="">
        <div className={`mx-auto ${CONTAINER_WIDTH}`}>
          <div className="">
            <Header name="All Product" />
          </div>
          <div className="flex justify-between items-start gap-10">
            {/* Categories sidebar */}
            <div className="border border-gray-200 w-fit rounded-lg p-5">
              <CategoryLink category={allCategory} />
              {categories.map(category => (
                <CategoryLink key={category.id} category={category} />
              ))}
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-3 w-full gap-8">
              {filteredProducts.map(product => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;