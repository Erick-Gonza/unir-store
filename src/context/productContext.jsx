import { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// const { data } = await axios.get('https://fakestoreapi.com/products');
			const { data } = await axios.get(
				'https://products-production-866b.up.railway.app/elastic/products'
			);
			setProducts(data);
		}
		fetchData();
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
}

export function useProducts() {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error('useProducts must be used within a ProductProvider');
	}
	return context;
}
