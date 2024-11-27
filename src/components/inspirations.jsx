// import React from 'react'
// import img1 from '../assets/img/inspi/1.png'
// import img2 from '../assets/img/inspi/2.png'
// import img3 from '../assets/img/inspi/3.png'
// import img4 from '../assets/img/inspi/4.png'

// const Inspirations = () => {
//   return (
//     <section className='py-20 inspitarion' >
//       <div className="flex flex-col items-center w-full xl:flex-row">
//         <div className="w-full md:w-2/4 lg:w-2/4 xl:w-1/4 ">
//           <div className="w-full first h-[400px]">
//             <img src={img1} className='w-full h-full ring ring-white ' alt="" />
//           </div>
//           <div className="w-full first md:h-[200px] ">
//           </div>
//         </div>
//         <div className="w-full md:w-2/4 lg:w-2/4 xl:w-1/4 ">
//           <div className="w-full first md:h-[200px] ">
//           </div>
//           <div className="w-full first h-[400px]">
//             <img src={img2} className='w-full h-full ring ring-white ' alt="" />
//           </div>
//         </div>
//         <div className="w-full md:w-2/4 lg:w-2/4 2xl:w-1/4 ">
//           <div className="w-full first h-[400px]">
//             <img src={img3} className='w-full h-full ring ring-white ' alt="" />
//           </div>
//           <div className="w-full first md:h-[200px] ">
//           </div>
//         </div>
//         <div className="w-full md:w-2/4 lg:w-2/4 xl:w-1/4 ">
//           <div className="w-full first md:h-[200px] ">
//           </div>
//           <div className="w-full first h-[400px]">
//             <img src={img4} className='w-full h-full ring ring-white ' alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Inspirations
import React from 'react';
import img1 from '../assets/img/inspi/1.png';
import img2 from '../assets/img/inspi/2.png';
import img3 from '../assets/img/inspi/3.png';
import img4 from '../assets/img/inspi/4.png';

const imageArray = [
  { src: img1, alt: 'Inspiration Image 1' },
  { src: img2, alt: 'Inspiration Image 2' },
  { src: img3, alt: 'Inspiration Image 3' },
  { src: img4, alt: 'Inspiration Image 4' },
];

const Inspirations = () => {
  return (
    <section className="py-5 inspiration">
      <div className="flex flex-col items-center w-full lg:flex-row">
        {imageArray.map((image, index) => (
          <div key={index} className="hover: w-full lg:w-1/4 xl:w-1/4 lg:even:mt-[200px] ">
            <div className="w-full  first md:h-auto lg:h-[400px]">
              <img src={image.src} className="w-full h-full ring ring-white" alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspirations;
