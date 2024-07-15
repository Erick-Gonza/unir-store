import Product from '../components/Product';

const CategorySection = ({ title, products }) => {
	return (
		<div className="category-section">
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className="products-list">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CategorySection;
