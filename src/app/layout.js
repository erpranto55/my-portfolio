import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Eyamin Rahman Pranto",
  description: "Full Stack Developer & Competitive Programmer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-neon-blue/30 overflow-x-hidden">
        <LenisProvider>
          <Toaster 
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: '#0a0a0c',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
          <div className="noise-overlay" />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}


