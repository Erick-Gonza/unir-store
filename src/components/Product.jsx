import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart([...cart, product]);
		console.log('Product added to cart:', product);
	};

	return (
		<div className="product">
			<Link to={`/product/${product.id}`} className="product-link">
				<div className="product-card">
					<img
						className="product__image"
						src={product.image}
						alt={product.title}
					/>
					<h3 className="product__title">{product.title}</h3>
				</div>
				<p className="product__price">${product.price}</p>
			</Link>
			<button
				className="product__add-to-cart"
				onClick={() => addToCart(product)}
			>
				Add to Cart
			</button>
		</div>
	);
}
