import Product from './Product';

const ProductsList = ({ products }) => {
	return (
		<div className="products-page__list mt-6">
			{products.length > 0 ? (
				products.map((product) => (
					<Product key={product.id} product={product} />
				))
			) : (
				<p className="products-page__notfound">No products found</p>
			)}
		</div>
	);
};

export default ProductsList;
