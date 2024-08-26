import { useState } from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (e) => {
		setQuantity(parseInt(e.target.value, 10));
	};

	return (
		<div className="product">
			<Link to={`/product/${product.id}`} className="product-link">
				<div className="product-card">
					{/* <img
						className="product__image"
						src={product.image}
						alt={product.title}
					/> */}
					<h3 className="product__title">{product.name}</h3>
					<p>{product.description}</p>
					<p>{product.country}</p>
					{/* <p className="product__price">${product.price}</p> */}
				</div>
			</Link>
			<div className="quantity-selector">
				<label htmlFor={`quantity-${product.id}`}>Quantity: </label>
				<input
					id={`quantity-${product.id}`}
					type="number"
					min="1"
					value={quantity}
					onChange={handleQuantityChange}
					className="quantity-input w-16 p-1 text-center border rounded"
				/>
			</div>
			<button
				className="product__add-to-cart mt-2"
				onClick={() => addToCart(product, quantity)}
			>
				Add to Cart
			</button>
		</div>
	);
}
