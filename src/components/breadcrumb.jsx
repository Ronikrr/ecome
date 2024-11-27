import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import bgimage from '../assets/img/aboutus page/bgimage.png'
const Breadcrumb = () => {
    const location = useLocation();
    const pathename = location.pathname.split('/').filter((x) => x);

    const capitalizeWords = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (

        <section className='h-[300px] w-full relative ' >
            <div className="absolute top-0 left-0 h-full -z-10 ">
                <img src={bgimage} className='h-full ' alt="" />
            </div>
            <div className=" w-full h-[300px] top-0 bg-[#FCEADE] opacity-[0.5] flex items-center justify-center flex-col">
             
               
                <span>  <nav aria-label='breadcrumb' className='text-[#4F282B]' >
                    <ol className="flex space-x-2">
                        <li>
                            <Link to='/' className='uppercase hover:underline' >home</Link>
                        </li>
                        {pathename.map((v, i) => {
                            const to = `/${pathename.slice(0, i + 3).join('/')}`;
                            const isLast = i === pathename.length - 1;
                            const disname = capitalizeWords(decodeURIComponent(v))
                            return (
                                <li key={to} className='flex items-center ' >
                                    <span className='mx-2' ></span>
                                    {isLast ? (
                                        <span area-current="page" className='uppercase' > {disname} </span>
                                    ) : (
                                        <Link to="" className='hover:underline ' >
                                            {disname}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ol>
                </nav></span>
            </div>
        </section>
    )
}

export default Breadcrumb