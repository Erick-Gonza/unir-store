import { createContext, useContext, useReducer } from 'react';

const OrderContext = createContext();

const initialState = {
	orders: [],
};

const orderReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				...state,
				orders: [...state.orders, action.payload],
			};
		case 'REQUEST_RETURN':
			return {
				...state,
				orders: state.orders.map((order) =>
					order.id === action.payload.id
						? { ...order, returnRequested: true }
						: order
				),
			};
		default:
			return state;
	}
};

export const OrderProvider = ({ children }) => {
	const [state, dispatch] = useReducer(orderReducer, initialState);

	const addOrder = (order) => {
		dispatch({
			type: 'ADD_ORDER',
			payload: order,
		});
	};

	const requestReturn = (orderId) => {
		dispatch({
			type: 'REQUEST_RETURN',
			payload: { id: orderId },
		});
	};

	return (
		<OrderContext.Provider
			value={{ orders: state.orders, addOrder, requestReturn }}
		>
			{children}
		</OrderContext.Provider>
	);
};

export const useOrders = () => useContext(OrderContext);
