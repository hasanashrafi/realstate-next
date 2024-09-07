"use client"
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogOutButton() {
    return (
        <button onClick={signOut}
        className="flex justify-center gap-x-1 items-center text-sm font-DanaDemiBold w-fit text-center  rounded-lg p-2  bg-red-500 hover:bg-red-700 text-white ">
            <FiLogOut  className=""/>
            <span className="hidden md:inline-block w-fit text-[12px] ">خروج از حساب کاربری</span>
        </button>
    )
}

export default LogOutButton