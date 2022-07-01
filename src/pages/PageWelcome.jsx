import { useDispatch, useSelector } from 'react-redux';

export const PageWelcome = () => {
	const dispatch = useDispatch();
	const { customerName } = useSelector((state) => state.cart);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			Customer Name: <input type="text" value={customerName} onChange={(e) => dispatch({type: 'cart/changeCustomerName', payload: e.target.value})} />
		</div>
	)
}