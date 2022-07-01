import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { bookCounter } = useSelector((state) => state.cart);

	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<p>There are {bookCounter} books.</p>
		</div>
	)
}