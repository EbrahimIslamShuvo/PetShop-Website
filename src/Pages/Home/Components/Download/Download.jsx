import React from 'react';

const Download = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-between w-8/12 mx-auto">
                    <div className="">
                        <img src="/src/Pages/Home/Components/Download/Image/downloadapp.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-orange-500">DEALS OF THE DAY</h4>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                The Best Food <br />For Your Pet
                            </h1>
                            <p className='mt-10 text-gray-500'>Shopping faster with our app. <br />
                            Available for iOs & Android</p>
                            <img className='w-120' src="/src/Pages/Home/Components/Download/Image/store.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;