import Head from 'next/head';

export default function LinkPreview() {
  const title = "Benjamin Nneji | Frontend Web Developer";
  const description = "Frontend Web Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.";
  const imageUrl = '@/public/images/melody-genie.webp'; // URL of your image
  const url = 'https://www.techyben.com/'; // URL of your page

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={description} />
        <meta property="og:site_name" content="Site Name" />
        <meta property="og:url" content={`${url}`} />  
        <meta name="og:image" property="og:image" content={imageUrl} />  
      </Head>
      ...
    </>
  );
}