"use client"

import React from 'react'
import { LuLogIn } from "react-icons/lu";import { MdOutlineHomeWork } from "react-icons/md"; import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { LuLayoutDashboard } from "react-icons/lu";


function Header() {
    const { data } = useSession()
    console.log(data)
    return (
        <header className='flex justify-between font-Dana items-center px-5 p-2 mx-auto w-full bg-violet-600'>
            <div className='flex  items-center text-white'>
                <ul className='flex  justify-start text-sm'>
                    <li className='p-1'>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li className='p-1'>
                        <Link href="/buy-residential">آگهی ها </Link>
                    </li>
                </ul>
            </div>
           
            <MdOutlineHomeWork className='text-3xl text-white font-bold' />
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