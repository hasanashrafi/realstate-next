import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mx-auto w-full ">
      <Header/>
      <div className=" max-w-5xl my-5 rounded-md mx-auto h-screen w-full  bg-blue-200 font-mono text-sm ">
       <p className="font-DanaDemiBold text-3xl text-violet-800 p-5">املاک آلفا</p>
      </div>
      <Footer/>
    </main>
  );
}
