import Link from 'next/link';
import Image from 'next/image';

function MySkillItem({ icon, title, linkHref, }) {
  return (
    <div className='border-b-2 border-[#F9F8F8] py-[30px] md:py-5 flex justify-between'>
        <div className='flex items-center gap-5'>
            <div className='max-h-[4.5em] flex items-center'>
                <Image src={icon} className='max-w-[3rem]'/>
            </div>
            <div>
                <p className='text-[40px] md:text-3xl text-[#F9F8F8]'>{title}</p>
            </div>
        </div>
        <div className='text-[#FB8500] text-lg md:text-base font-medium flex items-center'>
            <Link href={linkHref}>SEE PROJECTS</Link>
        </div>
    </div>
  );
}

export default MySkillItem;