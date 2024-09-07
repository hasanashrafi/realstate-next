import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { CgProfile } from "react-icons/cg"

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LogOutButton from '../module/LogOutButton'


async function DashboardSideBar({ children }) {
    const session = await getServerSession(authOptions)

    return (
        <div className='w-[95%]  p-2 mx-auto flex flex-col md:flex-row md:items-start md:gap-x-3 justify-center items-center gap-y-5  mt-10  px-2 '>

            {/* sidebar */}
            <div className=' font-DanaDemiBold flex sm:flex-col justify-around mx-auto items-center sm:w-[260px] w-full  h-fit px-2 py-2 rounded-lg  shadow-dark text-sm'>
                <CgProfile className='hidden md:block text-5xl text-gray-600' />
                <p className='hidden md:block p-1 my-2 text-gray-600 font-semibold border-b-2 border-b-gray-500'>
                    {session?.user.email}
                </p>

                <Link
                    href="/dashboard"
                    className='text-blue-600 my-2 hover:text-blue-700 transition-all ease-in-out'>
                    حساب کاربری
                </Link>
                <Link
                    href="/dashboard/my-profiles"
                    className='text-blue-600 my-2 hover:text-blue-700 transition-all ease-in-out'>
                    آگهی های من
                </Link>
                <Link
                    href="/dashboard/add"
                    className='text-blue-600 my-2 hover:text-blue-700 transition-all ease-in-out'>
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