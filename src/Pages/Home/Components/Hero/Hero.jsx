import React from 'react';
import Hero1 from './Hero1';
import Hero2 from './Hero2';

const Hero = () => {
    return (
        <div>
            <div className="">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="w-full">
                            <Hero1></Hero1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
                            <a href="#slide2" className="btn btn-circle relative z-50">❮</a>
                            <a href="#slide2" className="btn btn-circle relative z-50">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="w-full">
                            <Hero2></Hero2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
                            <a href="#slide1" className="btn btn-circle relative z-50">❮</a>
                            <a href="#slide1" className="btn btn-circle relative z-50">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;