import React from "react";
import BookDisplay from "./BookDisplay";

class BookShelves extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-content">
            <BookSection
              books={books.filter((e) => e.shelf === "currentlyReading")}
              shelfName="Currently Reading"
            />
            <BookSection
              books={books.filter((e) => e.shelf === "wantToRead")}
              shelfName="Want to Read"
            />
            <BookSection
              books={books.filter((e) => e.shelf === "read")}
              shelfName="Read"
            />
          </div>
        </div>
      </div>
    );
  }
}

const BookSection = ({ books, shelfName }) => (
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
      <div className="no-results">Nothing to Show</div>
    ) : (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <BookDisplay id={book.id} book={book} />
          ))}
        </ol>
      </div>
    )}
  </div>
);

export default BookShelves;
