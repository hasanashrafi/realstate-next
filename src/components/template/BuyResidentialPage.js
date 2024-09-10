import React from 'react'
import Card from '../module/Card'

function BuyResidentialPage({ data }) {
 

    return (
        <div className='font-Dana p-4'>
            {/*sideBar  */}
            <div>

            </div>

            {/* residential */}
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    data.length ? null : (
                        <p className='text-center bg-red-200 text-red-600 rounded-md p-2'>
                            آگهی ثبت نشده است.
                        </p>)
                }
                {
                    data.map((profile) => (
                       <div key={profile._id}
                       className='w-full sm:w-1/3 md:w-1/3 lg:w-1/6'
                       >
                        <Card  data={profile} />
                       </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BuyResidentialPage

