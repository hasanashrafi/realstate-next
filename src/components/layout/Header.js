import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";import Link from 'next/link';

function Header() {
    return (
        <header className='flex justify-between font-Dana items-center px-5 p-4 mx-auto w-full bg-violet-600'>
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
            <p className='flex gap-2  font-DanaDemiBold text-white '><MdOutlineHomeWork  className='text-4xl font-bold' /></p>
            <div className=' text-white text-2xl hover:text-indigo-200 transition-all ease-in-out'>
                <Link href="/signup" className=' '> <FaRegUser /> </Link>
            </div>
        </header>
    )
}

export default Header