import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const navLinkClass = ({ isActive }) =>
        `relative px-4 py-2 font-outfit hover:text-[#FF791F] font-bold
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
        after:bg-[#FF791F] after:transition-all after:duration-300 after:ease-in-out
        hover:after:w-full
        ${isActive ? 'text-[#FF791F] after:w-full' : 'text-black after:w-0'}`;

    return (
        <nav className="sticky top-0 z-50 bg-white hidden lg:block">
            <div className="flex justify-center gap-10 py-4">
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/shop/0" className={navLinkClass}>Shop</NavLink>
                <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
                <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            </div>
        </nav>
    );
};

export default Menu;
