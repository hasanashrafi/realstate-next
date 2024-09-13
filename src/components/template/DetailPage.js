import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import ItemList from "../module/ItemList";
import { sp } from "@/utils/replaceNumbers";



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
    const categories = {
        apartment: "آپارتمان",
        villa: "ویلا",
        store: "مغازه",
        office: "دفتر",
    }

    const icons = {
        villa: <GiVillage />,
        apartment: <MdApartment />,
        office: <RiHomeOfficeFill />,
        store: <FaStoreAlt />,
    }

    return (
        <div className='flex justify-between'>
            {/* main */}
            <div className='flex flex-col gap-y-4 p-4'>
                <p className="">{title}</p>
                <span className=" ">
                    <p className="flex items-center gap-x-2"> <FaMapLocationDot />آدرس</p>
                    {location}
                </span>
                <h3>
                    توضیحات:
                </h3>
                <p>{description}</p>
                <h3>
                    امکانات:
                </h3>
                <ItemList data={amenities} />

                <h3>
                    قوانین:
                </h3>
                <ItemList data={rules} />

            </div>

            {/* left sideBar */}
            <div className=' h-fit p-4 rounded'>
                <div className="flex flex-col items-center gap-y-4">
                    <MdOutlineRealEstateAgent className="text-3xl bg-blue-600 rounded-full w-12 h-12 p-2 " />
                    <p>املاک {realEstate}</p>
                    <span className="flex items-center gap-x-1">
                        <MdOutlinePhoneInTalk className="text-xl" />
                        {phone}
                    </span>
                </div>

                <div className="my-5">
                    <p className="flex items-center gap-x-2">
                        {icons[category]}
                       <span className="text-2xl"> {categories[category]}</span>
                    </p>
                    <p className="flex items-center gap-x-2 ">
                    <FaHandHoldingUsd className="size-6 "/>
                    {sp(price)}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default DetailPage