import { useParams } from 'react-router-dom';
import useProductById from '../hooks/useProductById';

export default function ProductPage() {
	const { productId } = useParams();
	const product = useProductById({ id: productId });

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<section className="product-page">
			<div className="product__container">
				<img
					className="product__image"
					src={product.image}
					alt={product.title}
				/>
				<h3 className="product__title">{product.title}</h3>
				<p className="product__price ">${product.price}</p>
				<p className="product__description ">{product.description}</p>
				<p className="product__category ">{product.category}</p>
				<div className="product__rating">
					<span className="mr-1">⭐</span>
					<span>{product.rating.rate}</span>
					<span className="ml-2 text-gray-400">
						({product.rating.count} reviews)
					</span>
				</div>
			</div>
		</section>
	);
}
