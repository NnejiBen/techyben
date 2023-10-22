import Link from 'next/link'
import Image from 'next/image'
import htmlIcon from "../public/images/html.png"
import cssIcon from "../public/images/css.png"
import javaScriptIcon from "../public/images/javascript.png"
import reactIcon from "../public/images/react.png"
import nextJsIcon from "../public/images/nextjs.png"
import tailwindIcon from "../public/images/tailwind.png"
import wordPressIcon from "../public/images/wordpress.png"

const MySkills = () => {
  return (
    <div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={htmlIcon}/>
                </div>
                <div>
                    <p>HTML</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={cssIcon}/>
                </div>
                <div>
                    <p>CSS</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={javaScriptIcon}/>
                </div>
                <div>
                    <p>JavaScript</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={reactIcon}/>
                </div>
                <div>
                    <p>React</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={nextJsIcon}/>
                </div>
                <div>
                    <p>NextJS</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={tailwindIcon}/>
                </div>
                <div>
                    <p>Tailwind</p>
                </div>
            </div>
            <div className='my-skills--right flex items-center'>
                <Link href="/portfolio">SEE PROJECTS</Link>
            </div>
        </div>

        <div className='my-skills--item flex justify-between'>
            <div className='my-skills--left flex items-center'>
                <div className='my-skills--img-cont'>
                    <Image src={wordPressIcon}/>
                </div>
                <div>
                    <p>WordPress</p>
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