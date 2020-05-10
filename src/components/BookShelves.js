import React, { Component } from "react";
import { Link } from "react-router-dom";
// import BrandBar from "./BrandBar";
import BookDisplay from "./BookDisplay";

class BookShelves extends Component {
  render() {
    const { onShelfChange, books } = this.props;

    return (
      <div className="list-books">
        {/* <BrandBar /> */}
        <div className="list-books-content">
          <BookSection
            onShelfChange={onShelfChange}
            books={books.filter((b) => b.shelf === "currentlyReading")}
            shelfName="Currently Reading"
          />
          <BookSection
            onShelfChange={onShelfChange}
            books={books.filter((b) => b.shelf === "wantToRead")}
            shelfName="Want to Read"
          />
          <BookSection
            onShelfChange={onShelfChange}
            books={books.filter((b) => b.shelf === "read")}
            shelfName="Read"
          />
        </div>
      </div>
    );
  }
}

const BookSection = ({ onShelfChange, books, shelfName }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {shelfName}-
      <span
        style={{
          color: "Tomato",
        }}
      >
        ({books.length})
      </span>
    </h2>
    {books.length === 0 ? (
      <div className="no-results">Nothing to show</div>
    ) : (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <BookDisplay
              key={book.id}
              book={book}
              onShelfChange={onShelfChange}
            />
          ))}
        </ol>
      </div>
    )}
  </div>
);

export default BookShelves;
