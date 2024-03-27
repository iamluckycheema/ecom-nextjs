import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E COMMERCE CRAFT',
  description: 'Crafting your shop for you.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright © 2024 - All rights reserved by Lucky Ali</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
