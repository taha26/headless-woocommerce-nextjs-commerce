"use client"
import { useState } from "react";
import CartSlider from "@/components/Cart/CartSlider";
import Header from '@/components/Header/Header'
import './globals.css'

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

  return (
    <html lang="en">
      <body className={''}>
        <Header isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
        {children}
        <div className="container mx-auto p-4">
          <CartSlider product={product} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
        </div>
      </body>
    </html>
  )
}
