"use client"
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogOutButton() {
    return (
        <button onClick={signOut}
        className="flex justify-center gap-x-3 items-center font-DanaDemiBold w-48 text-center  rounded-lg p-2 mt-2 bg-red-500 hover:bg-red-700 text-white ">
            <FiLogOut  className=""/>
            <span className="text-[12px] ">خروج از حساب کاربری</span>
        </button>
    )
}

export default LogOutButton