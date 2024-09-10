'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const queries = [
        { villa: "ویلا" },
        { apartment: "آپارتمان" },
        { store: "مغازه" },
        { office: "دفتر" },
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col w-32 p-3 text-white rounded h-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
            <button onClick={toggleSidebar} className="mb-4">
            <p className='flex items-center  mx-auto border-b-2 w-full text-white font-DanaDemiBold text-lg'>
                <FaFilter className="text-lg" />
                دسته بندی
            </p>
            </button>
           {isOpen?(
            <div className='flex flex-col '>
            <Link className='m-1 text-lg' href="/buy-residential">
                همه
            </Link>
            {
                queries.map((query, index) => {
                    const category = Object.keys(query)[0];
                    const categoryValue = Object.values(query)[0];

                    return (
                        <Link
                            key={index}
                            className='m-1 text-lg'
                            href={{
                                pathname: "/buy-residential",
                                query: { category: category }
                            }}
                        >
                            {categoryValue}
                        </Link>
                    );
                })
            }
           </div>):null}
        </div>
    );
}

export default SideBar;
