import { NextResponse } from "next/server"
import { Types } from "mongoose";
import { getServerSession } from "next-auth";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB"

export async function POST(req) {

    try {
        await connectDB()

        const body = await req.json()
        const { title,
            description,
            location,
            phone,
            price,
            realEstate,
            constructionDate,
            category,
            rules,
            amenities } = body;

        const session = await getServerSession(req)
        if (!session) {
            return NextResponse.json(
                { error: "وارد حساب کاربری شوید." },
                { status: 401 }
            )
        }

        const user = await User.findOne({ email: session.user.email })
        
        if (!user) {
            return NextResponse.json(
                { error: "حساب کاربری وجود ندارد." },
                { status: 404 }
            )
        }

        if (!title ||
            !description ||
            !location ||
            !phone ||
            !price ||
            !realEstate ||
            !constructionDate ||
            !category
        ) {
            return NextResponse.json(
                { error: "اطلاعات آگهی را وارد نمایید." },
                { status: 400 }
            )
        }

        const newProfile = await Profile.create({
            title,
            description,
            location,
            phone,
            price: +price,
            realEstate,
            constructionDate,
            category,
            rules,
            amenities,
            userId: new Types.ObjectId(user._id),
        })

        return NextResponse.json(
            { message: "آگهی با موفقیت ثبت شد." },
            { status: 201 }
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "مشکلی در ارتباط با سرور رخ داده است" },
            { status: 500 }
        )
    }
}