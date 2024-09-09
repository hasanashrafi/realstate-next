import AddProfilePage from '@/components/template/AddProfilePage'
import Profile from '@/models/Profile'
import connectDB from '@/utils/connectDB'
import React from 'react'

async function EditPage({ params: { profileId } }) {
    await connectDB()
    const profile = await Profile.findOne({ _id: profileId })
    if(!profile) return <p>مشکلی پیش آمده است لطفا دوباره امتحان کنید</p>
  
  
    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
}

export default EditPage