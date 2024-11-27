
import React from 'react';
import img1 from '../assets/img/animation/img1.png';
import img2 from '../assets/img/animation/img2.png';
import img3 from '../assets/img/animation/img3.png';
import img4 from '../assets/img/animation/img4.png';
import img5 from '../assets/img/animation/img5.png';
import bgiamges from '../assets/img/review/bgimage.png'

const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
];

const Ani = () => {
    return (
        <div className='h-[150px] my-[100px] bg-[#FCEADE] relative'>
            <div className="container h-full mx-auto">
                <nav className="h-full">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full">
                            <marquee behavior="smooth" direction="left" className="font-sans text-xl">
                                {images.map(item => (
                                    <img
                                        src={item.src}
                                        key={item.id}
                                        className=' h-[100px]  inline-block mx-[100px]'
                                        alt={item.id}
                                    />
                                ))}
                            </marquee>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="absolute top-0 md:top-[-50px] w-40 h-32  md:w-96 md:h-96 z-[-1]">
                <img src={bgiamges} alt="" className='w-full h-full' />
            </div>              
        </div>
    );
};

export default Ani;
