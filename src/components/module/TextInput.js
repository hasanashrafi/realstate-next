import React from 'react'
import { p2e, sp } from '@/utils/replaceNumbers'

function TextInput({
    title,
    name,
    profileData,
    setProfileData,
    textarea = false
}) {

    const changeHandler = (e) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: p2e(value) })
    }

    return (
        <div className='p-2 '>
            <p className='text-white'>{title}</p>
            {
                textarea ?
                    (
                        <textarea
                            onChange={changeHandler}
                            name={name}
                            value={profileData[name]}
                            type='text'
                            placeholder='...'
                            className='w-72 h-36 p-2 my-1 text-justify rounded-md border focus:border-blue-600 outline-none'
                        />
                    ) : (
                        <input
                            onChange={changeHandler}
                            name={name}
                            value={profileData[name]}
                            type='text'
                            placeholder='عنوان را وارد کنید  ...'
                            className='p-2 w-72 my-1 focus:border focus:border-blue-600 rounded-md border outline-none' />
                    )
            }


        </div>
    )
}

export default TextInput