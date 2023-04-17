import React, { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { BiChevronDown } from "react-icons/bi";
import img1 from '../../assets/faq1.jpg'
import img2 from '../../assets/faq2.jpg'
import img3 from '../../assets/faq3.jpg'
import { accordionItems } from "../../data";

const Faq = () => {

	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	}

	return (
		<section id="faq" className='section'>
			<div className="container">

				<div 
					className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
				>

					{/* 
          			<<<<<<<<<<<<<<<<<<<< FAQ / Content >>>>>>>>>>>>>>>>>>>>
        			*/}

					<div className='my-auto order-last lg:order-first'>

						<h6>
							Have Perfect Control
						</h6>

						<h2>
							We bring <span className="highlight">solutions</span> to make life easier for our customers.
						</h2>

						<p className="mb-[30px]">
							Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
						</p>

						{/*
							<<<<<<<<<< Accordion >>>>>>>>>>
						*/}

						{accordionItems.map(({id, question, answer}, i) => {
							return (
								<div 
									key={id}
									className="mb-5 bg-gradientBg1 rounded-[1rem] py-[5px] px-[10px]"
								>

									<div 
										onClick={() => toggle(i)}
										className="cursor-pointer flex justify-between items-center py-3 px-6"
									>
										<h3
											className={`${
												selected === i 
												? "text-tertiary" 
												: ""
											} duration-300`}
										>
											{question}
										</h3>

										<BiChevronDown 
											className={`${
												selected === i 
												? "rotate-180 text-tertiary" 
												: "text-neutralDark"
											} text-xl duration-300`}
										/>
									</div>

									<AnimatePresence>
										{selected === i && (
											<motion.div
											initial={{ height: 0 }}
											animate={{ height: "auto"}}
											exit={{ height: 0 }}
											transition={{ duration: 0.3 }}
											style={{ overflow: "hidden" }}
											>

											<p className="py-4 px-6">
												{answer}
											</p>

											</motion.div>
										)}
									</AnimatePresence>


								</div>
							)
						})}


					</div>

					{/* 
          			<<<<<<<<<<<<<<<<<<<< FAQ / Banner >>>>>>>>>>>>>>>>>>>>
        			*/}

					<div className='my-auto grid grid-cols-1 gap-[20px]'>

						{/*
							<<<<<<<<<< Row 1 >>>>>>>>>>
						 */}

						<div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] items-end'>

							<div className='aspect-[2/1] md:aspect-[5/3] rounded-[1rem] overflow-hidden'>
						 		<img 
									className='w-full h-full object-cover'
									src={img1} 
									alt="image" 
								/>
							</div>

							<div className='aspect-[2/1] md:aspect-[4/3] rounded-[1rem] overflow-hidden'>
						 		<img 
									className='w-full h-full object-cover'
									src={img2} 
									alt="image" 
								/>
							</div>

						</div>

						{/*
							<<<<<<<<<< Row 2 >>>>>>>>>>
						 */}

						<div 
							className='aspect-[2/1] rounded-[1rem] overflow-hidden md:mx-[60px] lg:mx-[40px]'
						>
							<img 
								className='w-full h-full object-cover'
								src={img3} 
								alt="image" 
							/>
						</div>

					</div>

				</div>

			</div>
		</section>
  )
}

export default Faq