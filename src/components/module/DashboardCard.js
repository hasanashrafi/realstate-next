
import React from 'react'
import Card from './Card'

function DashboardCard({ data }) {
    return (
        <div className=' flex flex-col w-96 md:h-fit justify-center py-2   items-center'>
            <div className='flex w-[90%]  justify-between '>
                <button className='text-sm w-1/2 rounded-md p-2 transition-all ease-in-out bg-yellow-500 text-white hover:bg-yellow-600 m-1'>
                    ویرایش
                </button>
                <button className='text-sm w-1/2 rounded-md p-2 transition-all ease-in-out bg-red-500 text-white hover:bg-red-600 m-1'>
                    حذف
                </button>
            </div>
            <Card data={data} />
        </div>
    );
}

export default DashboardCard