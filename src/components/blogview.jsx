import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img1 from "../assets/img/blogpage/1.jpg";
import img2 from "../assets/img/blogpage/2.jpg";
import img3 from "../assets/img/blogpage/3.jpg";
import img4 from "../assets/img/blogpage/4.jpg";
import img5 from "../assets/img/blogpage/5.jpeg";
import img6 from "../assets/img/blogpage/6.jpeg";
import Breadcrumb from '../components/breadcrumb'
const blogcontent = [
    {
        id: 1,
        src: img1,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 1,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
    {
        id: 2,
        src: img2,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 1,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
    {
        id: 3,
        src: img3,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 2,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
    {
        id: 4,
        src: img4,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 5,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
    {
        id: 5,
        src: img5,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 1,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
    {
        id: 6,
        src: img6,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        comment: 7,
        dis: "Duis Convallis Eleifend Turpis Sollicitudin Vehicula. Aliquam Erat Volutpat. Morbi Vel Lacinia Nunc, Non Porttitor Tortor.",
        mindis: "Sed tincidunt posuere nunc eu aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet lectus mollis, egestas felis semper, eleifend orci. Maecenas blandit aliquet mi id egestas. ",
        ondayshoot:"Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, nec mattis risus auris consequat viverra sapien id lobortis. Vivamus auctor turpis vel   dignissim licitudin. Quisque eget "
    },
];

const Blogview = () => {
    const { blogid } = useParams()
    const [post, setpost] = useState(null);

    useEffect(() => {
        const foundPost = blogcontent.find((item) => item.id === parseInt(blogid))
        setpost(foundPost);
    }, [blogid])
    if (!post) {
        return <p>Loading...</p>
    }
    return (
        <div className='pt-20' >
            <Breadcrumb />
            <div className="container mx-auto">
                <div className="py-[100px] ">
                    <div className="w-full firstimg aspect-video">
                        <img src={post.src} alt="" />
                    </div>
                    <div className="w-full py-5 data_post text-[#4F282B] ">
                        <div className="flex flex-col justify-between w-full md:flex-row ">
                            <div className="flex flex-col w-full md:w-4/12 md:flex-row">
                                <div className="text-center md:text-start pe-3">
                                    <span>
                                        {post.date}
                                    </span>
                                </div>
                                <div className="text-center md:text-start pe-3">
                                    <span className='capitalize' >
                                        {post.comment} comment
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center w-full md:w-1/12 md:justify-end">
                                <div className="pe-0 md:pe-3">
                                    <span className='uppercase text-[15px]' >
                                        my admin
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <p className='text-[20px] md:text-[30px] text-wrap capitalize prociono-regular leading-none ' >{post.dis}</p>
                        </div>
                        <div className="text-wrap">
                            <p className='text-[15px] md:text-[22px] text-wrap' >{post.mindis}</p>
                        </div>
                    </div>
                    <div className="w-full py-10 data_post text-[#4F282B] ">
                        <div className="text-center md:text-start mb-[20px]">
                            <p className='text-[20px] md:text-[30px] text-wrap capitalize prociono-regular leading-none ' >On The Day Of The Shoot :
                            </p>
                        </div>
                        <div className="text-wrap">
                            <p className='text-[15px] md:text-[22px] text-wrap' >{post.ondayshoot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogview