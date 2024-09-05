import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { CgProfile } from "react-icons/cg"
import LogOutButton from '../module/LogOutButton'


async function DashboardSideBar({ children }) {
    const session = await getServerSession(authOptions)
    console.log(session)

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-y-5 mx-5 mt-10  px-2 '>

            {/* sidebar */}
            <div className='font-DanaDemiBold flex md:flex-col justify-between mx-auto items-center md:w-[200px] w-full bg-white h-fit px-2 py-2 rounded-lg shadow-blue-300 shadow-light text-sm'>
                <CgProfile className='hidden md:visible text-5xl text-gray-600' />
                <p className='p-1 my-2 text-gray-600 font-semibold border-b-2 border-b-gray-500'>
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
                <LogOutButton/>
            </div>
            {/* main */}
            <div className=' w-fit '>
                {children}
            </div>
        </div>
    )
}

export default DashboardSideBar