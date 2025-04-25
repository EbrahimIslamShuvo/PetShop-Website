import React, { useEffect, useState } from 'react';
import Header from '../../Components/Shared/Header';
import { useParams } from 'react-router-dom';
import categoryData from '../../Data/categoryData';
import productData from '../../Data/productData';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Card from '../../Components/Shared/Card';

const Shop = () => {
    //const {id} = useParams()

    //const {categories} = categoryData()

    // const allCategory = {
    //     "name" : "All",
    //     "id" : "all"
    // }
    // console.log(id);


    // let category = id === "all" ? allCategory : categories.find(category => category.id === id)
    const { products } = productData()
    const { categories } = categoryData();
    

    const [filterCategory, setFilterCategory] = useState()

    const handleCategory = (category) =>{
        setFilterCategory(category);
    }

    const filterProducts = filterCategory === "all" ? products : filterCategory ? (products.filter(product => product.category === filterCategory)) : products



    return (
        <div>
            <div className="">
                <div className="w-9/12 mx-auto">
                    <div className="">
                        <Header name={`All Product`}></Header>
                    </div>
                    <div className="flex justify-between items-start gap-10">
                        <div className="border border-gray-200 w-fit rounded-lg p-5">
                            <div className="group">
                                <div onClick={()=>handleCategory("all")} className="group flex justify-between items-center text-2xl font-semibold w-72 border-b border-gray-300 py-3 group-hover:text-orange-500 group-hover:border-orange-500">
                                    <p className="">All</p>
                                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                                </div>
                            </div>
                            {
                                categories.map(category => (
                                    <div className="group">
                                        <div onClick={()=>handleCategory(category.name)} className=" flex justify-between items-center text-2xl font-semibold w-72 border-b border-gray-300 py-3 group-hover:text-orange-500 group-hover:border-orange-500">
                                            <p>{category.name}</p>
                                            <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-3 w-full gap-8">
                            {
                                filterProducts.map(product => <Card product={product}></Card>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;