import React from 'react';
import { useCart } from '../context/cartContext';
import { useOrders } from '../context/orderContext';

export default function CartPage() {
	const { cart, updateCartItem, removeFromCart } = useCart();
	const { addOrder, clearCart } = useOrders();

	const calculateTotal = () => {
		return cart
			.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2);
	};

	const handleQuantityChange = (id, quantity) => {
		updateCartItem(id, parseInt(quantity, 10));
	};

	const handleCheckout = () => {
		const newOrder = {
			id: Date.now(),
			items: cart,
			total: calculateTotal(),
			returnRequested: false,
		};
		addOrder(newOrder);
		alert('Order placed successfully!');
		clearCart();
	};

	return (
		<section className="cart-page">
			<h2 className="cart-page__title">Shopping Cart</h2>
			{cart.length > 0 ? (
				<div>
					<div className="cart-page__list">
						{cart.map((item) => (
							<div key={item.id} className="cart-item">
								{/* <img
									src={item.image}
									alt={item.title}
									className="cart-item__image"
								/> */}
								<div className="cart-item__details">
									<h3 className="cart-item__title">{item.name}</h3>
									{/* <p className="cart-item__price">
										${(item.price * item.quantity).toFixed(2)}
									</p> */}
									<p className="cart-item__quantity">
										Quantity:
										<input
											type="number"
											min="1"
											value={item.quantity}
											onChange={(e) =>
												handleQuantityChange(item.id, e.target.value)
											}
											className="quantity-input w-16 p-1 text-center border rounded ml-2"
										/>
									</p>
									<button
										className="cart-item__remove px-4 py-2 bg-white border rounded-md hover:bg-slate-400 hover:text-white"
										onClick={() => removeFromCart(item.id)}
									>
										Remove
									</button>
								</div>
							</div>
						))}
						<div className="cart-page__total">
							{/* <h3>Total: ${calculateTotal()}</h3> */}
						</div>
					</div>
					<button
						className="checkout-button mt-4 bg-blue-500 text-white py-2 px-4 rounded"
						onClick={handleCheckout}
					>
						Confirm Purchase
					</button>
				</div>
			) : (
				<p className="cart-page__empty">Your cart is empty</p>
			)}
		</section>
	);
}
