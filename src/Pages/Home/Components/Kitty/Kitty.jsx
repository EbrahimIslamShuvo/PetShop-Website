import React from 'react';
import Header from '../../../../Components/Shared/Header';
import productData from '../../../../Data/productData';
import Card from '../../../../Components/Shared/Card';
import Button from '../../../../Components/Shared/Button';
import cat from '../Kitty/Image/cat.png';
import catt from '../Kitty/Image/catt.png'
import { NavLink } from 'react-router-dom';

const Kitty = () => {

    const { products } = productData();

    const foods = products.filter(product => product.category == "Kitty Food")

    return (
        <div>
            <div className="w-9/12 mx-auto">
                <div className="mt-15 mb-10">
                    <Header name={"Best Selling Food for Kitten"}></Header>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-10">

                    <div className="grid lg:grid-cols-3 grid-cols-2  gap-10">
                        {
                            foods.map(product => <Card product={product}></Card>)
                        }
                    </div>
                    <div className="">
                        <div className="relative bg-[#FB72B2] rounded-xl overflow-hidden group flex-1 h-full z-2">
                            <img
                                className="absolute inset-0 w-full h-full object-cover -z-10 rounded-xl"
                                src={catt}
                                alt=""
                            />
                            <div className="flex justify-end items-end-safe h-11/12 w-11/12 mx-auto">
                                <img
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full object-fit rounded-xl"
                                    src={catt}
                                    alt=""
                                />
                            </div>
                            <div className="absolute top-30 left-15 text-white font-semibold z-10 h-8/12 flex flex-col">
                                <h1 className="text-6xl font-bold leading-tight">Kitten Food <br />Collection</h1>
                                <p className='-mt-2 mb-4'>All you need for tails to wag</p>
                                <NavLink to={"/shop/2"}><Button></Button></NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitty;