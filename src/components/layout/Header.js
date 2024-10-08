"use client"

import React, { useState } from 'react'
import { LuLogIn } from "react-icons/lu";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { useSession } from 'next-auth/react';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { data } = useSession()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='flex justify-between font-Dana items-center px-5 p-2 mx-auto w-full '>
            <div className='flex items-center text-white'>
                <div className='relative sm:hidden'>
                    <button
                        onClick={toggleDropdown}
                        className=' p-2 rounded text-xl '
                    >
                        <IoMenu />
                    </button>
                    {isOpen && (
                        <ul className=' w-24 p-1 absolute  bg-gray-500 text-sm mt-2 rounded shadow-lg'>
                            <li className='p-1'>
                                <Link href="/">صفحه اصلی</Link>
                            </li>
                            <li className='p-1'>
                                <Link href="/buy-residential">آگهی ها</Link>
                            </li>
                            <li className='p-1'>
                            <Link href="dashboard/add">ثبت آگهی</Link>
                        </li>
                        </ul>
                    )}
                </div>

                <div>
                    <ul className='hidden sm:flex gap-x-3 p-1 md:text-md '>
                        <li className='p-1'>
                            <Link href="/">صفحه اصلی</Link>
                        </li>
                        <li className='p-1'>
                            <Link href="/buy-residential">آگهی ها</Link>
                        </li>
                       
                    </ul>
                </div>

            </div>

            <BsFillHouseCheckFill className='text-3xl text-white font-bold' />
            {
                data ? (
                    <div className=' text-white text-2xl hover:text-indigo-200 transition-all ease-in-out'>
                        <Link href="/dashboard" className=' '> <FaRegUser />
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