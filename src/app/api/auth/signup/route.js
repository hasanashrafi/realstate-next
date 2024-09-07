import { NextResponse } from "next/server";

import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
    try {
        // Attempt to connect to the database
        await connectDB();
        
        // Parse the request body
        const { email, password, name, lastName, phone } = await req.json();
        
        // Validate input fields
        if (!email || !password) {
            return NextResponse.json(
                { error: "لطفا ایمیل و رمز عبور خود را وارد کنید." },
                { status: 422 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "ایمیل را درست وارد کنید." },
                { status: 422 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "رمز عبور باید بیشتر از 6 کاراکتر باشد" },
                { status: 422 }
            );
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "کاربر از قبل ثبت نام کرده است." },
                { status: 409 }
            );
        }

        // Hash the password and create a new user
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            email,
            password: hashedPassword,
            name,
            lastName,
            phone
        });
        console.log("کاربر جدید با آیدی:", newUser._id);
        
        // Return success response
        return NextResponse.json(
            { message: "حساب کاربری ایجاد شد." },
            { status: 200 }
        );

    } catch (error) {
        // Handle any errors that occur during the process
        console.log(error);
        return NextResponse.json(
            { error: "مشکلی در ارتباط با سرور رخ داده است" },
            { status: 500 }
        );
    }
}
