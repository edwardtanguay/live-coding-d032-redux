import { useDispatch } from 'react-redux';
import { addBook, removeBook } from "../features/cart/cartSlice";

export const PageBooks = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_books">
			<h2>Books</h2>
			<button onClick={() => dispatch(addBook())}>Add book</button>
			<button onClick={()=> dispatch(removeBook())}>Remove book</button>
		</div>
	)
}