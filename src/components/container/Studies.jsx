import React from 'react'
import Slider from "react-slick";
import { BsCalendar3, BsNewspaper } from "react-icons/bs";
import { studiesItems } from '../../data';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Studies = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
		 ]
	 };

  	return (
		<section id='studies' className="section">
			<div className="container">

				<div className='section-header'>
					<h6>
						Case studies
					</h6>
					<h2>
						Check out some of our <span className="highlight">awesome</span> projects with creative ideas and great design.
					</h2>
				</div>

					<div>

						{/* 
							<<<<<<<<<<<<<<<<<<<< Carousel >>>>>>>>>>>>>>>>>>>>
						*/}

						<Slider {...settings}>

							{studiesItems.map(({id, img, title, date, tag}) => {
							return (		


							<div 
								key={id}
								className='p-[1rem]'
							>
								{/* 
									<<<<<<<<<<<<<<< Card banner >>>>>>>>>>>>>>>
								*/}

								<div 
									className='group relative aspect-[16/9] rounded-[1rem] overflow-hidden mb-[15px] after:absolute after:content-[""] after:inset-0 after:bg-[#191f29]/50 after:z-0 after:opacity-0 hover:after:opacity-100 after:duration-500'
								>
									<img
										className='w-full h-full object-cover group-hover:scale-110 duration-500'
										src={img}
										alt=""
									/>

									<a 
										href="#"
										className='absolute top-[50%] left-1/2 translate-y-[-100%] translate-x-[-50%] text-white font-medium z-10 opacity-0  group-hover:translate-y-[-50%] group-hover:opacity-100 duration-500'
									>
										Read More
									</a>
								</div>

								{/* 
									<<<<<<<<<<<<<<< Card title >>>>>>>>>>>>>>>
								*/}

								<h3 className='mb-[15px]'>
									<a 
										href="#"
										className='hover:text-tertiary duration-300'
									>
										{title}
									</a>
								</h3>

								{/* 
									<<<<<<<<<<<<<<< date / tag >>>>>>>>>>>>>>>
								*/}

								<div className='flex gap-5 text-[15px]'>
									<div className='flex items-center text-neutralLight'>
										<BsCalendar3 size={15} />
										<p className='pl-[5px]'>
											{date}
										</p>
									</div>

									<a 
										href='#'
										className='flex items-center text-neutralLight hover:text-tertiary duration-300'>
										<BsNewspaper size={15} />
										<p className='pl-[5px]'>
											{tag}
										</p>
									</a>
								</div>
							</div>

							)
							})}
							
						</Slider>
					</div>

			</div>
		</section>
  )
}

export default Studies