import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Book from './components/Book/Book';
import BookList from './components/BookList/BookList';
import { Routes, Route } from 'react-router-dom';
import './style/global/reset.scss';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<BookList />}></Route>
				<Route path='/books/:id' element={<Book />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
