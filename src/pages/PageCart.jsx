import { useDispatch } from 'react-redux';
import { addCoupon } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { books, couponAdded } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const formatPrice = (price) => {
		return new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
		}).format(price);
	};

	return (
		<div className="page_cart">
			<h2>Cart</h2>

			{books.length === 0 ? (
				<p>
					Your books from your last shopping experience are loading...
				</p>
			) : (
				<>
					<p>There are {books.length} books.</p>

					{couponAdded ? (
						<p>*** Coupon Added! ***</p>
					) : (
						<button onClick={() => dispatch(addCoupon())}>
							Add Coupon
						</button>
					)}

					<ul>
						{books.map((book, i) => {
							return (
								<li key={i}>
									{book.title} - {formatPrice(book.price)}{' '}
									(discounted:{' '}
									{formatPrice(book.discountedPrice)})
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};
