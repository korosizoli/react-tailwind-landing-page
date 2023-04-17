import React from 'react'
import { Link } from 'react-scroll'

const NavLink = ({href, link}) => {
  return (
	 <div
	 	className='cursor-pointer text-neutralDark hover:text-tertiary duration-300'
	 >
		<Link
			to={href}
			spy={true}
			smooth={true}
			duration={500}
			className="mx-3 font-medium text-[1rem] capitalize"
		>
			{link}
		</Link>
	 </div>
  )
}

export default NavLink