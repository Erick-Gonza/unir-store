import FooterSection from './FooterSection';
import FooterLinks from './FooterLinks';
import FollowUsLinks from './FollowUsLinks';

export default function Footer() {
	const quickLinks = [
		{ label: 'Home', url: '/' },
		{ label: 'Products', url: '/products' },
		{ label: 'Cart', url: '/cart' },
		{ label: 'Returns', url: '/returns' },
	];

	const followUsLinks = [
		{ label: 'Facebook', url: '#' },
		{ label: 'Twitter', url: '#' },
		{ label: 'Instagram', url: '#' },
		{ label: 'LinkedIn', url: '#' },
	];

	return (
		<footer className="footer">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
				<FooterSection>
					<h4 className="text-2xl font-bold mb-2">Store</h4>
					<p className="text-gray-400">
						© {new Date().getFullYear()} Store. All rights reserved.
					</p>
				</FooterSection>
				<FooterSection title="Quick Links">
					<FooterLinks links={quickLinks} />
				</FooterSection>
				<FooterSection title="Follow Us">
					<FollowUsLinks links={followUsLinks} />
				</FooterSection>
			</div>
		</footer>
	);
}
