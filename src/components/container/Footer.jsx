import React from 'react'
import logo from '../../assets/logo.png'
import { 
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube 
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
		<section className="section pb-[90px]">
			<div className="container">

				<div 
					className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[40px]"
				>

					{/* 
						<<<<<<<<<< Col 1 >>>>>>>>>>
					*/}

					<div>
						<Link 
							to="home" 
							smooth={true} 
							duration={500} 
							offset={-90}
						>
							<img
								src={logo}
								alt="logo"
								className="max-w-[150px] mb-[20px] cursor-pointer"
							/>
						</Link>
						

						<p className='mb-[20px]'>
							© 2023 Zestify. <br />
							All rights reserved.
						</p>

						<div className='flex gap-[8px]'>

							<a 
								href="https://www.facebook.com/"
								target='_blank'
								className='grid w-[32px] h-[32px] place-content-center bg-white text-facebook rounded-[.25rem] hover:bg-facebook hover:text-white duration-300 opacity-90 hover:translate-y-[-4px] hover:shadow-btn'
							>
								<FaFacebookF size={16} />
							</a>

							<a 
								href="https://twitter.com/home"
								target='_blank'
								className='grid w-[32px] h-[32px] place-content-center bg-white text-twitter rounded-[.25rem] hover:bg-twitter hover:text-white duration-300 opacity-90 hover:translate-y-[-4px] hover:shadow-btn'
							>
								<FaTwitter size={16} />
							</a>

							<a 
								href="https://www.instagram.com/"
								target='_blank'
								className='grid w-[32px] h-[32px] place-content-center bg-white text-instagram rounded-[.25rem] hover:bg-instagram hover:text-white duration-300 opacity-90 hover:translate-y-[-4px] hover:shadow-btn'
							>
								<FaInstagram size={16} />
							</a>

							<a 
								href="https://www.youtube.com/"
								target='_blank'
								className='grid w-[32px] h-[32px] place-content-center bg-white text-youtube rounded-[.25rem] hover:bg-youtube hover:text-white duration-300 opacity-90 hover:translate-y-[-4px] hover:shadow-btn'
							>
								<FaYoutube size={16} />
							</a>

						</div>
					</div>

					{/* 
						<<<<<<<<<< Col 2 >>>>>>>>>>
					*/}

					<div>
						<h3 className='text-[20px] mb-[15px]'>
							Get in Touch
						</h3>

						<p className='mb-[15px]'>
							2016 Palm Beach Drive, <br />
							Miami, FL
						</p>

						<a 
							href="mailto:#"
							className='hover:text-tertiary duration-300'
						>
							zestify@email.com
						</a>

						<p>
							904-313-1978
						</p>
					</div>

					{/* 
						<<<<<<<<<< Col 3 >>>>>>>>>>
					*/}

					<div>
						<h3 className='text-[20px] mb-[15px]'>
							Learn More
						</h3>

						<ul>
							<li>
								<a
								href="#"
								className='mb-[10px] hover:text-tertiary duration-300'
								>
									About Us
								</a>
							</li>
							<li>
								<a
								href="#"
								className='mb-[10px] hover:text-tertiary duration-300'
								>
									Our Story
								</a>
							</li>
							<li>
								<a
								href="#"
								className='mb-[10px] hover:text-tertiary duration-300'
								>
									Projects
								</a>
							</li>
							<li>
								<a
								href="#"
								className='mb-[10px] hover:text-tertiary duration-300'
								>
									Terms of Use
								</a>
							</li>
							<li>
								<a
								href="#"
								className='mb-[10px] hover:text-tertiary duration-300'
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* 
						<<<<<<<<<< Col 4 >>>>>>>>>>
					*/}

					<div className='md:col-span-3 xl:col-span-1'>
						<h3 className='text-[20px] mb-[15px]'>
							Our Newsletter
						</h3>

						<p className='mb-[15px]'>
							Subscribe to our newsletter to get our news & deals delivered to you.
						</p>

						<form className='flex '>
							<input 
								type="email" 
								name="" 
								id="" 
								placeholder='Email Address'
								className='py-[12px] px-[20px] min-w-0
								rounded-l-[.5rem] shadow-btn 
								placeholder:text-[14px] text-[14px]
								focus:outline-none focus:ring-1 focus:ring-tertiary focus:invalid:ring-pink-500 invalid:text-pink-600'
							/>
							<input 
								type="submit" 
								value="Join" 
								className='py-[12px] px-[20px] font-medium capitalize rounded-r-[.5rem] gradient-1 text-white duration-300 hover:shadow-btn cursor-pointer'
							/>
						</form>
					</div>

				</div>

			</div>
		</section>
  )
}

export default Footer