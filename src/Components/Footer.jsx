import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-base-200 mt-10'>
            <footer className="footer sm:footer-horizontal text-base-content p-10 w-9/12 mx-auto">
                <aside>
                    <Link to={"/"}>
                        <img src="/src/assets/Image/logo.svg" alt="" />
                    </Link>
                    <p>
                        PetShop Ziggy.
                        <br />
                        First Pet Shop in Bangladesh
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <NavLink className="hover:text-orange-500" to={"/shop/1"}>Pet</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/shop/2"}>Pet Food</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/shop/3"}>Kitty Food</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/shop/4"}>Pet Toy</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <NavLink className="hover:text-orange-500" to={"/shop/all"}>Shop</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/blog"}>Blog</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/contact"}>Contact Us</NavLink>
                    <NavLink className="hover:text-orange-500" to={"/about"}>About Us</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://www.facebook.com/ebrahim.islam.2003/">MD.Ebrahim Islam Shuvo</a></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;