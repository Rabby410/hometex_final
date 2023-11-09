import '../styles/globals.css'
import Layout from '@/components/layout'
import { CartProvider } from "@/context/CartContext";
import { WishListProvider } from '@/context/WishListContext';

import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  // Set a timeout to simulate a delay before loading the pag

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <img src="/images/hometex-logo.png" alt="Logo" className="w-32 h-32" />
      </div>
    );
  }
  return (
    <CartProvider>
      <WishListProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WishListProvider>
    </CartProvider>

  )
}
