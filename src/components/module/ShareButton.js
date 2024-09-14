'use client'

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { IoMdShare } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';

function ShareButton() {
    const [url, setUrl] = useState("")
    
    const copyHandler = () => {
        toast.success("لینک آگهی کپی شد")
    }
    useEffect(() => {
        setUrl(window.location.href)
    }, [])
    
    return (
        <CopyToClipboard text={url}>
            <div>
                <button
                    onClick={copyHandler}
                    className='flex items-center justify-center p-1 w-full my-3 rounded-md text-center  bg-white  text-blue-600 hover:bg-blue-600 hover:text-white transition-all ease-in-out'>
                    <IoMdShare className='text-2xl' />
                    اشتراک گذاری
                </button>
                <Toaster />
            </div>
        </CopyToClipboard>
    )
}
export default ShareButton