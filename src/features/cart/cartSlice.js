import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	books: [],
	customerName: ''
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
		}
	}
});

export const { addBook, removeBook } = cartSlice.actions;
export default cartSlice.reducer;