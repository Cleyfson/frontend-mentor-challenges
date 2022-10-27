import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const BookList = () => {
	const [books, setBooks] = useState([]);
	const navigate = useNavigate();

	const getBooks = async () => {
		try {
			const response = await axios.get(
				`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=rRpiMuxqPVRLxWEP5rfyx6Wan2oQAopx`
			);
			const data = await response.data;
			const results = await data.results;

			setBooks(results.lists[0].books);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<div className='booklist'>
			{books.map((book) => {
				return (
					<div key={book.primary_isbn10} className='book'>
						<div>
							<img
								className='book__image'
								src={book.book_image}
								alt='/'
								onClick={() => navigate(`/books/${book.primary_isbn10}`)}
							/>
							<h4 className='book__title'>{book.title}</h4>
							<h5 className='book__author'>{book.author}</h5>
						</div>
						<button>Add to cart</button>
					</div>
				);
			})}
		</div>
	);
};

export default BookList;
