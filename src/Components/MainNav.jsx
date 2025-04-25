import React from 'react';
import { FaArrowRight, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoCart, IoSearchSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const NavItem = ({ to, label }) => {
    return (
        <li className='group'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    ` group-hover:bg-transparent w-full transition-all duration-300 border-b border-gray-200 hover:border-[#FF791F] rounded-none flex justify-between items-center text-gray-900 hover:text-[#FF791F] ${isActive ? 'text-[#FF791F]' : ''}`
                }
            >
                <h4>{label}</h4>
                <FaArrowRight />
            </NavLink>
        </li>
    );
};


const MainNav = () => {
    return (
        <div className="border-b border-dotted border-gray-300">
            {/* 🟠 Start Drawer */}
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

                {/* Drawer Content */}
                <div className="drawer-content flex items-center justify-between w-11/12 lg:w-9/12 mx-auto py-4">
                    {/* Search (Desktop) */}
                    <div className="hidden lg:block">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search Product..."
                                className="rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF791F] bg-base-200 text-[#FF791F] w-80"
                            />
                            <button className="-ml-10 rounded-full p-2 bg-[#6839CC] hover:bg-[#FF791F] transition-colors">
                                <IoSearchSharp className="text-white text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Drawer Toggle for Mobile */}
                    <div className="lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                    </div>

                    {/* Logo */}
                    <NavLink to={"/"}>
                        <div>
                            <img
                                src="/src/assets/Image/logo.svg"
                                alt="Petshop Ziggy Logo"
                                className="w-28 lg:w-36"
                            />
                        </div>
                    </NavLink>

                    {/* User Icons */}
                    <div className="flex items-center gap-4 lg:gap-5">
                        <NavLink to={"/user"}>
                            <FaRegUser className="text-xl hover:text-[#FF791F] transition-colors" />
                        </NavLink>
                        <NavLink to={"/favourite"}>
                            <div className="indicator">
                                <span className="indicator-item bg-[#FF791F] text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                                    12
                                </span>
                                <FaRegHeart className="text-xl hover:text-[#FF791F] transition-colors" />
                            </div>
                        </NavLink>
                        <NavLink to={"/cart"}>
                            <div className="flex items-center gap-1 group">
                                <div className="indicator">
                                    <span className="indicator-item bg-[#FF791F] text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                                        12
                                    </span>
                                    <IoCart className="text-2xl group-hover:text-[#FF791F] transition-colors" />
                                </div>
                                <h4 className="group-hover:text-[#FF791F] font-semibold transition-colors">$ 0.00</h4>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Drawer Side (Mobile Nav) */}
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-base-200 flex flex-col">
                        {/* Header Section */}
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-[#FF791F]">Main Menu</h2>
                        </div>

                        {/* Navigation Menu */}
                        <ul className="flex flex-col w-full">
                            <NavItem to="/" label="Home" />
                            <NavItem to="/shop/0" label="Shop" />
                            <NavItem to="/blog" label="Blog" />
                            <NavItem to="/contact" label="Contact Us" />
                            <NavItem to="/about" label="About Us" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;
