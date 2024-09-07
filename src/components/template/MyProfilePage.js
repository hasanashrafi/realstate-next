import React from 'react'
import DashboardCard from '../module/DashboardCard'

function MyProfilePage({ profiles }) {
    if (!Array.isArray(profiles)) {
        console.error("Profiles prop is not an array");
        return <p className='p-2 font-DanaMedium text-center text-red-600 bg-red-200 rounded-md'>Invalid profiles data.</p>;
    }

    return (
        <div className=' flex flex-wrap gap-2 w-full justify-center p-4 font-Dana min-h-screen'>
            {profiles.length === 0 ? (
                <p className='p-2 font-DanaMedium text-center text-red-600 bg-red-200 rounded-md'> آگهی ثبت نشده است.</p>
            ) : (
                profiles.map((profile) => (
                    <DashboardCard key={profile._id} data={profile} />
                ))
            )}
        </div>
    );
}

export default MyProfilePage