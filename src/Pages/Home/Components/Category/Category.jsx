import React from 'react';
import { PiDogFill } from "react-icons/pi";
import { TbDogBowl } from "react-icons/tb";
import { BiSolidDog } from "react-icons/bi";
import { GiJumpingDog, GiMedicines, GiDogHouse, GiBelt } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className="p-4 lg:w-9/12 w-11/12 mx-auto mt-10 group">
                <div className="relative border-2 border-dashed border-gray-400 group-hover:border-gray-200 rounded-lg p-6 pt-10">
                    <label className="absolute -top-6 left-4 bg-white px-2 text-3xl font-semibold">
                        Category
                    </label>

                    <div className="grid grid-cols-7 md:grid-cols-7 md:gap-6 text-center">
                        <Link to={"/shop/1"}>
                            <div className="group/item">
                                <PiDogFill className="lg:text-7xl md:text-2xl text-lg mx-auto text-blue-500 group-hover:text-gray-300 group-hover/item:text-blue-500" />
                                <h1 className='lg:font-bold lg:text-xl  md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/2"}>
                            <div className="group/item">
                                <TbDogBowl className="lg:text-7xl md:text-2xl mx-auto text-red-500 group-hover:text-gray-300 group-hover/item:text-red-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet Food</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/3"}>
                            <div className="group/item">
                                <BiSolidDog className="lg:text-7xl md:text-2xl mx-auto text-yellow-500 group-hover:text-gray-300 group-hover/item:text-yellow-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Kitty Food</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/4"}>
                            <div className="group/item">
                                <GiJumpingDog className="lg:text-7xl md:text-2xl mx-auto text-green-500 group-hover:text-gray-300 group-hover/item:text-green-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet Toy</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/5"}>
                            <div className="group/item">
                                <GiMedicines className="lg:text-7xl md:text-2xl mx-auto text-purple-500 group-hover:text-gray-300 group-hover/item:text-purple-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet Medicine</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/6"}>
                            <div className="group/item">
                                <GiDogHouse className="lg:text-7xl md:text-2xl mx-auto text-orange-500 group-hover:text-gray-300 group-hover/item:text-orange-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet Adoption</h1>
                            </div>
                        </Link>
                        <Link to={"/shop/7"}>
                            <div className="group/item">
                                <GiBelt className="lg:text-7xl md:text-2xl mx-auto text-pink-500 group-hover:text-gray-300 group-hover/item:text-pink-500" />
                                <h1 className='lg:font-bold lg:text-xl md:font-normal md:text-base group-hover:text-gray-300 group-hover/item:text-black'>Pet Accessories</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
