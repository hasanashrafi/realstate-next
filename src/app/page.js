
import HomePage from '@/components/template/HomePage';
import dotenv from 'dotenv';
dotenv.config();

export default function Home() {
  return (
    <main className=" h-full mx-auto w-full p-4">    
        <HomePage/>

    </main>
  );
}
