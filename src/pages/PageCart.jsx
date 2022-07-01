import { useDispatch } from 'react-redux';
import { addCoupon } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { books, couponAdded } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<p>There are {books.length} books.</p>

			{couponAdded ? (
				<p>*** Coupon Added! ***</p>
			) : (
				<button onClick={dispatch(addCoupon())}>Add Coupon</button>
			)}

			<ul>
				{books.map((book, i) => {
					return (
						<li key={i}>
							{book.title} - {book.price} (discounted:{' '}
							{book.discountedPrice})
						</li>
					);
				})}
			</ul>
		</div>
	);
};
