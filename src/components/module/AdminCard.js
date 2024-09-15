"use client"
import { sp } from '@/utils/replaceNumbers'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

function AdminCard({ profile: { _id, title, description, location, phone, price, realEstate, category } }) {
    const router = useRouter()

    const publishHandler = async () => {
        const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" })
        const data = await res.json()
        toast.success(data.message)
        router.reload()
    }

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${_id}`, {
            method: "DELETE",
        })
        const result = await res.json();
        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success("آگهی با موفقیت حذف شد.")
            router.refresh()
        }
    }

    return (
        <div className=' flex flex-col border rounded-md my-5  p-3 text-white font-Dana'>
            <Toaster />
            <p className='text-xl font-DanaMedium mb-2 border-b-2 w-fit'> {title}</p>
            <p>{description}</p>
            <div className='flex  my-5'>
                <span className='bg-blue-500 text-white w-36 text-center m-2 p-2 rounded'>{location}</span>
                <span className='bg-blue-500 text-white w-36 text-center m-2 p-2 rounded'>{phone}</span>
                <span className='bg-blue-500 text-white w-36 text-center m-2 p-2 rounded'>{sp(price)}</span>
            </div>
            <div className='flex items-center '>
            <button
                onClick={publishHandler}
                className='hover:bg-green-600 mt-4 w-1/3 transition-all ease-in-out bg-green-500 text-white p-2 rounded-md md:w-1/3 mx-auto'>
                تایید انتشار
            </button>
            <button
                onClick={deleteHandler}
                className='hover:bg-red-600 mt-4 w-1/3 transition-all ease-in-out bg-red-500 text-white p-2 rounded-md md:w-1/3 mx-auto'>
               حذف آگهی
            </button>
            </div>
        </div>
    )
}

export default AdminCard