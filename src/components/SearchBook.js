import React from "react";
import { search } from "../BooksAPI";
import { Link } from "react-router-dom";
import BookDisplay from "./BookDisplay";
import sortBy from "sort-by";

class SearchBook extends React.Component {
  state = {
    searchResults: [],
    query: "",
  };

  queryUpdateHandler = (newQuery) => {
    this.setState({ query: newQuery });
    if (newQuery.length === 0) {
      this.setState({ searchResults: [] });
    } else {
      search(newQuery).then((searchResponse) => {
        const items = searchResponse.error ? [] : searchResponse;
        this.setState({ searchResults: items });
      });
    }
  };
  render() {
    const { onShelfChange, mybooksList } = this.props;
    const { searchResults, query } = this.state;

    // mapping over searchResults to update shelf status
    const processedBooks = searchResults.map((book) => {
      const found = mybooksList.find((myBook) => myBook.id === book.id);
      book.shelf = found ? found.shelf : "none";
      return book;
    });
    processedBooks.sort(sortBy("title"));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <p className="close-search">Close</p>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by titles or categories"
              onChange={(event) => this.queryUpdateHandler(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {processedBooks.length > 0 ? (
            <ol className="books-grid">
              {processedBooks.map((book) => (
                <BookDisplay
                  key={book.id}
                  book={book}
                  onShelfChange={onShelfChange}
                />
              ))}
            </ol>
          ) : (
            <div>
              <div className="no-results">
                No results to show, try some other keywords
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBook;
