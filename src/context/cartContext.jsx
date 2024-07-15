import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
	cart: [],
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const existingProduct = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (existingProduct) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + action.payload.quantity }
							: item
					),
				};
			}
			return {
				...state,
				cart: [
					...state.cart,
					{ ...action.payload, quantity: action.payload.quantity },
				],
			};
		case 'UPDATE_CART_ITEM':
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			};
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case 'CLEAR_CART':
			return { ...state, cart: [] };
		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (product, quantity) => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: { ...product, quantity },
		});
	};

	const updateCartItem = (productId, quantity) => {
		dispatch({
			type: 'UPDATE_CART_ITEM',
			payload: { id: productId, quantity },
		});
	};

	const removeFromCart = (productId) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: { id: productId },
		});
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				addToCart,
				updateCartItem,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
