"use client"
import { useState } from "react";
import CartSlider from "@/components/Cart/CartSlider";
import Header from '@/components/Header/Header'
import './globals.css'
import WishList from "@/components/WishList/WishList";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWLSidebarOpen, setIsWLSidebarOpen] = useState(false);
  const [wList, setWList] = useState([{
    id:0,
    name: '',
    price: 0
  }]);

  const product = [
    {
      id: 1,
      name: 'Example Product',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Example Product',
      price: 9.99,
    },
    {
      id: 3,
      name: 'Example Product',
      price: 9.99,
    },
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleWLSidebarToggle = () => {
    setIsWLSidebarOpen(!isWLSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={''}>
        <Header isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} wList={wList} handleWLSidebarToggle={handleWLSidebarToggle} />
        {children}
        <div className="container mx-auto p-4">
          <CartSlider product={product} wList={wList} setWList={setWList} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} setIsWLSidebarOpen={setIsWLSidebarOpen}/>
          <WishList product={product} wList={wList} setWList={setWList}  setIsWLSidebarOpen={setIsWLSidebarOpen} isWLSidebarOpen={isWLSidebarOpen} handleWLSidebarToggle={handleWLSidebarToggle} />
        </div>
      </body>
    </html>
  )
}
