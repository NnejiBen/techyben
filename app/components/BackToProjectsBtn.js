import Link from 'next/link'

const BackToProjectsBtnOutline = () => {
  return (
    <Link href="/portfolio">
      <button className="bg-[#FB8500] hover:bg-[#FA9D35] text-[#00162B] text-lg font-medium py-[14.5px] px-8 rounded-3xl">BACK TO PROJECTS</button>
    </Link>
  )
}

export default BackToProjectsBtnOutline