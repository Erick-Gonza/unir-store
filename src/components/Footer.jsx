import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
				<div className="mb-6 lg:mb-0 lg:mr-4">
					<h4 className="text-2xl font-bold mb-2">Store</h4>
					<p className="text-gray-400">
						© {new Date().getFullYear()} Store. All rights reserved.
					</p>
				</div>
				<div className="mb-6 lg:mb-0 lg:mr-4">
					<h4 className="text-xl font-semibold mb-2">Quick Links</h4>
					<ul className="text-gray-400">
						<li className="mt-2">
							<Link to="/" className="hover:text-gray-300">
								Home
							</Link>
						</li>
						<li className="mt-2">
							<Link to="/products" className="hover:text-gray-300">
								Products
							</Link>
						</li>
						<li className="mt-2">
							<Link to="/about" className="hover:text-gray-300">
								About
							</Link>
						</li>
						<li className="mt-2">
							<Link to="/contact" className="hover:text-gray-300">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-xl font-semibold mb-2">Follow Us</h4>
					<ul className="text-gray-400">
						<li className="mt-2">
							<a href="#" className="hover:text-gray-300">
								Facebook
							</a>
						</li>
						<li className="mt-2">
							<a href="#" className="hover:text-gray-300">
								Twitter
							</a>
						</li>
						<li className="mt-2">
							<a href="#" className="hover:text-gray-300">
								Instagram
							</a>
						</li>
						<li className="mt-2">
							<a href="#" className="hover:text-gray-300">
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
