
import dotenv from 'dotenv';
dotenv.config();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto w-full p-4">
      <div className="max-w-5xl rounded-md mx-auto h-screen w-full  font-mono text-sm ">
       
       <div className="flex font-Dana flex-wrap w-[90%] mx-auto gap-x-4 justify-center  items-center p-2   ">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-1/4 font-DanaMedium p-2 border border-violet-300 focus:border-violet-600 rounded-md outline-none"
          />
          <div className="flex flex-wrap justify-center space-x-4 gap-x-1 ">
            <select className="p-2 outline-none  bg-violet-600 text-white rounded-md cursor-pointer">
              <option value="" className='rounded-md bg-violet-900'>انتخاب ملک</option>
              <option value="house" className='rounded-md bg-violet-900'>خانه</option>
              <option value="apartment" className='rounded-md bg-violet-900'>آپارتمان</option>
              <option value="land" className='rounded-md bg-violet-900'>ویلا</option>
            </select>
            <select className="p-2 outline-none bg-violet-600 text-white rounded-md cursor-pointer">
              <option value="" className='rounded-md bg-violet-900'>قیمت</option>
              <option value="0-100000" className='rounded-md bg-violet-900'>0 - 100,000</option>
              <option value="100000-300000" className='rounded-md bg-violet-900'>100,000 - 300,000</option>
              <option value="300000-500000" className='rounded-md bg-violet-900'>300,000 - 500,000</option>
            </select>
            <button className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-600">جستجو</button>
          </div>
        </div>
       
        <p className="font-DanaDemiBold text-3xl text-violet-800 p-5">املاک آلفا</p>
        
      </div>
    </main>
  );
}
