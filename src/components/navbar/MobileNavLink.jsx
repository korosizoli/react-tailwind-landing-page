import React from 'react'
import { Link } from 'react-scroll'

const MobileNavLink = ({setToggle, link, href}) => {
  return (
	 <div
	 	className='cursor-pointer font-medium text-neutralDark text-[1rem] hover:text-tertiary duration-300'
	 >
		<Link
			to={href}
			spy={true}
			smooth={true}
			duration={500}
			offset={-50}
			className="capitalize"
			onClick={(toggle) => setToggle(!toggle)}
		>
			{link}
		</Link>
	 </div>
  )
}

export default MobileNavLink