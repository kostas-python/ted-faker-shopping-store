import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page1 from "./components/Page1";
import Image1 from "./components/Image1";
import Video from "./components/Video";


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
    <html lang="en">
      <body>
        
        <main>
          <Navbar />
          <Image1/>
          <Video/>
          <Page1 /> 
          
        </main>
        <Footer />
      </body>
    </html>
  );
} 
