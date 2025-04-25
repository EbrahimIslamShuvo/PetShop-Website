import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const UpNav = () => {
    return (
        <div>
            <div className="bg-[#6839CC]">
                <div className="w-9/12 mx-auto">
                    <div className="flex lg:justify-between justify-center py-2 text-white font-semibold">
                        <div className=" lg:block hidden">
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-1 hover:text-[#FF791F]">
                                    <IoLocationOutline />
                                    <h4>Find a Store</h4>
                                </div>
                                <div className="flex items-center gap-2 hover:text-[#FF791F]">
                                    <FaCarSide />
                                    <h4>Order Tracking</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center md:gap-8 gap-4 text-sm md:text-base">
                            <h4 className='bg-[#FF791F] md:px-4 px-2 rounded-full'>15% OFF</h4>
                            <h4>$50+ when you buy online & pick up in-store</h4>
                        </div>
                        <div className="lg:block hidden">
                            <div className="flex items-center gap-8">
                                <h4 className=' hover:text-[#FF791F]'>USD</h4>
                                <h4 className=' hover:text-[#FF791F]'>English</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;