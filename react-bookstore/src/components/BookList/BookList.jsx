import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const BookList = () => {
  const getBooks = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=rRpiMuxqPVRLxWEP5rfyx6Wan2oQAopx`
      );
      const data = response.data;
      const results = data.results;

      console.log(results.lists[0].books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
    console.log('hello');
  }, []);

  return (
    <div className='booklist'>
      <h1>BookList</h1>
    </div>
  );
};

export default BookList;
