import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageCart } from './pages/PageCart';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const url = 'https://edwardtanguay.netlify.app/share/techBooks.json';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const _books = (await axios.get(url)).data;
			_books.forEach((book) => {
				const randomPrice = Math.floor(Math.random() * 20) + 20;
				dispatch({
					type: 'cart/addBook',
					payload: { title: book.title, price: randomPrice },
				});
			});
		})();
	}, []);

	return (
		<div className="App">
			<h1>Book Store App</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/books">Books</NavLink> |{' '}
			<NavLink to="/cart">Cart</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/cart" element={<PageCart />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
