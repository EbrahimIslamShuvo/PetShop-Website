import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoIosCart } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Card = ({ product }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        
        return (
            <div className="flex">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className="text-[#FF782C]">★</span>
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-200">★</span>
                ))}
            </div>
        );
    };

    return (
        <div className='group'>
            <div className="w-62 group flex flex-col justify-center items-center border border-dashed border-gray-400 group-hover:border-[#FF782C] rounded-t-xl">
                <div className="w-62 overflow-hidden rounded-t-xl relative h-[271px]">
                    <img 
                        className='w-full h-full object-cover transform duration-700 group-hover:scale-110' 
                        src={product.image} 
                        alt={product.name} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-0 overflow-hidden group-hover:h-14 text-white transition-all duration-500 ease-in-out">
                        <div className="bg-[#6839CC] flex items-center gap-2 px-5 py-1 hover:bg-[#FF782C] rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <IoIosCart />
                            <span>Add To Cart</span>
                        </div>
                    </div>
                    <div className="absolute top-7 right-3 flex items-center justify-center h-0 overflow-hidden group-hover:h-14 text-white transition-all duration-500 ease-in-out">
                        <div className="bg-[#6839CC] flex items-center gap-2 px-3 py-3 hover:bg-[#FF782C] rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="absolute top-20 right-3 flex items-center justify-center h-0 overflow-hidden group-hover:h-14 text-white transition-all duration-500 ease-in-out">
                        <div className="bg-[#6839CC] flex items-center gap-2 px-3 py-3 hover:bg-[#FF782C] rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <MdOutlineZoomOutMap/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start w-full h-34 mx-auto p-5">
                    <div className="">
                        {product.discount_price > 0 ? (
                            <div className='flex items-center'>
                                <span className="text-[#FF782C] mr-1 font-extrabold text-lg">${product.discount_price}</span>
                                <span className="line-through text-gray-400">${product.price}</span>
                            </div>
                        ) : (
                            <span className='text-[#6839CC] font-extrabold text-lg'>${product.price}</span>
                        )}
                    </div>
                    <NavLink to={`/product/${product.product_id}`}><h1 className='font-semibold'>{product.name}</h1></NavLink>
                    <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <p className='text-sm text-gray-400'>{product.rating} rating ({product.rating_count} Reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;