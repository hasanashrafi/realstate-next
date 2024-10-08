import dotenv from 'dotenv';
dotenv.config();

import NexAuthProvider from '@/providers/NextAuthProvider';
import Layout from "@/components/layout/Layout";
import "./globals.css";



export const metadata = {
  title: " گونش ملک",
  description: "سایت املاک گونش",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[url('/images/bg-7.jpg')] bg-cover backdrop-blur-md">
        <NexAuthProvider>
          <Layout>
            {children}
          </Layout>
        </NexAuthProvider>
      </body>
    </html>
  );
}
