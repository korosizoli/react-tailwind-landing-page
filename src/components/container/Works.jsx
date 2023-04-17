import React from 'react'
import { 
	SlDiamond,
	SlRocket,
	SlBadge
 } from "react-icons/sl";
import { testimonialItems } from '../../data';

const Works = () => {
  return (
	<>
	 <section id='works' className="section md:px-[1rem]">
		<div 
			className="container bg-gradientBg2 md:rounded-[1.5rem] pt-[90px] pb-[200px] -z-10"
		>

			{/* 
				<<<<<<<<<<<<<<<<<<<< Works / Header >>>>>>>>>>>>>>>>>>>>
			*/}

			<div 
				className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[40px] px-[1rem] xl:px-[40px]"
			>
				<div className='text-center xl:text-left md:col-span-3 xl:col-span-1'>
					<h2>
						We are proud of our works
					</h2>

					<p className='bigger-text'>
						We bring solutions to make life easier for our customers.
					</p>
				</div>

				{/* 
					<<<<<<<<<<<<<<<<<<<< Works / Stats >>>>>>>>>>>>>>>>>>>>
				*/}

				<div 
					className='flex flex-col gap-[10px] items-center justify-start'
				>
					<SlDiamond 
						size={50} 
						className='text-primary mb-[5px]'
					/>

					<h2 className='py-0 my-0'>
						1000+
					</h2>

					<p>
						Completed Projects
					</p>
				</div>

				<div 
					className='flex flex-col gap-[10px] items-center justify-start'
				>
					<SlRocket 
						size={50} 
						className='text-tertiary mb-[5px]'
					/>

					<h2 className='py-0 my-0'>
						4x
					</h2>

					<p>
						Revenue Growth
					</p>
				</div>

				<div 
					className='flex flex-col gap-[10px] items-center justify-start'
				>
					<SlBadge 
						size={50} 
						className='text-secondary mb-[5px]'
					/>

					<h2 className='py-0 my-0'>
						100%
					</h2>

					<p>
						Customer Satisfaction
					</p>
				</div>
				
			</div>

		</div>
	 </section>

	{/* 
		<<<<<<<<<<<<<<<<<<<< Testimonials >>>>>>>>>>>>>>>>>>>>
	*/}

	 <div className="container">
		<div
			className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px] px-[1rem] xl:px-[40px] -mt-[140px] z-10"
		>

			{testimonialItems.map(({id, quote, name, title}) => {
				return (
					<div 
						key={id}
						className='bg-white rounded-[.5rem] p-[40px] 	shadow-btn overflow-hidden quote-card'
					>
						<p className='mb-[20px]'>
							{quote}
						</p>
					
						<h3 className='mb-[5px]'>
							{name}
						</h3>
					
						<p>
							{title}
						</p>
					</div>
				)
			})}
		
		</div>
	 </div>
	 </>
  )
}

export default Works