import React from 'react'
import Card from '../module/Card'
import SideBar from '../module/SideBar'

function BuyResidentialPage({ data }) {


    return (
        <div className='flex font-Dana p-4'>
            {/*sideBar  */}
            <div>
                <SideBar />
            </div>

            {/* residential */}
            <div className='flex flex-wrap justify-center w-full  p-2 gap-5 '>
                {
                    data.length ? null : (
                        <p className='text-center bg-red-200 text-red-600 rounded-md p-2'>
                            آگهی ثبت نشده است.
                        </p>)
                }
                {
                    data.map((profile) => (
                        <div key={profile._id}
                            className='w-full  sm:w-1/2  lg:w-1/5'
                        >
                            <Card data={profile} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BuyResidentialPage

