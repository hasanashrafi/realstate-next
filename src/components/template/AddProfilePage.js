"use client"
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import TextInput from '../module/TextInput'
import RadioList from '../module/RadioList'
import TextList from '../module/TextList'
import CustomDatePicker from '../module/CustomDatePicker'
import Dots from '../module/ThreeDots'
import { useRouter } from 'next/navigation'

function AddProfilePage({ data }) {
    
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realEstate: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    })

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (data) setProfileData(data)
    }, [])

    const router = useRouter()

    const submitHandler = async () => {
        setLoading(true)
        const res = await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        setLoading(false)

        if (data.error) {
            toast.error(data.error)
        } else {
            toast.success("آگهی با موفقیت ثبت شد")
            router.refresh()
        }
    }

    const editHandler = async () => {
        setLoading(true)
        const res = await fetch("/api/profile", {
            method: "PATCH",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        setLoading(false)

        if (data.error) {
            toast.error(data.error)
        } else {
            toast.success("آگهی با موفقیت ویرایش شد.")
            router.refresh()
        }
    }

    return (
        <div className='font-DanaMedium  p-2  border rounded-md mb-10  w-full'>
            <p className='mt-3 font-DanaDemiBold text-white text-xl mb-5  px-3'>
                {data ? "ویرایش آگهی" : "ثبت آگهی"}
            </p>
            <div className='w-full pr-2 my-5 flex flex-col gap-y-6'>
           
                <TextInput
                    name="title"
                    title="عنوان"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    name="description"
                    title="توضیحات"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    textarea={true}
                />
                <TextInput
                    name="location"
                    title="آدرس"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    name="phone"
                    title="موبایل"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    name="price"
                    title="قیمت (تومان)"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    name="realEstate"
                    title="بنگاه"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />

                <RadioList profileData={profileData} setProfileData={setProfileData} />
                <TextList
                    title="امکانات رفاهی"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="amenities"
                />
                <TextList
                    title="قوانین "
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="rules"
                />
                <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />

                {
                    loading ? (
                        <Dots />
                    ) : (
                        data ? (
                            <button
                                onClick={editHandler}
                                className=' bg-blue-600 hover:bg-blue-800 text-white md:w-[50%] mx-auto w-[95%]  p-2 rounded-md mt-5'>
                                ویرایش آگهی
                            </button>
                        ) : (
                            <button
                                onClick={submitHandler}
                                className=' bg-blue-600 hover:bg-blue-800 text-white md:w-[50%] mx-auto w-[95%]  p-2 rounded-md mt-5'>
                                ثبت آگهی
                            </button>
                        )
                    )
                }
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default AddProfilePage