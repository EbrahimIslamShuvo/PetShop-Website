import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import UpNav from './Components/UpNav';
import MainNav from './Components/MainNav';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

const Root = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <UpNav></UpNav>
            <MainNav></MainNav>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;