import React from 'react'

const Cta = () => {
  return (
	 <section className="section md:px-[1rem]">
		<div className="container py-[90px] bg-gradientBg1 md:rounded-[1.5rem] text-center">

			<div className='lg:max-w-[800px] mx-auto'>
				<h6>
					Join our community
				</h6>

				<h2 className='mb-[40px]'>
					We are trusted by over <span className="highlight">5000+</span> clients. Join them now and grow your business.
				</h2>

				<a href="#">
					<button className='btn btn-primary'>
							Get started
					</button>
				</a>
			</div>

		</div>
	 </section>
  )
}

export default Cta