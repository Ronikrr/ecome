import React from 'react'
import img1 from '../assets/img/our_team/Rectangle_163.png'
import img2 from '../assets/img/our_team/Rectangle_164.png'
import img3 from '../assets/img/our_team/Rectangle_165.png'
import img4 from '../assets/img/our_team/Rectangle_166.png'

const team = [
    {
        id: 1,
        name: 'Maria Culhane',
        work: 'Makeup Artist',
        work_dis: 'Feugiat ut fames vel sed luctus dignissim arcu eget. Pellentesque enim id tellus consectetur.',
        src: img1
    },
    {
        id: 2,
        name: 'Emery Herwitz',
        work: 'Makeup Artist',
        work_dis: 'Feugiat ut fames vel sed luctus dignissim arcu eget. Pellentesque enim id tellus consectetur.',
        src: img2
    },
    {
        id: 3,
        name: 'Allison Workman',
        work: 'Makeup Artist',
        work_dis: 'Feugiat ut fames vel sed luctus dignissim arcu eget. Pellentesque enim id tellus consectetur.',
        src: img3
    },
    {
        id: 4,
        name: 'Madelyn Bator',
        work: 'Makeup Artist',
        work_dis: 'Feugiat ut fames vel sed luctus dignissim arcu eget. Pellentesque enim id tellus consectetur.',
        src: img4
    }
]
const Ourteamsection = () => {
    return (
        <div className='py-[78px]'  >
            <div className="container mx-auto ">
                <div className="flex flex-wrap w-full space-y-6 lg:space-y-0 ">
                    {team.map((item, i) => (
                        <div key={i} className="w-full mb-[100px]  lg:w-6/12">
                            <div className="w-full shadow-md lg:w-11/12 ">
                                <div className="w-full box-image">
                                    <img src={item.src} className="object-cover w-full h-full aspect-video" alt="" />
                                </div>
                                <div className="px-6 lg:px-[75px] py-8 lg:py-[56px] text-center space-y-6 lg:space-y-[30px] text-[#4f282b]">
                                    <div className="name text-2xl lg:text-[40px] prociono-regular font-bold uppercase tracking-wide lg:tracking-[7px]">
                                        <span>Maria Culhane</span>
                                    </div>
                                    <div className="work text-[#A4A2A2] text-lg lg:text-[30px] uppercase">
                                        <span>Makeup Artist</span>
                                    </div>
                                    <div className="work_dis text-[#A4A2A2] text-base lg:text-[25px]">
                                        <span>Feugiat ut fames vel sed luctus dignissim arcu eget. Pellentesque enim id tellus consectetur.</span>
                                    </div>
                                    <div className="flex space-x-4 lg:space-x-[30px] justify-center text-lg lg:text-[25px]">
                                        <i className="bi bi-whatsapp"></i>
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-youtube"></i>
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                    <div className="flex flex-wrap text-center lg:text-left lg:justify-between text-lg lg:text-[25px]">
                                        <div className="flex items-center space-x-2 lg:space-x-[10px] justify-center">
                                            <i className="bi bi-telephone-inbound"></i>
                                            <p>+919727168583</p>
                                        </div>
                                        <div className="flex items-center space-x-2 lg:space-x-[10px] justify-center">
                                            <i className="bi bi-whatsapp"></i>
                                            <p>cosmatic123@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Ourteamsection