import DetailPage from '@/components/template/DetailPage'
import Profile from '@/models/Profile'
import connectDB from '@/utils/connectDB'
import React from 'react'

async function ProfileDetails({ params: { profileId } }) {

    await connectDB()
    const profile = await Profile.findOne({ _id: profileId })
    
    if (!profile) return <p>مشکلی پیش آمده است.</p>

    return (
        <div className='min-h-screen font-Dana p-5 text-white'>
           <DetailPage data={profile} />
        </div>
    )
}

export default ProfileDetails