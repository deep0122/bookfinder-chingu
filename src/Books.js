import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

class Books extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
      error: undefined
    }
  }

  onsearchChange = (e) => {
    this.setState({search: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({books: [],error: undefined});

    //checking empty 
    if(this.state.search === ''){
      this.setState({error: "Query cannot be empty"});
    }else{
      fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.hasOwnProperty('items')){
              this.setState({books: [...result.items]})
            }else{
              this.setState({error: "No matching books found!"})
            }
          },
          (error) => {
            console.error(error);
            this.setState({error: "Server Error"})
          }
        )
    }
  }

  render() {
    return (
      <div className="Books">          
        <SearchBar error={this.state.error} onsearchChange={this.onsearchChange} onSubmit={this.onSubmit} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default Books;
