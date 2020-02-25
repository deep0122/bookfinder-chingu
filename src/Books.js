import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

class Books extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: ''
    }
  }

  onsearchChange = (e) => {
    //handle search validation
    this.setState({search: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({books: [...result.items]})
        },
        (error) => {
          console.error(error);
        }
      )
  }


  render() {
    return (
      <div className="Books">          
        <SearchBar onsearchChange={this.onsearchChange} onSubmit={this.onSubmit} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default Books;
