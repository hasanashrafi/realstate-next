import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { CgProfile } from "react-icons/cg"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LogOutButton from '../module/LogOutButton'


async function DashboardSideBar({ children }) {
    const session = await getServerSession(authOptions)

    return (
        <div className='p-2  md:flex-row md:items-start  md:gap-x-3 justify-center items-center gap-y-5  mt-10  px-2 '>
            {/* sidebar */}
            <div className=' font-DanaDemiBold mb-10 flex justify-around mx-auto items-center  w-full  h-fit px-2 py-2 rounded-lg  shadow-dark text-sm'>
                <div className='hidden  sm:flex items-center gap-x-1'>
                <CgProfile className=' text-4xl  text-gray-600' />
                <p className='   text-gray-600 font-semibold '>
                    {session?.user.email}
                </p>
                </div>

                <Link
                    href="/dashboard"
                    className='text-blue-600  hover:text-blue-700 transition-all ease-in-out'>
                    حساب کاربری
                </Link>
                <Link
                    href="/dashboard/my-profiles"
                    className='text-blue-600  hover:text-blue-700 transition-all ease-in-out'>
                    آگهی های من
                </Link>
                <Link
                    href="/dashboard/add"
                    className='text-blue-600  hover:text-blue-700 transition-all ease-in-out'>
                    ثبت آگهی
                </Link>
                <div> <LogOutButton/></div>
               
            </div>
            {/* main */}
            <div className='w-[95%] mx-auto'>
                {children}
            </div>
        </div>
    )
}

export default DashboardSideBar