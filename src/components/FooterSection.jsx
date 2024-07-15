const FooterSection = ({ title, children }) => {
	return (
		<div className="mb-6 lg:mb-0 lg:mr-4">
			<h4 className="text-xl font-semibold mb-2">{title}</h4>
			{children}
		</div>
	);
};

export default FooterSection;
