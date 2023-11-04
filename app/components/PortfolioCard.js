import Link from 'next/link';
import Image from 'next/image';
import ViewProjectBtnOutline from './ViewProjectBtnOutline';

function PortfolioCard({ number, title, imgSrc, imgAlt, btnLinkHref }) {
  return (
    <>
      <div className="bg-[#C0D6DF] rounded-3xl">
          {/* Card dots */}
          <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
          </div>
          <hr className="border-0 h-[1px] bg-black" />
          {/* Heading and number */}
          <div className="flex items-center gap-6 px-8 lg:px-4 py-12 lg:py-6 sm:py-8">
              <div>
                  <p className="text-[#00162B] text-5xl font-bold">{number}</p>
              </div>
              <div>
                  <h3 className="text-[#00162B] text-[2rem] lg:text-[1.5rem] leading-none">{title}</h3>
              </div>
        </div>
        <div className="w-full mb-10">
              <Image src={imgSrc} alt={imgAlt} className="object-cover" />
        </div>
        {/* Button */}
        <div className="flex justify-end sm:justify-start px-6 pb-8">
              <Link href={btnLinkHref}><ViewProjectBtnOutline /></Link>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;