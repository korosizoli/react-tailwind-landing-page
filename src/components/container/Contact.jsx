import React from 'react'
import banner from '../../assets/contact.png'
import { 
	BsPinMap,
	BsPhone,
	BsEnvelope
 } from "react-icons/bs";

const Contact = () => {
  return (
	 <section id='contact' className="section">
		<div className="container">

			<div 
				className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
			>
				{/* 
					<<<<<<<<<<<<<<<<<<<< Contact / Banner >>>>>>>>>>>>>>>>>>>>
				*/}

				<div
					className='my-auto'
				>
					<img 
						src={banner} 
						alt="" 
						className='max-h-[400px] lg:max-h-full mx-auto'
					/>
				</div>

				{/* 
					<<<<<<<<<<<<<<<<<<<< Contact / Content >>>>>>>>>>>>>>>>>>>>
				*/}

				<div className='my-auto'>

					<h6>
						contact us
					</h6>

					<h2 className='mb-[40px]'>
						Got any <span className="highlight">questions</span>? Don't hesitate to get in touch.
					</h2>

					<div className='flex flex-col gap-[30px]'>
						<div className='flex gap-[15px]'>
							<BsPinMap size={32} className='text-primary'/>
							<div>
								<h3>
									Address
								</h3>

								<p>
									2016 Palm Beach Drive, Miami, FL	
								</p>
							</div>
						</div>

						<div className='flex gap-[15px]'>
							<BsPhone size={32} className='text-tertiary'/>
							<div>
								<h3>
									Phone
								</h3>

								<p>
									904-313-1978
								</p>
							</div>
						</div>

						<div className='flex gap-[15px]'>
							<BsEnvelope size={32} className='text-secondary'/>
							<div>
								<h3>
									E-mail
								</h3>

								<a 
									href="mailto:#"
									className='hover:text-tertiary duration-300'
								>
									zestify@email.com
								</a>
							</div>
						</div>

					</div>

				</div>

			</div>

		</div>
	 </section>
  )
}

export default Contact