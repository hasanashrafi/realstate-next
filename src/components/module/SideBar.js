import Link from 'next/link';
import React from 'react'
import { FaFilter } from "react-icons/fa";

function SideBar() {
    return (
        <div className='flex flex-col w-36 p-3 text-white rounded h-auto'>

            <p className='flex items-center mb-4 mx-auto border-b-2 w-full gap-x-2 text-white font-DanaDemiBold text-lg '>
                <FaFilter />
                دسته بندی
            </p>
            <Link
                className='m-1 text-lg'
                href="/buy-residential">
                همه
            </Link>
            <Link
                className='m-1 text-lg'
                href={{ pathname: "/buy-residential", query: { category: "villa" } }}>
                ویلا
            </Link> 
             <Link
                className='m-1 text-lg'
                href={{ pathname: "/buy-residential", query: { category: "apartment" } }}>
                آپارتمان
            </Link>
            <Link
                className='m-1 text-lg'
                href={{ pathname: "/buy-residential", query: { category: "store" } }}
                >
                مغازه
            </Link>
            <Link
                className='m-1 text-lg'
                href={{ pathname: "/buy-residential", query: { category: "office" } }}>
                دفتر
            </Link>

        </div>
    )
}

export default SideBar