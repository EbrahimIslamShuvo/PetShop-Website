import React from 'react';
import foot from "../../assets/Image/footprints.png"

const Header = ({name}) => {
    return (
        <div>
            <div className="relative flex items-start justify-self-start mt-10">
                <h1 className='lg:text-5xl text-4xl font-extrabold'>{name}</h1>
                <img className='w-13 absolute -top-7 -right-7' src={foot} alt="" />
            </div>
        </div>
    );
};

export default Header;