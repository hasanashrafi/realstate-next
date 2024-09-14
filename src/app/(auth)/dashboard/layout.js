import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DashboardSideBar from '@/components/layout/DashboardSideBar'
import connectDB from '@/utils/connectDB'
import User from '@/models/User'

async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/signin")

    await connectDB()
    const user = await User.findOne({ email: session.user.email })
    if (!user) return <p>مشکلی رخ داده است.</p>

    return (
        <DashboardSideBar email={user.email} role={user.role}
            className='min-h-screen bg-red-500 '>
            {children}
        </DashboardSideBar>
    )
}

export default DashboardLayout