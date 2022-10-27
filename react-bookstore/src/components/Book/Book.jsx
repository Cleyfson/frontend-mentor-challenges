import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const Book = () => {
	const [book, setBook] = useState([]);
	const { id } = useParams();
	console.log(id);

	const getBook = async () => {
		try {
			const response = await axios.get(
				`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=rRpiMuxqPVRLxWEP5rfyx6Wan2oQAopx`
			);
			const data = await response.data;
			const results = await data.results;

			const bookItem = results.lists[0].books.filter(
				(item) => item.primary_isbn10 == id
			);
			setBook(bookItem);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(book);
	useEffect(() => {
		getBook();
	}, []);

	return (
		<div className='boo-item'>
			<div>
				<img className='book-item__image' src={book[0]?.book_image} alt='/' />
			</div>
			<h4 className='book-item__title'>{book[0]?.title}</h4>
			<h5 className='book-item__author'>{book[0]?.author}</h5>
			<p>{book[0]?.description}</p>
		</div>
	);
};

export default Book;
