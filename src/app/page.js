

import dotenv from 'dotenv';
dotenv.config();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto w-full p-4">
      <div className="max-w-5xl rounded-md mx-auto h-screen w-full  font-mono text-sm ">
        <div className="flex gap-x-5 justify-center  items-center p-5   bg-white ">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-1/2 font-DanaMedium p-2 border border-violet-300 focus:border-violet-600 rounded-md outline-none"
          />
          <div className="flex space-x-4 gap-x-1 ">
            <select className="p-2 outline-none  bg-violet-600 text-white rounded-md cursor-pointer">
              <option value="" className='rounded-md bg-violet-900'>Select Type</option>
              <option value="house" className='rounded-md bg-violet-900'>House</option>
              <option value="apartment" className='rounded-md bg-violet-900'>Apartment</option>
              <option value="land" className='rounded-md bg-violet-900'>Land</option>
            </select>
            <select className="p-2 outline-none bg-violet-600 text-white rounded-md cursor-pointer">
              <option value="" className='rounded-md bg-violet-900'>Select Price Range</option>
              <option value="0-100000" className='rounded-md bg-violet-900'>0 - 100,000</option>
              <option value="100000-300000" className='rounded-md bg-violet-900'>100,000 - 300,000</option>
              <option value="300000-500000" className='rounded-md bg-violet-900'>300,000 - 500,000</option>
            </select>
            <button className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-600">Search</button>
          </div>
        </div>
        <p className="font-DanaDemiBold text-3xl text-violet-800 p-5">املاک آلفا</p>
        
      </div>
    </main>
  );
}
