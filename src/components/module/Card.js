import React from 'react'

import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";


import { sp } from '@/utils/replaceNumbers';
import Link from 'next/link';
import {icons} from '@/constants/icons';


function Card({ data: { _id,title, category, location, price } }) {
    

    return (
        <div className='flex flex-col gap-y-3 w-full   p-2 bg-blue-800 text-white  rounded-l-xl'>
            <p className='flex items-center justify-center text-3xl'>
                {icons[category] || <span>No Icon</span>}
            </p>
            <p className='flex items-center gap-x-2'>
                <MdOutlineRealEstateAgent className='text-xl' />
                {title}
            </p>
            <p className='flex items-center gap-x-2'>
                <FaMapLocationDot className='text-xl' />
                {location}
            </p>
            <p className='flex items-center gap-x-2'>
                <FaHandHoldingUsd className='text-xl' />
                {sp(price)} تومان
            </p>
            <Link href={`/buy-residential/${_id}`} className='w-full p-2 rounded bg-blue-100 text-blue-800 transition-all ease-in-out hover:bg-blue-200 border text-sm flex items-center justify-between'>
                مشاهده آگهی
                <FaArrowLeftLong />
            </Link>
        </div>
    );
}

export default Card