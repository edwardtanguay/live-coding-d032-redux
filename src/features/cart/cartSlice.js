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
			action.payload.discountedPrice = state.couponAdded ? action.payload.price * .9 : action.payload.price;
			state.books.push(action.payload)
		},
		removeBook: (state) => {
			state.books.pop();
		}, 
		changeCustomerName: (state, action) => {
			state.customerName = action.payload;
		},
		addCoupon: (state) => {
			state.couponAdded = true;
			state.books.forEach(book => book.discountedPrice = book.price * .9);
		}
	}
});

export const { addBook, removeBook, addCoupon } = cartSlice.actions;
export default cartSlice.reducer;