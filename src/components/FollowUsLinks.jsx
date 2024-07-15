const FollowUsLinks = ({ links }) => {
	return (
		<ul className="text-gray-400">
			{links.map((link, index) => (
				<li className="mt-2" key={index}>
					<a href={link.url} className="hover:text-gray-300">
						{link.label}
					</a>
				</li>
			))}
		</ul>
	);
};

export default FollowUsLinks;
