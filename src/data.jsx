export const navLinks = [
	{
	  id: 1,
	  href: "home",
	  link: "Home",
	},
	{
	  id: 2,
	  href: "about",
	  link: "About",
	},
	{
	  id: 3,
	  href: "faq",
	  link: "FAQ",
	},
	{
	  id: 4,
	  href: "studies",
	  link: "Studies",
	},
	{
	  id: 5,
	  href: "contact",
	  link: "Contact Us",
	},
 ];

export const featureList = [
	{
		id: 1,
	  	text: "Ut non facilisis tortor. Donec auctor eros quis justo tempor."
	},
	{
		id: 2,
	  	text: "Interdum et malesuada fames ac ante ipsum primis in faucibus."
	},
	{
		id: 3,
	  	text: "Vestibulum vehicula ante vitae sem posuere, at arcu mattis."
	},
	{
		id: 4,
	  	text: "Nullam posuere dolor vitae ligula convallis, ac tincidunt mi finibus."
	},
]

export const aboutList = [
	{
		id: 1,
		title: 'Our Vision',
		text: 'Pellentesque at nisi ut felis fermentum lacinia quis quis nisl. Sed at orci cursus sem viverra euismod gravida.',
	},
	{
		id: 2,
		title: 'Our Mission',
		text: 'Donec varius metus sed quam pulvinar volutpat eget viverra libero. Curabitur justo sapien, rhoncus nec metus.',
	},
	{
		id: 3,
		title: 'Our Values',
		text: 'Maecenas iaculis faucibus leo, vel vulputate quam gravida et. Aenean et mollis tellus. Cras et magna eget risus.',
	},
]


import { 
	SiHtml5, 
	SiCss3,  
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiMui
} from "react-icons/si";

export const featureItems = [
	{
		id: 1,
		icon: <SiHtml5 size={44} className="text-primary" />,
		title: 'HTML',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos eum nemo eveniet quibusdam quae facere est alias quis.'
	},
	{
		id: 2,
		icon: <SiCss3 size={44} className="text-tertiary" />,
		title: 'CSS',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam architecto consectetur officiis exercitationem velit!'
	},
	{
		id: 3,
		icon: <SiJavascript size={44} className="text-secondary"/>,
		title: 'JavaScript',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur laborum nulla aliquam excepturi autem.'
	},
	{
		id: 4,
		icon: <SiReact size={44} className="text-primary"/>,
		title: 'React',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi quod accusantium dolores iste non.'
	},
	{
		id: 5,
		icon: <SiTailwindcss size={44} className="text-tertiary"/>,
		title: 'Tailwind CSS',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum adipisci maiores? Inventore, accusantium.'
	},
	{
		id: 6,
		icon: <SiMui size={44} className="text-secondary" />,
		title: 'Material UI',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio provident perspiciatis rerum at unde.'
	},
]

export const accordionItems = [
	{
		id: 1,
		question: 'Ut non facilisis tortor?',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut totam non suscipit. Natus maiores eos.'
	},
	{
		id: 2,
		question: 'Interdum et malesuada fames?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam minus fugit optio quis omnis expedita!'
	},
	{
		id: 3,
		question: 'Vestibulum vehicula ante vitae?',
		answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum, amet quo maxime at aliquam.'
	},
]

export const testimonialItems = [
	{
		id: 1,
		quote: 'Magni, quo ex? Labore expedita iste quas tenetur consectetur fugit quia! Modi maxime pariatur asperiores.',
		name: 'Jack Ryan',
		title: 'Financial Analyst',
	},
	{
		id: 2,
		quote: 'Vel, corporis veritatis? Aliquam maiores dolorum similique iste vitae veniam impedit atque, consectetur odit!',
		name: 'Jackson Lamb',
		title: 'Marketing Specialist',
	},
	{
		id: 3,
		quote: 'Possimus laboriosam, earum rerum dolorum quas sit. Enim quos quidem molestias, repellendus rerum.',
		name: 'Harry Bosch',
		title: 'Sales Manager',
	},
	{
		id: 4,
		quote: 'Non molestiae consectetur quasi repellendus nulla dolore, quam ab laudantium voluptas fugiat odit.',
		name: 'Cara Dutton',
		title: 'Marketing Manager',
	},
]

export const studiesItems = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		title: 'Strategies for Succeeding in Business',
		date: '12 Apr 2023',
		tag: 'Coding'
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
		title: "A Beginner's Guide to Starting a Business",
		date: '10 Apr 2023',
		tag: 'Workspace'
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		title: "Top 10 Tips for Growing Your Business",
		date: '5 Apr 2023',
		tag: 'Business Tips'
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		title: 'Maximizing Your Business Potential',
		date: '2 Apr 2023',
		tag: 'Meeting'
	},
]