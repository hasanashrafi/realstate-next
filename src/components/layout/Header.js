"use client"

import React from 'react'
import { LuLogIn } from "react-icons/lu";import { MdOutlineHomeWork } from "react-icons/md"; import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { LuLayoutDashboard } from "react-icons/lu";


function Header() {
    const { data } = useSession()
    console.log(data)
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
            <p className='flex gap-2  font-DanaDemiBold text-white '><MdOutlineHomeWork className='text-4xl font-bold' /></p>
            {
                data ? (
                    <div className=' text-white text-2xl hover:text-indigo-200 transition-all ease-in-out'>
                        <Link href="/dashboard" className=' '> <LuLayoutDashboard />
                        </Link>
                    </div>
                ) : (

                    <div className=' text-white text-2xl hover:text-indigo-200 transition-all ease-in-out'>
                        <Link href="/signup" className=' '> <LuLogIn />
                        </Link>
                    </div>
                )
            }
        </header>
    )
}

export default Header