import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxery dark AirBNB',
  description: 'Experience the elegance of technology with luxery dark AirBNB',
  keywords: ['luxery dark AirBNB', 'technology', 'dark design', 'high-end rentals'],
  authors: [{ name: 'luxery dark AirBNB' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function