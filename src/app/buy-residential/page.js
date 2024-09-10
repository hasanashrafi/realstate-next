import BuyResidentialPage from '@/components/template/BuyResidentialPage'
import React from 'react'

async function BuyResidential({ searchParams }) {

    const res = await fetch("https://realestate-next-chi.vercel.app/api/profile",
        { cache: "no-store" }
    )
    const data = await res.json()


    if (data.error) return <p>مشکلی پیش آمده است</p>

    let finalData = data.data
    if (searchParams.category) {
        finalData = finalData.filter((i) => i.category === searchParams.category)

    }


    return (
        <div className='min-h-screen p-5'>
            <BuyResidentialPage data={finalData} />
        </div>
    )
}

export default BuyResidential