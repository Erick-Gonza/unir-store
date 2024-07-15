import { useOrders } from '../context/orderContext';

export default function OrdersPage() {
	const { orders, requestReturn } = useOrders();

	return (
		<section className="orders-page">
			<h2 className="orders-page__title">Your Orders</h2>
			{orders.length > 0 ? (
				<div className="orders-page__list">
					{orders.map((order) => (
						<div
							key={order.id}
							className="order-item p-4 bg-white rounded-lg shadow mb-4"
						>
							<h3 className="order-item__id font-bold mb-2">
								Order ID: {order.id}
							</h3>
							<div className="order-item__details">
								{order.items.map((item) => (
									<div key={item.id} className="order-product-item flex mb-2">
										<img
											src={item.image}
											alt={item.title}
											className="order-product-item__image w-16 h-16 object-contain mr-4"
										/>
										<div>
											<h4 className="order-product-item__title font-semibold">
												{item.title}
											</h4>
											<p className="order-product-item__quantity">
												Quantity: {item.quantity}
											</p>
											<p className="order-product-item__price">
												Price: ${(item.price * item.quantity).toFixed(2)}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="order-item__total font-bold text-xl">
								Total: ${order.total}
							</div>
							<div className="order-item__actions mt-4">
								{order.returnRequested ? (
									<p className="text-red-500">Return Requested</p>
								) : (
									<button
										className="return-button bg-red-500 text-white py-2 px-4 rounded"
										onClick={() => requestReturn(order.id)}
									>
										Request Return
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="orders-page__empty">You have no orders</p>
			)}
		</section>
	);
}
