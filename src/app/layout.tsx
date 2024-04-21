import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ted-Faker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en" className="h-full bg-white">
      
      <body className="h-full">
      {children}
      
      </body>
    </html>
  );
} 
