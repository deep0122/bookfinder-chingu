import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return(
    <div className="BookList">
      {
        props.books.map((book) => {
          return <Book key={book.id} info={book} />
        })
      }
    </div>
  );
}

export default BookList;
