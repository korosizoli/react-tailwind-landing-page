import React from 'react'
import banner from '../../assets/hero-banner.png'


const Hero = () => {
  return (
	 <div id='home' className='hero'>
		<div
			className="container py-[90px] bg-gradientBg1 md:rounded-[1.5rem]"
		>
			<div
				className='grid lg:grid-cols-hero gap-[40px] px-[1rem] xl:px-[40px]'
			>

				{/* 
					 <<<<<<<<<<<<<<<<<<<< Hero Content >>>>>>>>>>>>>>>>>>>>
				*/}

				<div
					className='my-auto text-center lg:text-left'
				>
					<h1 className='pb-[20px]'>
						Networking <span className='highlight'>solutions</span> for worldwide communication
					</h1>

					<p className='bigger-text pb-[35px]'>
						We're a company that focuses on establishing long-term relationships with customers.
					</p>


					<a href="#">
						<button className='btn btn-primary'>
								Explore now
						</button>
					</a>
				</div>

				{/* 
					 <<<<<<<<<<<<<<<<<<<< Hero Banner >>>>>>>>>>>>>>>>>>>>
				*/}

				<div className='hidden lg:block'>
					<img
						className='mx-auto mb-[-160px] max-h-[600px]'
						src={banner}
						alt=""
					/>
				</div>

			</div>

		</div>
	</div>
  )
}

export default Hero