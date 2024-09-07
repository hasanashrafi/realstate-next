import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DashboardSideBar from '@/components/layout/DashboardSideBar'

async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/signin")

    return (
        <DashboardSideBar className='min-h-screen bg-red-500 '>
            {children}
        </DashboardSideBar>
    )
}

export default DashboardLayout