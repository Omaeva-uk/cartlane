import { Inter } from 'next/font/google'
import "./globals.css";
import { AosAnimation } from '@/components';
const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: "Cartlane",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AosAnimation />
      <body
        className={`${inter.className} antialiased`}
      >
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  );
}
