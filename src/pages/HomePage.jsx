import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';
import { useProducts } from '../context/productContext';

export default function HomePage() {
	const { products } = useProducts();
	const [categories, setCategories] = useState({
		category1: [],
		category2: [],
		category3: [],
	});

	useEffect(() => {
		// Filtra productos para cada categoría. Ajusta los nombres según tus categorías reales.
		setCategories({
			category1: products.filter(
				(product) => product.category.toLowerCase() === `men's clothing`
			),
			category2: products.filter(
				(product) => product.category.toLowerCase() === 'jewelery'
			),
			category3: products.filter(
				(product) => product.category.toLowerCase() === 'electronics'
			),
		});
	}, [products]);

	return (
		<section className="home-page">
			<Hero />
			<div className="category-section">
				<h2>Men&#39;s Clothing</h2>
				<div className="products-list">
					{categories.category1.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</div>
			<div className="category-section">
				<h2>Jewelery</h2>
				<div className="products-list">
					{categories.category2.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</div>
			<div className="category-section">
				<h2>Electronics</h2>
				<div className="products-list">
					{categories.category3.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
