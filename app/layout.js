// import { Oswald } from 'next/font/google'
import './globals.css'

// const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Benjamin Nneji | Frontend Web Developer',
  description: 'Frontend Web Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={oswald.className}>{children}</body>
//     </html>
//   )
// }
