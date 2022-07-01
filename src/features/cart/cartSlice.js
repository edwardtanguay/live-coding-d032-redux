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
			state.books.push(action.payload)
		},
		removeBook: (state) => {
			state.books.pop();
		}
	}
});

export const { addBook, removeBook } = cartSlice.actions;
export default cartSlice.reducer;