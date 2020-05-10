import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import BookShelves from "./components/BookShelves";
import SearchBook from "./components/SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  //fetch all the book details and set the state
  componentDidMount = () => {
    this.fetchBooksList();
  };

  fetchBooksList() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  //Following function will be fire when we change the book shelf section
  shelfChangeHandler = (currentBook, event) => {
    currentBook.shelf = event.target.value;
    const prevState = this.state.books;
    const newState = this.state.books.filter((e) => {
      return e.id !== currentBook.id;
    });
    newState.push(currentBook);
    this.setState({ books: newState });

    BooksAPI.update(currentBook, event.target.value)
      .then((bookData) => {})
      .catch((err) => {
        this.setState({ books: prevState });
      });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelves
              onShelfChange={this.shelfChangeHandler}
              books={this.state.books}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              onShelfChange={this.shelfChangeHandler}
              mybooksList={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
