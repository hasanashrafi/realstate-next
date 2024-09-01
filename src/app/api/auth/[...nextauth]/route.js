
import CredentialsProviders from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import NextAuth from "next-auth";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [CredentialsProviders({

        async authorize(credentials) {
            const { email, password } = credentials

            try {
                await connectDB()

            } catch (error) {
                throw new Error("مشکلی در ارتباط با سرور رخ داده است")
            }

            if (!email || !password) throw new Error("لطفا ایمیل و رمز عبور خود را وارد کنید.  ")


            const user = await User.findOne({ email: email })
            if (!user) throw new Error("شما ثبت نام نکرده اید")


            const isValid = await verifyPassword(password, user.password)
            if (!isValid) throw new Error("ایمیل یا رمز عبور صحیح نمیباشد")


            return { email }
        }

    })]

}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }