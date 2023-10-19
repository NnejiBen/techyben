import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Benjamin Nneji | Software Developer',
  description: 'Benjamin Nneji is a Frontend Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
