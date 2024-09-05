"use client"
import React, { useState } from 'react'
import TextInput from '../module/TextInput'
import RadioList from '../module/RadioList'

function AddProfilePage() {
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realEstate: "",
        constructionDate: new Date(),
        category: "",
        roles: [],
        amenities: [],
    })

    const submitHandler =async () => {
console.log(profileData)
    }

    return (
        <div className='font-DanaMedium min-h-screen p-2 mx-1 border rounded-md mb-10  w-fit'>
            <p className='font-DanaDemiBold text-violet-700 text-xl mb-5'>ثبت آگهی</p>
            <div className='pr-5 my-5 flex flex-col gap-y-6'>
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

                <RadioList profileData={profileData} setProfileData={setProfileData}/>

                <button
                    onClick={submitHandler}
                    className=' bg-blue-600 hover:bg-blue-800 text-white w-80  p-2 rounded-md mt-5'>ثبت آگهی</button>
            </div>
        </div>
    )
}

export default AddProfilePage