
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import MyProfilePage from '@/components/template/MyProfilePage'
import User from '@/models/User'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'

async function MyProfiles() {

    await connectDB()
    const session = await getServerSession(authOptions)
    console.log(session)
    const [user] = await User.aggregate([
        { $match: { email: session.user.email } }
        , {
            $lookup: {
                from: "profiles",
                foreignField: "userId",
                localField: "_id",
                as: "profiles",
            }
        }
    ])
   

    return <MyProfilePage profiles={user.profiles}  />
}

export default MyProfiles