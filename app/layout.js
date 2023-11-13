import './globals.css'
import MobileNavMenu from '@/app/components/MobileNavMenu'
import Footer from '@/app/components/Footer'
import LinkPreview from "./components/LinkPreview"

export const metadata = {
  title: 'Benjamin Nneji | Frontend Web Developer',
  description: 'Frontend Web Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-oswald'>
        <MobileNavMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}