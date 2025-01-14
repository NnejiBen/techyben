import htmlIcon from "@/public/images/html.svg"
import cssIcon from "@/public/images/css.svg"
import javaScriptIcon from "@/public/images/javascript.svg"
import reactIcon from "@/public/images/react.svg"
import nextJsIcon from "@/public/images/next-js.svg"
import tailwindIcon from "@/public/images/tailwind.svg"
import wordPressIcon from "@/public/images/wordpress.svg"
import MySkillItem from './MySkillItem'

const MySkills = () => {
  return (
    <div className='px-[7.5rem] lg:px-[4em] md:px-[1.25em]'>
        <hr className="border-0 h-[2px] bg-[#F9F8F8]"/>
        {/* Skill item */}
        <MySkillItem 
            icon={htmlIcon}
            title="HTML"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={cssIcon}
            title="CSS"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={javaScriptIcon}
            title="JavaScript"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={reactIcon}
            title="React"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={nextJsIcon}
            title="Next.js"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={tailwindIcon}
            title="Tailwind CSS"
            linkHref="/portfolio"
        />

        {/* Skill item */}
        <MySkillItem 
            icon={wordPressIcon}
            title="WordPress"
            linkHref="/portfolio"
        />
    </div>
  )
}

export default MySkills