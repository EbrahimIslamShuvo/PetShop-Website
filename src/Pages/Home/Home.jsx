import React from 'react';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Advertise from './Components/Advertise/Advertise';
import TopSelling from './Components/Top Selling/TopSelling';
import Dog from './Components/Dog/Dog';
import Offer from './Components/Offer/Offer';
import Kitty from './Components/Kitty/Kitty';
import Download from './Components/Download/Download';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Advertise></Advertise>
            <TopSelling></TopSelling>
            <Dog></Dog>
            <Offer></Offer>
            <Kitty></Kitty>
            <Download></Download>
        </div>
    );
};

export default Home;