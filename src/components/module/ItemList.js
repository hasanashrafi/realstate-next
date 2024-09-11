import React from 'react'

function ItemList({ data }) {
    return (
        <>
         {
            data.length ? (
                <ul className="list-disc mr-3">
                    {
                        data.map((rule, index) => (
                            <li key={index} className=''>
                                {rule}
                            </li>
                        ))
                    }
                </ul>
            ) :
                <p>هیچ موردی ذکر نشده است</p>
        }
        </>
    )
}

export default ItemList