import React from 'react';
import img1 from '../assets/img/aboutus page/own1.png';
import img2 from '../assets/img/aboutus page/own2.png';
import img3 from '../assets/img/aboutus page/own3.png';
import img4 from '../assets/img/aboutus page/own4.png';

const imageArray = [
    { src: img1, alt: 'Inspiration Image 1' },
    { src: img2, alt: 'Inspiration Image 2' },
    { src: img3, alt: 'Inspiration Image 3' },
    { src: img4, alt: 'Inspiration Image 4' },
];

const Profe = () => {
    return (
        <section className="py-5 inspiration">
            <div className="container mx-auto">

                <div className="flex flex-col items-center w-full lg:flex-row">
                    {imageArray.map((image, index) => (
                        <div key={index} className="w-full lg:w-1/4 xl:w-1/4 ">
                            <div className="w-full first md:h-auto lg:h-[600px]">
                                <img src={image.src} className="w-full h-full transition-transform duration-600 hover:rounded-t-full ring ring-white " alt={image.alt} />
                            </div>
                            <div className="flex flex-col w-full text-center text-[#4F282B] space-y-1 my-1">
                                <span className='w-full prociono-regular text-[20px] font-semibold uppercase ' >ceo</span>
                                <span className='w-full text-[10px] font-semibold uppercase' >Beautician</span>
                            </div>
                        </div>
                    ))}
                </div>
             
            </div>
        </section>
    );
};
export default Profe;
