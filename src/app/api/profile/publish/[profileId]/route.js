import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

import User from "@/models/User"
import Profile from "@/models/Profile"
import connectDB from "@/utils/connectDB"

export async function PATCH(req, context) {
    try {
        await connectDB()

        const id = context.params.profileId

        const session = await getServerSession(req)
        if (!session) {
            return NextResponse.json(
                { status: 401 },
                { error: "وارد حساب کاربری شوید." }
            )
        }

        const user = await User.findOne({ email: session.user.email })
        if (!user) {
            return NextResponse.json(
                { status: 404 },
                { error: " حساب کاربری وجود ندارد." }
            )
        }

        if (user.role !== "ADMIN") {
            return NextResponse.json(
                { status: 403 },
                { error: "شما اجازه دسترسی به پنل ادمین ندارید." }
            )
        }

        const profile = await Profile.findOne({ _id: id })
        profile.published = true;
        profile.save()


        return NextResponse.json(
            { status: 201 },
            { message: "آگهی با موفقیت منتشر شد." }
        )

    } catch (error) {
        console.log(error)
        NextResponse.json(
            { status: 500 },
            { error: "مشکلی در سرور رخ داده است" }
        )
    }
}