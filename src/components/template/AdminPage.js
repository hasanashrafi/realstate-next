import AdminCard from "../module/AdminCard"

function AdminPage({ profiles }) {

    return (
        <div className=' p-4 min-h-screen'>
            {
                profiles.length ? null : <p className="font-Dana p-2 rounded-md md:w-1/2 bg-red-200 text-red-600">هیچ آگهی در انتظار تایید وجود ندارد</p>
            }
            <div>
                {
                    profiles.map((profile) => (
                        <AdminCard key={profile._id} profile={profile}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminPage