import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useProductById({ id }) {
	const [product, setProduct] = useState(null);

	const fetchProductById = async () => {
		try {
			const { data } = await axios.get(
				`https://fakestoreapi.com/products/${id}`
			);
			setProduct(data);
		} catch (error) {
			console.log('Error fetching product by ID:', error);
		}
	};

	useEffect(() => {
		if (id) {
			fetchProductById();
		}
	}, [id]);

	return product;
}
