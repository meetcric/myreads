import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import BookShelves from "./components/BookShelves";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  //fetch all the book details and set the state
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <BookShelves books={this.state.books} />
      </div>
    );
  }
}

export default BooksApp;
