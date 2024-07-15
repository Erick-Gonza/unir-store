import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { useProducts } from '../context/productContext';
import CategorySection from '../components/CategorySection';

export default function HomePage() {
	const { products } = useProducts();
	const [categories, setCategories] = useState({
		category1: [],
		category2: [],
		category3: [],
	});

	useEffect(() => {
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
			<CategorySection title="Men's Clothing" products={categories.category1} />
			<CategorySection title="Jewelery" products={categories.category2} />
			<CategorySection title="Electronics" products={categories.category3} />
		</section>
	);
}
