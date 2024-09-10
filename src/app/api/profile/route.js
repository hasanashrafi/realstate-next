import { NextResponse } from "next/server"
import { Types } from "mongoose";
import { getServerSession } from "next-auth";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB"

export async function GET(req) {
    try {
        await connectDB()

        const profiles = await Profile.find().select("-userId")
        console.log(profiles)





        return NextResponse.json(
            {
                status: 200,
                message: "اطلاعات دریافت شد",
                data:profiles,
            })

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { status: 500 },
            { error: "مشکلی در ارتباط با سرور رخ داده است." }
        )
    }
}


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

export async function PATCH(req) {
    try {
        await connectDB();

        const {
            _id,
            title,
            description,
            location,
            phone,
            price,
            realEstate,
            constructionDate,
            category,
            rules,
            amenities } = await req.json();

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
        if (
            !_id ||
            !title ||
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


        const profile = await Profile.findOne({ _id })
        if (!user._id.equals(profile.userId)) {
            return NextResponse.json(
                { error: "دسترسی شما به این آگهی محدود شده است." },
                { status: 403 }
            )
        }

        profile.title = title
        profile.description = description
        profile.location = location
        profile.phone = phone
        profile.price = price
        profile.realEstate = realEstate
        profile.constructionDate = constructionDate
        profile.category = category
        profile.amenities = amenities
        profile.rules = rules
        profile.save()

        return NextResponse.json(
            { message: "آگهی با موفقیت ویرایش شد." },
            { status: 201 }
        )

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "مشکلی در ارتباط با سرور رخ داده است" },
            { status: 500 }
        )
    }
}
