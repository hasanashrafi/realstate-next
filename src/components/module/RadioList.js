import React from 'react'

function RadioList({ profileData, setProfileData }) {
    const { category } = profileData

    const changeHandler = (e) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }
    return (
        <div className='my-2 w-fit '>
            <p>دسته بندی</p>
            <div className='flex flex-wrap items-center gap-3 justify-start my-3'>

                <div className='flex  items-center bg-blue-100 p-1 px-3 gap-x-2 rounded w-fit'>
                    <input
                        type="radio"
                        className=''
                        value="villa"
                        id='villa'
                        name='category'
                        checked={category === "villa"}
                        onChange={changeHandler}
                    />
                    <label htmlFor='villa'>ویلا</label>
                </div>

                <div className='flex items-center bg-blue-100 p-1 px-3 gap-x-2 rounded w-fit'>
                    <input
                        type="radio"
                        className=''
                        value="apartment"
                        id='apartment'
                        name='category'
                        checked={category === "apartment"}
                        onChange={changeHandler}
                    />
                    <label htmlFor='apartment'>آپارتمان</label>
                </div>

                <div className='flex items-center bg-blue-100 p-1 px-3 gap-x-2 rounded w-fit'>
                    <input
                        type="radio"
                        className=''
                        value="store"
                        id='store'
                        name='category'
                        checked={category === "store"}
                        onChange={changeHandler}
                    />
                    <label htmlFor='store'>مغازه</label>
                </div>

                <div className='flex items-center bg-blue-100 p-1 px-3 gap-x-2 rounded w-fit'>
                    <input
                        type="radio"
                        className=''
                        value="office"
                        id='office'
                        name='category'
                        checked={category === "office"}
                        onChange={changeHandler}
                    />
                    <label htmlFor='office'>دفتر</label>
                </div>

                
            </div>
        </div>
    )
}

export default RadioList