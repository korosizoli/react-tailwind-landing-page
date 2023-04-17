import React from 'react'
import { featureItems } from '../../data';

const Features = () => {
  return (
	 <section className='pt-[50px]'>
		<div className="container">

			<h6 className='text-center'>
				our features
			</h6>

			<h2 
				className='section-header'
			>
				The service we offer is specifically designed to meet <span className="highlight">your</span> needs.
			</h2>

			<div 
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'
			>

				{featureItems.map(({id, icon, title, text}) => {
					return (
						<div 
							key={id} 
							className='flex gap-[15px]'
						>
							<div>
								{icon}
							</div>

							<div>
								<h4 className='mb-[5px]'>
									{title}
								</h4>

								<p>
									{text}
								</p>
							</div>
						</div>

					)
				})}

			</div>
		</div>
	 </section>
  )
}

export default Features