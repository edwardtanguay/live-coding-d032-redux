import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { books } = useSelector((state) => state.cart);

	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<p>There are {books.length} books.</p>
			<button>Add Coupon</button>

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
