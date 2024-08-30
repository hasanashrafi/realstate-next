import React from 'react'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

function Header() {
    return (
        <header className='flex justify-between font-Dana items-center mb-5 p-4 mx-auto w-full bg-violet-600'>
            <div className='flex p-1 items-center text-white'>
                <ul className='flex justify-around text-sm'>
                    <li className='p-1 mx-1'>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li className='p-1 mx-1'>
                        <Link href="/buy-residential">آگهی ها </Link>
                    </li>
                </ul>
            </div>
            <div className=' text-white text-2xl'>
                <Link href="/signin" className=' '> <FaRegUser /> </Link>
            </div>
        </header>
    )
}

export default Header