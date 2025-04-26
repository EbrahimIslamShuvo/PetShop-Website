import React from 'react';
import Button from '../../../../Components/Shared/Button';
import { Link } from 'react-router-dom';
import ad1 from "../Advertise/Image/ad1.png"
import ad11 from "../Advertise/Image/ad11.png"
import ad2 from "../Advertise/Image/ad2.png"
import ad22 from "../Advertise/Image/ad22.png"

const Advertise = () => {
    return (
        <div className="w-9/12 mx-auto p-4">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="relative bg-[#0e4362f4] rounded-xl overflow-hidden group flex-1 min-h-[300px] z-2">
                    <img
                        className="absolute inset-0 w-full h-full object-cover -z-10 rounded-xl"
                        src={ad1}
                        alt=""
                    />
                    <img
                        className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full h-full object-cover rounded-xl"
                        src={ad11}
                        alt=""
                    />
                    <div className="absolute top-10 left-10 text-white z-10 flex flex-col h-8/12 justify-between">
                        <div className="">
                            <h4 className="text-xl font-medium">Discount</h4>
                            <h1 className="text-7xl font-extrabold">25%</h1>
                            <h2 className="text-2xl font-semibold">Foods They Love</h2>
                        </div>
                        <Link to={"/shop"}>
                            <Button />
                        </Link>
                    </div>
                </div>
                <div className="relative bg-[#FD8D4E] rounded-xl overflow-hidden group flex-1 min-h-[300px] z-2">
                    <img
                        className="absolute inset-0 w-full h-full object-cover -z-10 rounded-xl"
                        src={ad2}
                        alt=""
                    />
                    <img
                        className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full h-full object-cover rounded-xl"
                        src={ad22}
                        alt=""
                    />
                    <div className="absolute top-10 left-10 text-white font-semibold z-10 h-8/12 flex flex-col justify-between">
                        <h1 className="text-6xl font-bold leading-tight">Keep Your <br />Paw Off</h1>
                        <div className="">
                            <p className="text-lg">Use Code: <span className="font-bold">Sale2025</span></p>
                            <p className="text-sm">Only on Monday every week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;
