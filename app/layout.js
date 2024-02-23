import './globals.css'
import MobileNavMenu from '@/app/components/MobileNavMenu'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Benjamin Nneji Portfolio | Frontend Web Developer',
  description: 'Committed to excellence and customer satisfaction. I build modern, elegant and functional websites.',
  ogTitle: 'Benjamin Nneji Portfolio | Frontend Web Developer',
  ogDescription: 'Committed to excellence and customer satisfaction. I build modern, elegant and functional websites.',
  ogImage: 'https://i.postimg.cc/TPxhNhww/joygirl-social-preview.webp',
  ogUrl: 'https://techyben.com/',
  ogType: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-oswald'>

        {/* Open Graph tags for social media */}
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content={metadata.ogType} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://techyben.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your-facebook-app-id" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ben_nneji" />
        <meta name="twitter:title" content="Benjamin Nneji Portfolio | Frontend Web Developer" />
        <meta name="twitter:description" content="Committed to excellence and customer satisfaction. I build modern, elegant and functional websites." />
        <meta name="twitter:image" content="https://i.postimg.cc/TPxhNhww/joygirl-social-preview.webp" />

        <MobileNavMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}