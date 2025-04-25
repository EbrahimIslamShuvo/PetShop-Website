import React from 'react';
import Header from '../../../../Components/Shared/Header';
import Card from '../../../../Components/Shared/Card';
import productData from '../../../../Data/productData';

const TopSelling = () => {

    const { products } = productData();

    const topSellingProducts = [...products].sort(
        (a, b) => b.selling_count - a.selling_count
      );

    return (
        <div>
            <div className="">
                <div className=" w-9/12 mx-auto">
                    <div className="">
                        <Header name={"Trending This Week"}></Header>
                    </div>
                    <div className="carousel rounded-box w-full mt-10">
                        <div className="carousel-item flex gap-10">
                            {
                                topSellingProducts.map(product => (
                                    <Card product={product}></Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSelling;