import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';

const HeaderLayout = () => (
	<>
		<header className="header">
			<Navbar />
		</header>
		<main className="main">
			<Outlet />
		</main>
		<Footer />
	</>
);

const router = createBrowserRouter([
	{
		element: <HeaderLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/products',
				element: <ProductsPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/product/:productId',
				element: <ProductPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/cart',
				element: <div>This is cart</div>,
				errorElement: <ErrorPage />,
			},
			{
				path: '/returns',
				element: <div>This is returns</div>,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
