import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Poppins,
  Cedarville_Cursive,
} from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

// const cursive = Cedarville_Cursive({
//   variable: '--font-cedarville-cursive',
//   subsets: ['latin'],
//   weight: ['400'],
//   display: 'swap',
// })
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HYE GATHER',
  description:
    'HYE GATHER | Find the best vendors for your events, from weddings to corporate parties.',
  keywords: 'event vendors, wedding vendors, corporate event vendors',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between  `}
      >
        <Navbar />

        <div className=" min-h-screen">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
