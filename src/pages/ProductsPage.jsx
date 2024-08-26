import { useState } from 'react';
import { useProducts } from '../context/productContext';
import ProductsList from '../components/ProductsList';

export default function ProductsPage() {
	const { products } = useProducts();
	const [searchProduct, setSearchProduct] = useState('');
	// const [searchCategory, setSearchCategory] = useState('');

	const handleSearch = (e) => {
		setSearchProduct(e.target.value);
	};

	// const handleCategoryChange = (e) => {
	// 	setSearchCategory(e.target.value);
	// };

	const filteredProducts = products.filter((product) => {
		const matchesProduct = product?.name
			?.toLowerCase()
			?.includes(searchProduct.toLowerCase());
		// const matchesCategory = searchCategory
		// 	? product?.category?.toLowerCase() === searchCategory?.toLowerCase()
		// 	: true;
		// return matchesProduct && matchesCategory;
		return matchesProduct;
	});

	return (
		<section className="products-page">
			<h2 className="products-page__title">Products</h2>
			<div className="search-container">
				<input
					type="text"
					className="search-input w-full p-2 rounded border border-gray-300"
					placeholder="Search for products..."
					value={searchProduct}
					onChange={handleSearch}
				/>
				{/* <div className="flex flex-col gap-2">
					<label htmlFor="category" className="mr-2">
						Filter by Category:
					</label>
					<select
						id="category"
						value={searchCategory}
						onChange={handleCategoryChange}
						className="search-input w-full p-2 rounded border border-gray-300"
					>
						<option value="">All Categories</option>
						{[
							...new Set(
								products.map((product) => product?.category?.toLowerCase())
							),
						].map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div> */}
			</div>

			<ProductsList products={filteredProducts} />
		</section>
	);
}
