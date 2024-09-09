import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { PiTrash } from "react-icons/pi";



function TextList({ title, profileData, setProfileData, type }) {

    const changeHandler = (e, index) => {
        const { value } = e.target
        const list = [...profileData[type]]
        list[index] = value
        setProfileData({ ...profileData, [type]: list })
    }

    const addHandler = (e) => {
        setProfileData({ ...profileData, [type]: [...profileData[type], ""] })
    }

    const deleteHandler = (index) => {
        const list = [...profileData[type]]
        list.splice(index, 1)
        setProfileData({ ...profileData, [type]: list })
    }
    return (
        <div className=''>
            <p className='text-white'>{title}</p>
            {
                profileData[type].map((i, index) => (
                    <div key={index} className='flex items-center'>
                        <input
                            value={i}
                            onChange={(e) => changeHandler(e, index)}
                            type='text'
                            className='outline-none border border-blue-600 my-2 p-1 rounded'
                        />
                        <button
                            onClick={() => deleteHandler(index)}
                            className=' mx-2  p-1.5 bg-red-600 hover:bg-red-700 transition-all ease-in-out text-white rounded-md my-3 text-2xl '
                        >
                            <PiTrash />
                        </button>
                    </div>
                ))
            }
            <button
                onClick={addHandler}
                className='flex items-center gap-x-2 justify-center py-2 bg-blue-600 hover:bg-blue-800 transition-all ease-in-out text-white rounded-md my-3 text-sm px-3'>
                افزودن
                <MdLibraryAdd className='text-lg' />
            </button>
        </div>
    )
}

export default TextList