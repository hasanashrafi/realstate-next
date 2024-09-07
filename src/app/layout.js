import dotenv from 'dotenv';
dotenv.config();

import NexAuthProvider from '@/providers/NextAuthProvider';
import Layout from "@/components/layout/Layout";
import "./globals.css";



export const metadata = {
  title: "Alpha RealEstate",
  description: "سایت املاک الفا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="">
        <NexAuthProvider>
          <Layout>
            {children}
          </Layout>
        </NexAuthProvider>
      </body>
    </html>
  );
}
