import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";


import ItemList from "../module/ItemList";
import { sp } from "@/utils/replaceNumbers";
import ShareButton from "../module/ShareButton";
import {icons} from "@/constants/icons";
import { categories } from "@/constants/strings";



function DetailPage({ data: {
    title,
    description,
    amenities,
    location,
    rules,
    realEstate,
    phone,
    category,
    constructionDate,
    price
} }) {
   

  

    return (
        <div className='flex justify-between  max-w-7xl mx-auto bg-backdrop-blur-xl border-white border rounded-md'>
            {/* main */}
            <div className='w-full flex flex-col gap-y-4 p-4'>
                <p className="text-2xl font-DanaDemiBold">
                    {title}
                </p>

                <p className="flex items-center gap-x-2">
                    <FaMapLocationDot />
                    {location}
                </p>

                <h3 className="mt-4 border-b-2 p-2  w-full">
                    توضیحات:
                </h3>
                <p>{description}</p>
                <h3 className="border-b-2 p-2  w-full">
                    امکانات:
                </h3>
                <ItemList data={amenities} />

                <h3 className="border-b-2 p-2  w-full">
                    قوانین:
                </h3>
                <ItemList data={rules} />

            </div>

            {/* left sideBar */}
            <div className=' w-64 h-fit p-4 rounded'>
                <div className="flex flex-col items-center p-2 text-blue-600 bg-white rounded-md gap-y-4">
                    <MdOutlineRealEstateAgent className="text-3xl border border-blue-600 rounded-full w-12 h-12 p-2 " />
                    <p>املاک {realEstate}</p>
                    <span className="flex items-center gap-x-1">
                        <MdOutlinePhoneInTalk className="text-xl" />
                        {phone}
                    </span>
                </div>

                <div className=" flex flex-col p-2 bg-white text-blue-600 rounded-md gap-y-3 my-5">
                    <p className="flex items-center gap-x-2">
                        {icons[category]}
                        <span className=""> {categories[category]}</span>
                    </p>
                    <p className="flex  gap-x-2 ">
                        <FaHandHoldingUsd className=" " />
                        {sp(price)}
                    </p>
                    <p className="flex  gap-x-2">
                        <BsCalendar2Date />
                        {new Date(constructionDate).toLocaleDateString("fa-IR")}
                    </p>

                </div>
                <div className="">
                    <ShareButton /></div>

            </div>
        </div>
    )
}

export default DetailPage