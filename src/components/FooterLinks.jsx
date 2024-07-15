import { Link } from 'react-router-dom';

const FooterLinks = ({ links }) => {
	return (
		<ul className="text-gray-400">
			{links.map((link, index) => (
				<li className="mt-2" key={index}>
					<Link to={link.url} className="hover:text-gray-300">
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterLinks;
