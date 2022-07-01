import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	books: [],
	customerName: '',
	couponAdded: false
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBook: (state, action) => {
			action.payload.discountedPrice = action.payload.price;
			state.books.push(action.payload)
		},
		removeBook: (state) => {
			state.books.pop();
		}, 
		changeCustomerName: (state, action) => {
			state.customerName = action.payload;
		},
		addCoupon: (state) => {
			// state.couponAdded = true;
		}
	}
});

export const { addBook, removeBook, addCoupon } = cartSlice.actions;
export default cartSlice.reducer;