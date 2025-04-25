import React, { useEffect, useState } from 'react';
import Header from '../../Components/Shared/Header';
import { NavLink, useParams } from 'react-router-dom';
import categoryData from '../../Data/categoryData';
import productData from '../../Data/productData';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Card from '../../Components/Shared/Card';

const Shop = () => {

    const allCategory = {
        "name": "All",
        "id": 0
    }
    const { id } = useParams()

    const { products } = productData()
    const { categories } = categoryData();

    const recieveCategory = id == 0 ? allCategory : categories.find(category => category.id == id)

    console.log(recieveCategory);

    const filterProducts = recieveCategory.id === 0 ? products : recieveCategory ? (products.filter(product => product.category === recieveCategory.name)) : products



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
                                <NavLink to={"/shop/0"}>
                                    <div className={id == 0 ? `group flex justify-between items-center text-2xl font-semibold w-72 border-b  py-3 text-orange-500 border-orange-500` : `group flex justify-between items-center text-2xl font-semibold w-72 border-b border-gray-300 py-3 group-hover:text-orange-500 group-hover:border-orange-500`}>
                                        <p className="">All</p>
                                        <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                                    </div>
                                </NavLink>
                            </div>
                            {
                                categories.map(category => (
                                    <div className="group">
                                        <NavLink to={`/shop/${category.id}`}>
                                            <div className={id == `${category.id}` ? `group flex justify-between items-center text-2xl font-semibold w-72 border-b  py-3 text-orange-500 border-orange-500` : `group flex justify-between items-center text-2xl font-semibold w-72 border-b border-gray-300 py-3 group-hover:text-orange-500 group-hover:border-orange-500`}>
                                                <p>{category.name}</p>
                                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                                            </div>
                                        </NavLink>
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