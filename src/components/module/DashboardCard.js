"use client"

import React from 'react'
import Card from './Card'

function DashboardCard({ data }) {
    const editHandler = () => {

    }
    const deleteHandler = () => {

    }

    return (
        <div className='bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 flex flex-col sm:flex-row  w-full  justify-center py-4  items-center rounded-l-xl'>
            <Card data={data} />
            <div className='flex w-[50%] sm:w-[95%] mx-auto self-end justify-between '>
                <button
                    onClick={editHandler}
                    className='text-sm w-1/2 rounded-md p-2 transition-all ease-in-out bg-yellow-500 text-white hover:bg-yellow-600 m-1'>
                    ویرایش
                </button>
                <button
                    onClick={deleteHandler}
                    className='text-sm w-1/2 rounded-md p-2 transition-all ease-in-out bg-red-500 text-white hover:bg-red-600 m-1'>
                    حذف
                </button>
            </div>
        </div>
    );
}

export default DashboardCard