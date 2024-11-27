
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import img1 from '../assets/img/best_collection/best_collection/main/1.png';


const BestCollection = () => {
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const renderStar = (rating) => {
        const fullstars = Math.floor(rating);
        const halfstar = rating % 1 !== 0;
        const emptystar = 5 - fullstars - (halfstar ? 1 : 0);
        return (
            <>
                {[...Array(fullstars)].map((_, index) => (
                    <i key={`full-${index}`} className="bi bi-star-fill"></i>
                ))}
                {halfstar && <i className="bi bi-star-half"></i>}
                {[...Array(emptystar)].map((_, index) => (
                    <i key={`empty-${index}`} className="bi bi-star"></i>
                ))}
            </>
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // setLoading(true);
                const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
                if (!res.ok) throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);

                const data = await res.json();
                const validProducts = data.filter((prod) => prod && prod.id).slice(0, 6);
                setProducts(validProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                // setLoading(false);
            }
        };
        fetchData();
    }, []);

    // if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="relative py-10 overflow-x-hidden all_product">
            <div className="container mx-auto">
                <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head">
                    <span className="text-xl font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                        Clinically Proven!
                    </span>
                    <div className="main_head">
                        <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[60px]">
                            Best Collections
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap w-full py-10">
                    {products.map((item, index) => (
                        <Link to={`/shop/${item.id}`} className="w-full h-auto md:w-4/12 card" key={item.id}>
                            <div className=" w-full md:w-[250px] lg:w-[325px] xl:w-[400px] 2xl:w-[500px] boxs flex justify-center bg-[#FCEADE] relative">
                                <img src={item.api_featured_image || img1} alt={item.name} className="transition-opacity duration-300 opacity-100 aspect-square aspect-h-9 group-hover:opacity-0" />
                               
                            </div>
                            <div className="flex flex-col p-6 space-y-4 text-center main_dis">
                                <span className="text-[30px] prociono-regular text-[#4f282b] capitalize">{item.name}</span>
                                <span className="text-[#FFD700] text-[40px]">
                                    {renderStar(Number(item.rating) || 4)}
                                    <span className="text-[#4f282b] text-[40px]">({item.rating || 4})</span>
                                </span>
                                <span className="text-[20px] text-[#4f282b]">${item.price || "$40 - 70"}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestCollection;

