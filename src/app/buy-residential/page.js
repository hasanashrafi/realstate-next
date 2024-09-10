import BuyResidentialPage from '@/components/template/BuyResidentialPage'
import React from 'react'

async function BuyResidential({ searchParams }) {

    const res = await fetch("http://localhost:3000/api/profile",
        { cache: "no-store" }
    )
    const data = await res.json()


    if (data.error) return <p>مشکلی پیش آمده است</p>
  
    if (searchParams.category) {

        
    }
        
        
        return (
        <div className='min-h-screen p-5'>
            <BuyResidentialPage data={data.data} />
        </div>
    )
}

export default BuyResidential