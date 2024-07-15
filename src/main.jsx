import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductContextProvider from './context/productContext.jsx';
import { CartProvider } from './context/cartContext.jsx';
import './index.css';
import { OrderProvider } from './context/orderContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<CartProvider>
		<OrderProvider>
			<ProductContextProvider>
				<App />
			</ProductContextProvider>
		</OrderProvider>
	</CartProvider>
);
