import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bookCounter: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBook: (state) => {
			state.bookCounter += 1;
		},
		removeBook: (state) => {
			state.bookCounter -= 1;
		}
	}
});

export const { addBook, removeBook } = cartSlice.actions;
export default cartSlice.reducer;