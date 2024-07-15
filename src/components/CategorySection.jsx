import Product from '../components/Product';

const CategorySection = ({ title, products }) => {
	return (
		<div className="category-section">
			<h2 className="category-section__title">{title}</h2>
			<div className="category-section__list">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CategorySection;
