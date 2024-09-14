import Image from 'next/image';
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { FaHouseCircleCheck } from "react-icons/fa6";
import CategoryCard from '../module/CategoryCard';
import { CiLocationOn } from "react-icons/ci";
import { categories, cities, services } from '@/constants/strings';


function HomePage() {


    return (
        <div className='font-Dana max-w-5xl my-10 w-full mx-auto min-h-screen  rounded-md  p-4'>

            <div className='p-2 '>
                <p className=' drop-shadow-glow text-3xl text-center my-5 font-DanaDemiBold text-white'>
                    سامانه خرید و اجاره ملک
                </p>
                <p className='text-center text-sky-300  md:text-xl'>شرکت آلفا ملک</p>
                <ul className='flex my-4  mx-auto justify-around text-white  p-2'>
                    {services.map((i) => (
                        <li key={i}
                            className='flex flex-wrap items-center justify-center mr-1 w-20 hover:w-24  p-2 border-b-2 border-b-white cursor-pointer transition-all ease-in-out hover:border-b-gray-300 '
                        >
                            <span> <FaHouseCircleCheck className='text-xl  ' /></span>
                            <span className='block  mx-2'> {i} </span>

                        </li>
                    ))}
                </ul>
            </div>
            {/* image */}
            <div className=' w-full flex flex-wrap my-4 mx-auto justify-center gap-2'>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>
                <div className='relative'>
                    <Image
                        priority
                        alt='bg'
                        width={400}
                        height={200}
                        src='/images/bg-2.jpg'
                        className=' w-[300px] h-fit rounded hover:scale-105 '
                    >

                    </Image>
                    <span className='p-2  absolute bottom-0 left-0 text-xl  text-white'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ                    </span>
                </div>


            </div>

            {/* category */}
            <div className='flex items-center gap-x-3 my-10'>
                {Object.keys(categories).map((i) => (
                    <CategoryCard title={categories[i]} name={i} />
                ))}
            </div>

            {/* cities */}
            <div className='my-10'>
                <p className='mx-auto font-DanaDemiBold text-2xl border-b-2 border-b-white w-fit text-white'>شهرهای پر بازدید</p>
                <ul className='w-full  flex flex-wrap justify-center gap-y-3 my-10  text-white'>
                    {
                        cities.map((city) => (
                            <li key={city}
                                className='flex items-center justify-center  font-DanaMedium bg-white text-indigo-600 w-24 m-1 text-center rounded-xl cursor-pointer  p-1 hover:bg-indigo-600 hover:text-white transition-all ease-in-out'
                            >
                                <CiLocationOn />
                                <span>{city}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default HomePage