import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '../api/auth/[...nextauth]/route'
import User from '@/models/User'
import connectDB from '@/utils/connectDB'
import DashboardSideBar from '@/components/layout/DashboardSideBar'
import AdminPage from '@/components/template/AdminPage'
import Profile from '@/models/Profile'

export const metadata = {
    title:"پنل ادمین",
}
async function Admin() {

    await connectDB()

    const session = await getServerSession(authOptions)
   
    if (!session) redirect("/signin")

    const user = await User.findOne({ email: session.user.email })

    if (user.role !== "ADMIN") redirect("/dashboard")

    const profiles = await Profile.find({ published: false })

    return (
        <DashboardSideBar email={user.email} role={user.role}>
                <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />
        </DashboardSideBar>
    )
}

export default Admin