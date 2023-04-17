import React, { useCallback, useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { navLinks } from "../../data";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { 
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube 
} from "react-icons/fa";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const toggleMenu = useCallback(() => setToggle(!toggle), [toggle]);

	const [active, setActive] = useState(null);
	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 100);
		};

		window.addEventListener("scroll", scrollActive);

		return () => window.removeEventListener("scroll", scrollActive);
	}, [active]);

	return (
		<>
			<div
				className={`${
						active ? "header-active shadow-nav fixed" 
								 : "absolute"
				} bg-white w-full top-0 left-0 z-[90] will-change-auto`}
			>
				<div 
					className="py-[1.5rem] px-4 container mx-auto flex items-center justify-between transition-all duration-300"
				>
					{/* 
						<<<<<<<<<<<<<<<<<<<< Logo >>>>>>>>>>>>>>>>>>>>
					*/}

					<Link 
						to="home" 
						smooth={true} 
						duration={500} 
						offset={-90}
					>
						<img
							src={logo}
							alt="logo"
							className="max-h-[2rem] cursor-pointer"
						/>
					</Link>

					{/* 
						<<<<<<<<<<<<<<<<<<<< Menu >>>>>>>>>>>>>>>>>>>>
					*/}

					<div 
						className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8"
					>
						{navLinks.map((navLink) => (
							<NavLink key={navLink.id} {...navLink} />
						))}
					</div>

					<div className="flex gap-5 items-center">
						{/*
							<<<<<<<<<<<<<<<<<<<< Social links >>>>>>>>>>>>>>>>>>>>
						*/}

						<div className="hidden sm:flex gap-1 text-[1rem]">
							<a 
								href="https://www.facebook.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-facebook/90 duration-300"
							>
								<FaFacebookF />
							</a>

							<a 
								href="https://twitter.com/home"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-twitter/90 duration-300"
							>
								<FaTwitter />
							</a>

							<a 
								href="https://www.instagram.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-instagram/90 duration-300"
							>
								<FaInstagram />
							</a>

							<a 
								href="https://www.youtube.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-youtube/90 duration-300"
							>
								<FaYoutube />
							</a>
						</div>

						{/*
							<<<<<<<<<<<<<<<<<<<< Menu button >>>>>>>>>>>>>>>>>>>>
						*/}

						<HiMenu
							onClick={toggleMenu}
							className="md:hidden cursor-pointer text-neutralDark hover:text-tertiary duration-300"
							size={20}
						/>
					</div>
				</div>
			</div>

			{/* 
				<<<<<<<<<<<<<<<<<<<< Mobile Menu >>>>>>>>>>>>>>>>>>>>
			*/}

			{toggle && (
				<>
					<motion.div
						initial={{ x: -400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="fixed h-full w-96 top-0 left-0 bg-white flex flex-col pt-[120px] px-10 gap-8 py-8 z-[110]">
						{navLinks.map((navLink) => {
							return (
								<MobileNavLink
									key={navLink.id}
									{...navLink}
									setToggle={setToggle}
								/>
							);
						})}

						{/*
						<<<<<<<<<<<<<<<<<<<< Logo / X button >>>>>>>>>>>>>>>>>>>>
						*/}

						<div className="fixed top-0 left-0 w-96 py-[1.5rem] flex items-center justify-between px-[1rem] shadow-nav">
							<Link to="home" smooth={true} duration={500} offset={-90}>
								<img
									onClick={toggleMenu}
									src={logo}
									alt="logo"
									className="h-[2rem] cursor-pointer"
								/>
							</Link>

							<HiX
								onClick={toggleMenu}
								className="cursor-pointer text-neutralDark hover:text-tertiary duration-300"
								size={20}
							/>
						</div>

						{/*
							<<<<<<<<<<<<<<<<<<<< Social links >>>>>>>>>>>>>>>>>>>>
						*/}

						<div className="fixed left-0 bottom-[1.5rem] w-96 px-10 flex justify-between text-[1rem]">
							<a 
								href="https://www.facebook.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-facebook/90 duration-300"
							>
								<FaFacebookF />
							</a>

							<a 
								href="https://twitter.com/home"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-twitter/90 duration-300"
							>
								<FaTwitter />
							</a>

							<a 
								href="https://www.instagram.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-instagram/90 duration-300"
							>
								<FaInstagram />
							</a>

							<a 
								href="https://www.youtube.com/"
								target="_blank"
								className="p-2 text-neutral/90 hover:text-youtube/90 duration-300"
							>
								<FaYoutube />
							</a>
						</div>
					</motion.div> 

					{/*
						<<<<<<<<<<<<<<<<<<<< Overlay >>>>>>>>>>>>>>>>>>>>
					*/}

				</>
			)}
			<div
				onClick={toggleMenu}
				className="fixed bg-black inset-0 z-[100]"
				style={{
					visibility: toggle ? "visible" : "hidden" ,
					transition: "opacity .4s ease",
					opacity: toggle ? .5 : 0
				}}
			>
			</div>
		</>
	);
};

export default Navbar;