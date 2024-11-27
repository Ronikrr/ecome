import React from 'react'
import { Link } from 'react-router-dom'
import user_image from '../assets/img/banner_image_human.png'
const Banner = () => {
    return (
        <section className='pt-32 pb-80 bg-[#fceade] relative h-auto overflow-hidden' >
            <div className="container mx-auto ">
                <div className="absolute left-0 z-0 bg_image top-12">
                    <img src="https://s3-alpha-sig.figma.com/img/1222/b8a8/7eca014cea3d00a18323632e51aa6808?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dhjbK1jtKpDkZen66PTqvkuoDAk5noww41XjX92zv-7qekSFNGx94PB8ddYrOvMsfmf5~yUpBZ8PW-zbZ7iCbBUH7RVjmXqekW83Vt-qUejxn43nFCbFYa0yulzh4BATNADJ9je3mv5nqNu4KM2K4L-E7aZM0Zik0BBqThbxUjlVn4UEQyxKD4wT5rEPhUU5FMfcBJUlB1KvnxriYWN5cw2th5AaFsz-lwxFLcUG553iNKqYPGtm047pgpBkrqSPEx12ckItK2U-qqZPXDJd0Q0UmWxOTogYEdePw6pStIwP4m5uJml6TRlfzNXTwwCGk81ckewwuw9CGl04wCl07g__" alt="" />
                </div>
                <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center md:text-left md:w-5/12 small_head ">
                    <span className='text-xl md:text-lg' >NEW IN COSMETICS</span>
                    <div className="main_head">
                        <span className='text-5xl text-[#4f282b] capitalize prociono-regular md:text-7xl ' >Natural skin care products</span>
                    </div>
                    <div className="btns">

                        <Link to="/shop" className='px-6 py-4 text-xl font-semibold uppercase btn_primary prociono-regular' >shop now</Link>
                    </div>
                </div>
                <div className="absolute right-0 z-0 w-4/12 bg_image top-12 ">
                    <img src={user_image} className='w-full h-12/12' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner