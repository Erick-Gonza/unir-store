import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-white text-2xl font-bold">
					Store
				</Link>
				<div className="block lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none fixed top-4 right-4 rounded-full bg-gray-800 p-1"
					>
						{isOpen ? (
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						)}
					</button>
				</div>
				<div
					className={`fixed top-0 left-0 w-3/4 h-full bg-gray-800 transform ${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					} lg:relative lg:transform-none lg:flex lg:items-center lg:w-auto transition-transform duration-300 ease-in-out z-50`}
				>
					<div className="p-4 lg:p-0 flex flex-col lg:flex-row lg:space-x-4 mt-16 lg:mt-0">
						<Link
							to="/"
							className="block mt-4 lg:mt-0 text-white hover:text-gray-400 px-2"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link
							to="/products"
							className="block mt-4 lg:mt-0 text-white hover:text-gray-400 px-2"
							onClick={() => setIsOpen(false)}
						>
							Products
						</Link>
						<Link
							to="/cart"
							className="block mt-4 lg:mt-0 text-white hover:text-gray-400 px-2"
							onClick={() => setIsOpen(false)}
						>
							Cart
						</Link>
						<Link
							to="/returns"
							className="block mt-4 lg:mt-0 text-white hover:text-gray-400 px-2"
							onClick={() => setIsOpen(false)}
						>
							Returns
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
