import dotenv from 'dotenv';
dotenv.config();


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mx-auto w-full p-4">
     
      <div className=" max-w-5xl  rounded-md mx-auto h-screen w-full  bg-blue-200 font-mono text-sm shadow-dark">
       <p className="font-DanaDemiBold text-3xl text-violet-800 p-5">املاک آلفا</p>
      </div>
      
    </main>
  );
}
