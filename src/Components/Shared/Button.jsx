import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

const Button = () => {
    return (
        <div>
            <button className='group flex items-center gap-2 bg-[#6839CC] text-white pl-8 pr-4 py-3 rounded-full font-semibold'>
                <p>Shop Now</p>
                <FaChevronCircleRight className='text-2xl group-hover:text-[#FC8C47]'></FaChevronCircleRight>
            </button>
        </div>
    );
};

export default Button;