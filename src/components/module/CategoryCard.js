import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryCard({ title, name }) {
    return (
        <div className='w-full rounded-md hover:scale-105 transition-all ease-in-out'>
            <Link href={`/buy-residential/?category=${name}`}>
                <Image
                    src={`/images/${name}.png`}
                    alt={title}
                    width={240}
                    height={144}
                    priority={true}
                    className=' rounded'
                />
            <p className=' text-center mt-2 text-white '>{title}</p>
            </Link>

        </div>
    )
}

export default CategoryCard