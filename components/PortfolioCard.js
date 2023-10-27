import Link from 'next/link';
import ReadMoreBtnOutline from './ReadMoreBtnOutline';

function PortfolioCard({ number, title, content, linkHref, }) {
  return (
    <div className="bg-[#C0D6DF] rounded-3xl">
        {/* Card dots */}
        <div className="flex gap-2 px-8 py-3">
            <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
            <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
            <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
        </div>
        <hr className="border-0 h-[1px] bg-black" />
        {/* Heading and number */}
        <div className="flex items-center gap-6 md:gap-0 px-8 lg:px-4 py-12 lg:py-6">
            <div>
                <p className="text-[#00162B] text-5xl font-bold md:hidden">{number}</p>
            </div>
            <div>
                <h3 className="text-[#00162B] text-[2rem] lg:text-[1.5rem] leading-none">{title}</h3>
            </div>
      </div>
      <div className="text-[#1E1E1E] text-xl px-12 lg:px-6 mb-8 lg:mb-6">
            <p>{content}</p>
      </div>
      {/* Button */}
      <div className="flex justify-end px-6 pb-8">
            <Link href={linkHref}><ReadMoreBtnOutline /></Link>
      </div>
    </div>
  );
}

export default PortfolioCard;