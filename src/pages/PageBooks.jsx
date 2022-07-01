import { useDispatch } from 'react-redux';
import { removeBook } from "../features/cart/cartSlice";

export const PageBooks = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_books">
			<h2>Books</h2>
			<button onClick={() => dispatch({type: 'cart/addBook', payload: { title: "React 18 The Good Parts", price: 29.99} })}>React 18 The Good Parts</button>
			<button onClick={() => dispatch({type: 'cart/addBook', payload: { title: "Node.js and Express Sites", price: 23.99} })}>Node.js and Express Sites</button>
			<button onClick={()=> dispatch(removeBook())}>Remove book</button>
		</div>
	)
}