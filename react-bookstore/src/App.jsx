import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BookList from './components/BookList/BookList';
import './style/global/reset.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
}

export default App;
