import Link from 'next/link';
import Image from 'next/image';

function PortfolioCard({ number, title, imgSrc, imgAlt, btnLinkHref }) {
  return (
    <>
      <div className="relative bg-[#C0D6DF] rounded-3xl">
          {/* Card dots */}
          <div className="flex justify-between">
              <div className="flex gap-2 px-8 py-3">
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
              </div>
          </div>
          <hr className="border-0 h-[1px] bg-black" />
          {/* Heading and number */}
          <div className="flex items-center gap-6 px-8 lg:px-4 py-6">
              <div>
                  <p className="text-[#00162B] text-5xl font-bold">{number}</p>
              </div>
              <div>
                  <h3 className="text-[#00162B] text-[2rem] lg:text-[1.5rem] leading-none">{title}</h3>
              </div>
        </div>
        <div className="w-full">
              <Image src={imgSrc} alt={imgAlt} className="object-cover rounded-b-3xl" />
        </div>
        {/* Button */}
        <div className='flex items-center justify-end absolute bottom-0 w-full rounded-b-3xl bg-[#00162B] bg-opacity-70 text-[#F9F8F8] hover:text-[#FB8500] text-lg md:text-base font-medium px-8 py-3'>
          <Link href={btnLinkHref}>VIEW PROJECT</Link>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;