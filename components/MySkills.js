import Link from 'next/link'
import Image from 'next/image'
import htmlIcon from "../public/images/html.png"
import cssIcon from "../public/images/css.png"
import javaScriptIcon from "../public/images/javascript.png"
import reactIcon from "../public/images/react.png"
import nextJsIcon from "../public/images/next-js.png"
import tailwindIcon from "../public/images/tailwind.png"
import wordPressIcon from "../public/images/wordpress.png"

const MySkills = () => {
  return (
    <div>
        {/* Skill item */}
        <div className='border-b-2 border-t-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={htmlIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>HTML</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={cssIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>CSS</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={javaScriptIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>JavaScript</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={reactIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>React</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={nextJsIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>NextJS</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={tailwindIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>Tailwind</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        {/* Skill item */}
        <div className='border-b-2 border-[#F9F8F8] py-[30px] flex justify-between'>
            <div className='flex items-center gap-5'>
                <div className='min-h-[4.5em] flex items-center'>
                    <Image src={wordPressIcon}/>
                </div>
                <div>
                    <p className='text-[40px] text-[#F9F8F8]'>WordPress</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>
    </div>
  )
}

export default MySkills